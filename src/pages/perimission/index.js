import React from "react";
import { Card, Button, Table, message, Modal, Form, Select, Input,Tree } from "antd";
import axios from "./../../axios";
import menuConfig from './../../config/menuConfig'
const FormItem = Form.Item;
const Option = Select.Option;
const TreeNode = Tree.TreeNode;


export default class PermissionUser extends React.Component {
    state = { dataList: [], visible: false, permissionVisible: false, detailInfo:{}};

  componentWillMount() {
    this.requestList();
  }

  //加载员工列表
  requestList = () => {
    axios.ajax({
        url: "/role/list",
        data: {
          params: ""
        }
      }).then(res => {
        if (res.code == 0) {
          let dataList = res.result.item_list.map((item, index) => {
            item.key = index;
            return item;
          });
          this.setState({ dataList });
        } else {
          message.info(res.msg);
        }
      });
  };
  //添加员工
  addUser = () => {
    this.setState({ visible: true });
  };
  //取消弹框
  handleCancel = () => {
    this.setState({ visible: false });
  };

  //点击确定
  handleOk = () => {
    this.setState({
      visible: false
    });
    message.success("添加成功!");
    this.requestList();

  };

  //点击行获取数据
    onRowClick = (record, index) => {
        let selectKey = [index];
        this.setState({
          selectedRowKeys: selectKey,
          selectedItem: record,
        detailInfo: record
        });
    }

  //权限设置
    handleDetail = (record) => {
        this.setState({ permissionVisible: true });
        detailInfo: record;
    }
    

  render() {
    const columns = [
      { title: "用户ID", dataIndex: "id" },
      { title: "角色名称", dataIndex: "role_name" },
      { title: "创建时间", dataIndex: "create_time" },
      {
        title: "当前状态",
        dataIndex: "status",
        render(status) {
          let config = { "0": "启用", "1": "未启用" };
          return config[status];
        }
      },
      { title: "授权时间", dataIndex: "authorize_time" },
      { title: "授权人", dataIndex: "authorize_user_name" },
      {
        title: "操作",
          render: (text, record) => <div>
              <a style={{ marginRight: "10px" }} onClick={(item) => this.handleDetail(record)}>设置权限</a>
          </div>
      }
    ];
    return <div>
        <Card title="用户权限">
          <Button type="primary" onClick={this.addUser}>
            添加用户
          </Button>
        </Card>
        <Card style={{ marginTop: 10 }}>
          <Table columns={columns} bordered dataSource={this.state.dataList} onRow={(record, index) => {
              return { onClick: () => {
                  this.onRowClick(record, index);
                } };
            }} />
        </Card>
        <Modal title="新增员工" visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel}>
          <RoleForm wrappedComponentRef={inst => (this.roleForm = inst)} />
        </Modal>
        <Modal title="权限设置" visible={this.state.permissionVisible} onOk={this.handlePerOk} onCancel={() => {
            this.setState({ permissionVisible: false });
          }}>
          <PerMissForm detailInfo={this.state.detailInfo} wrappedComponentRef={inst => (this.roleForm = inst)} />
        </Modal>
      </div>;
  }
}
// 角色创建
class RoleForm extends React.Component {
  render() {
      const { getFieldDecorator, isFieldTouched, getFieldError} = this.props.form;
      const role_nameError = isFieldTouched("role_name") && getFieldError("role_name");
    const formItemLayout = {
      labelCol: { span: 5 },
      wrapperCol: { span: 16 }
    };
    return <Form layout="horizontal">
        <FormItem label="角色名称" validateStatus={role_nameError ? "error" : ""} {...formItemLayout}>
          {getFieldDecorator("role_name", {
            rules: [
              {
                required: true,
                pattern: new RegExp(/^[\u4e00-\u9fa5]+$/, "g"),
                message: "只能输入中文"
              }
            ],
            getValueFromEvent: event => {
                return event.target.value.replace(/^![\u4e00-\u9fa5]$/g, "");
            },
            initialValue: ""
          })(<Input type="text" placeholder="请输入角色名称" />)}
        </FormItem>
        <FormItem label="状态" {...formItemLayout}>
          {getFieldDecorator("state", { initialValue: 1 })(<Select>
              <Option value={1}>开启</Option>
              <Option value={0}>关闭</Option>
            </Select>)}
        </FormItem>
      </Form>;
  }
}
RoleForm = Form.create({})(RoleForm);


//权限设置
class PerMissForm extends React.Component{

  renderTreeNode = (data)=>{
       return  data.map((item) => {
        if(item.children){
          return <TreeNode title={item.title} key={item.key}>
            {this.renderTreeNode(item.children)}
          </TreeNode>
        }else{
          return <TreeNode {...item}/>
        }
      })
  }

    render(){
        const { getFieldDecorator } = this.props.form;
        const detail_info = this.props.detailInfo;
        const formItemLayout = {
            labelCol: { span: 5 },
            wrapperCol: { span: 16 }
        }
        return <Form>
            <FormItem label="角色名称：" {...formItemLayout}>
              <Input disabled maxLength={8} placeholder={detail_info.role_name} />
            </FormItem>
            <FormItem label="角色名称：" {...formItemLayout}>
                {getFieldDecorator('status', {
                    initialValue: '1'
                })(
                    <Select style={{ width: 80 }}
                        placeholder="启用"
                    >
                        <Option value="1">启用</Option>
                        <Option value="0">停用</Option>
                    </Select>
                )}
            </FormItem>
            <Tree checkable 
              defaultExpandAll
              >
              <TreeNode title="平台权限" key="platePermission">
                {this.renderTreeNode(menuConfig)}
              </TreeNode>
            </Tree>
          </Form>;
    }
}
PerMissForm = Form.create({})(PerMissForm);
