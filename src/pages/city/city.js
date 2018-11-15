import React from "react";
import { Card, Button, Table, Form, Select, Modal, message,Spin } from "antd";
import axios from "axios";
import Axios from './../../axios'
import Utils from './../../utils/utils'

const FormItem = Form.Item;
const Option = Select.Option;

export default class City extends React.Component {
  state = {
    isShowOpenCity:false,
    list: [],
    loading:true
  };

  componentDidMount() {
    this.request();
  }
  request = () => {
    let _this = this;
    let baseUrl = "https://www.easy-mock.com/mock/5a7278e28d0c633b9c4adbd7/api";
    axios.get(baseUrl + "/open_city").then(res => {
        let data = res.data.result;
        if (res.status == 200) {
          if (res.data.code == 0) {
            let list = res.data.result.item_list.map((item, index) => {
              item.key = index;
              return item;
            });
            this.setState({
              list,
              loading:false
            });
          } else {
            Modal.info({
              title: "提示",
              content: res.data.msg
            });
          }
        }
      })
      .catch(erro => {
        console.log(erro);
      });
  };

  //查询
  // handleQuyery = ()=>{
  //   alert(33);
  // }

    //开通城市
  handleOpenCity = ()=>{
      if(!this.state.isShowOpenCity){
          this.setState({
            isShowOpenCity:true
          })
      }
  }

  //城市提交
  handleSubmit = ()=>{
    let cityInfo = this.cityForm.props.form.getFieldsValue();
    let baseUrl = "https://www.easy-mock.com/mock/5bd67efe441b485820767219/ItemApi";
    axios.get(baseUrl + "/city/open",{
      parms:{
        data:cityInfo
      }
    }).then(res => {
        console.log(res);
        if (res.status == 200) {
          if (res.data.code == 0) {
            message.success("开通成功!");
            this.setState({
              isShowOpenCity:false
            })
            this.request();
          } else {
            Modal.info({
              title: "提示",
              content: res.data.msg
            });
          }
        }
      })
      .catch(erro => {
        console.log(erro);
      });
  }

  render() {
    const columns = [
      {
        title: "城市ID",
        dataIndex: "id"
      },
      {
        title: "城市名称",
        dataIndex: "name"
      },
      {
        title: "用车模式",
        dataIndex: "mode",
        render(mode) {
          return mode == 1 ? "停车点" : "禁停区";
        }
      },
      {
        title: "营运模式",
        dataIndex: "op_mode",
        render(op_mode) {
          return op_mode == 1 ? "自营" : "加盟";
        }
      },
      {
        title: "授权加盟商",
        dataIndex: "franchisee_name"
      },
      {
        title: "城市管理员",
        dataIndex: "city_admins",
        render(arr) {
          return arr
            .map(item => {
              return item.user_name;
            })
            .join(",");
        }
      },
      {
        title: "城市开通时间",
        dataIndex: "open_time",
        width:200
      },
      {
        title: "操作时间",
        dataIndex: "update_time"
      },
      {
        title: "操作人",
        dataIndex: "sys_user_name"
      }
    ];
    return (
      <div>
        <Card>
          <FilterForm />
        </Card>
        <Card style={{ marginTop: 10 }}>
          <Button type="primary" onClick={this.handleOpenCity}>
            开通城市
          </Button>
        </Card>
        <div className="content-wrap">
        <Spin  tip="加载中..." spinning={this.state.loading} delay={500}>
            <Table 
            bordered={true}
            dataSource={this.state.list}
            columns={columns} 
            pagination={this.state.pagination}
            />
        </Spin>
        </div>
        <Modal
          title="开通城市"
          visible={this.state.isShowOpenCity}
          okText = "确定"
          cancelText = "取消"
          onCancel={() => {
            this.setState({
              isShowOpenCity: false
            });
          }}
          onOk={this.handleSubmit}
        >
            <OpenCityForm wrappedComponentRef={(inst)=>{this.cityForm = inst;}}/>
        </Modal>
      </div>
    );
  }
}
class FilterForm extends React.Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form layout="inline">
        <FormItem label="城市">
          {getFieldDecorator("city_id")(
            <Select style={{ width: 100 }} placeholder="全部">
              <Option value="">全部</Option>
              <Option value="1">成都市</Option>
              <Option value="2">德阳市</Option>
              <Option value="3">绵阳市</Option>
            </Select>
          )}
        </FormItem>
        <FormItem label="用车模式">
          {getFieldDecorator("mode")(
            <Select style={{ width: 120 }} placeholder="全部">
              <Option value="">全部</Option>
              <Option value="1">指定停车点模式</Option>
              <Option value="2">禁停区模式</Option>
            </Select>
          )}
        </FormItem>
        <FormItem label="营运模式">
          {getFieldDecorator("op_mode")(
            <Select style={{ width: 80 }} placeholder="全部">
              <Option value="">全部</Option>
              <Option value="1">自营</Option>
              <Option value="2">加盟</Option>
            </Select>
          )}
        </FormItem>
        <FormItem label="加盟商授权状态">
          {getFieldDecorator("auth_status")(
            <Select style={{ width: 100 }} placeholder="全部">
              <Option value="">全部</Option>
              <Option value="1">已授权</Option>
              <Option value="2">未授权</Option>
            </Select>
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" onClick={this.handleQuyery} style={{ margin: "0 10px" }}>
            查询
          </Button>
          <Button>重置</Button>
        </FormItem>
      </Form>
    );
  }
}
FilterForm = Form.create({})(FilterForm);

class OpenCityForm extends React.Component {
  render() {
    const formItemLayout = {
      labelCol: {
        span: 5
      },
      wrapperCol: {
        span: 19
      }
    };
    const { getFieldDecorator } = this.props.form;
    return (
      <Form layout="horizontal">
        <FormItem label="选择城市" {...formItemLayout}>
          {getFieldDecorator("city_id", {
            initialValue: "1"
          })(
            <Select style={{ width: 100 }}>
              <Option value="">全部</Option>
              <Option value="1">成都市</Option>
              <Option value="2">德阳市</Option>
            </Select>
          )}
        </FormItem>
        <FormItem label="营运模式" {...formItemLayout}>
          {getFieldDecorator("op_mode", {
            initialValue: "1"
          })(
            <Select style={{ width: 100 }}>
              <Option value="1">自营</Option>
              <Option value="2">加盟</Option>
            </Select>
          )}
        </FormItem>
        <FormItem label="用车模式" {...formItemLayout}>
          {getFieldDecorator("use_mode", {
            initialValue: "1"
          })(
            <Select style={{ width: 100 }}>
              <Option value="1">指定停车点</Option>
              <Option value="2">禁停区</Option>
            </Select>
          )}
        </FormItem>
      </Form>
    );
  }
}
OpenCityForm = Form.create({})(OpenCityForm);
