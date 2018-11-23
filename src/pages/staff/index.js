import React from 'react'
import { Card, Select, Button, Input, Table, Form, Modal, Radio,message, Spin, Icon, Alert } from 'antd'
import axios from './../../axios'
const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;

export default class StaffManage extends React.Component {
    state = {
        loading: true,
        userInfo:[],
    }

    componentWillMount() {
        this.requestList();
    }

    requestList = (params) => {
        axios.ajax({
            url: '/table/list',
            data: {
                params: {
                    params: this.params
                }
            }
        }).then((res) => {
            if (res.code == 0) {
                let dataList = res.result.map((item,index)=>{
                    item.key = index;
                    return item;
                })
                this.setState({
                    dataList,
                    loading: false
                })
            }
        }).catch((err) => {
            console.log(err);
        })
    }

     onRowClick = (record,index)=>{
        let selectKey = [index];
        this.setState({
            selectedRowKeys:selectKey,
            selectedItem: record
        })
    }

    handleDetail =(record)=>{
        this.setState({
            visible:true,
            userInfo:record,
        })
        // console.log(this.state.userInfo);
    }

    state = {
        visible: false
    }

    //打开弹框
    handleAdd = () => {
        this.setState({
            visible: true
        })
    }

    handleDelete = (record)=>{
        Modal.confirm({
            title:"提示",
            content:`确定要删除员工${record.name}吗?`,
            onOk:()=>{
                message.success("删除成功!");
                this.setState({
                    visible:false
                })
                this.requestList();
            }
        })
    }

    //关闭弹框
    handleCancel = () => {
        this.setState({
            visible: false
        })
    }
    //点击确定
    handleOk = ()=>{
        this.saveUserInfo();      
    }

    //保存编辑信息
    saveUserInfo = ()=>{
        // let formData = this.userForm.props.form.getFieldValue;
        // console.log(formData);
        let loading = document.getElementById('ajaxLoading');
        loading.style.display = 'block';
        axios.ajax({
            url:'/city/open',
            data:{params:''}
        }).then((res)=>{
            loading.style.display = 'none';
                if(res.code == 0){
                    this.setState({
                        visible:false
                    })
                    message.success("修改成功");
                    this.requestList();
                }                        
        })
    }

    render() {
        const columns = [
            { title: "序号", dataIndex: "id", width: 80 },
            { title: "用户名", dataIndex: "name", width: 100 },
            {
                title: "性别", dataIndex: "sex", width: 80,
                render(sexCode) {
                    let config = {
                        '0': "男",
                        "1": "女"
                    }
                    return config[sexCode]
                }
            },
            { title: "联系地址", dataIndex: "address" },
            { title: "手机号", dataIndex: "mobile" },
            {
                title: '状态',
                dataIndex: 'state',
                width: 120,
                render(state) {
                    let config = {
                        '1': '咸鱼一条',
                        '2': '风华浪子',
                        '3': '北大才子一枚',
                        '4': '百度FE',
                        '5': '创业者'
                    }
                    return config[state]
                }
            },
            {
                title: "操作",
                className: "table-head",
                width: 160,
                render: (text, record) => <div>
                    <a style={{ marginRight: "10px" }} onClick={(item) => this.handleDetail(record)}>编辑</a>
                    <a onClick={(item) => this.handleDelete(record)}>删除</a>
                </div>
            }

        ]
        return (
            <div>
                <Card>
                <Form layout="inline">
                    <FormItem label="用户名">
                    <Input placeholder="请输入用户名" />
                    </FormItem>
                    <FormItem label="性别">
                            <Select style={{ width: 100 }}>
                                <Option value="0">男</Option>
                                <Option value="1">女</Option>
                            </Select>
                        
                    </FormItem>
                    <FormItem style={{ marginLeft: "40px" }}>
                        <Button type="primary" icon="search">查 询</Button>
                        <Button type="primary" style={{ marginLeft: "20px" }} onClick={this.handleAdd} icon="usergroup-add">新 增</Button>
                    </FormItem>
                </Form>
                </Card>
                <Card>
                    <Spin tip="加载中..." spinning={this.state.loading} >
                        <Table
                            bordered
                            columns={columns}
                            dataSource={this.state.dataList}
                            onRow={(record,index) => {
                                return {
                                    onClick:()=>{this.onRowClick(record,index)}
                                }
                            }}
                        />
                    </Spin>
                </Card>
                <Modal
                    visible={this.state.visible}
                    title="编辑用户"
                    onOk={this.handleOk}
                    onCancel={() => {
                        this.setState({
                            visible: false
                        })
                    }}
                    width={800}
                    footer={[
                        <Button key="back" onClick={this.handleCancel}>取消</Button>,
                        <Button key="submit" type="primary" onClick={this.handleOk}>
                            确定
                         </Button>,
                    ]}
                    >
                    <UserForm userInfo={this.state.userInfo}  wrappedComponentRef={(inst) => this.userForm = inst }/>
                </Modal>
            </div>
        )
    }
}
StaffManage = Form.create({})(StaffManage); 

class UserForm extends React.Component {
    getState = (state)=>{
        return {
            '1':'咸鱼一条',
            '2':'风华浪子',
            '3':'北大才子一枚',
            '4':'百度FE',
            '5':'创业者'
        }[state]
    }    
    render() {
        const { getFieldDecorator} = this.props.form;
        const userInfo = this.props.userInfo || {};
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 4 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 14 },
            },
        };

        return (
            <Form layout="horizontal">
            <FormItem label="姓名" {...formItemLayout}>
                {
                    getFieldDecorator('user_name',{
                        initialValue:userInfo.name,
                        rules:[{ required: true, message: '用户名不能为空!' }]
                    }) (
                        <Input type="text" placeholder="请输入姓名"/>
                        )
                }
            </FormItem>
            <FormItem label="性别" {...formItemLayout}>
                {
                    getFieldDecorator('sex',{
                        initialValue:userInfo.sex
                    })(
                    <RadioGroup>
                        <Radio value={0}>男</Radio>
                        <Radio value={1}>女</Radio>
                    </RadioGroup>
                )}
            </FormItem>
            <FormItem label="状态" {...formItemLayout}>
                {
                    getFieldDecorator('state',{
                        initialValue:userInfo.state
                    })(
                    <Select>
                        <Option value={1}>咸鱼一条</Option>
                        <Option value={2}>风华浪子</Option>
                        <Option value={3}>北大才子一枚</Option>
                        <Option value={4}>百度FE</Option>
                        <Option value={5}>创业者</Option>
                    </Select>
                )}
            </FormItem>
            <FormItem label="联系地址" {...formItemLayout}>
                {
                    getFieldDecorator('address',{
                        initialValue:userInfo.address
                    })(
                    <Input.TextArea rows={3} placeholder="请输入联系地址"/>
                )}
            </FormItem>
        </Form>
                
        )
    }
}
UserForm = Form.create({})(UserForm); 