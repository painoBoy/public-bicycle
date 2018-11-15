import React from 'react'
import { Card, Button, Table, Form, Select, Modal, message, Spin, DatePicker } from "antd";
import axios from 'axios';
import Utils from './../../utils/utils'

const FormItem = Form.Item;
const Option = Select.Option;
const { RangePicker } = DatePicker;

export default class Order extends React.Component {
    locale = {
  filterTitle: '筛选',
  filterConfirm: '确定',
  filterReset: '重置',
  emptyText: '暂无数据',
};
    state = {
        // dataList: [],
        loading: true
    }
    params = {
        page: 1
    }
    componentDidMount() {
        this.requestList();
    }
    requestList = () => {
        let _this = this;
        const baseUrl = 'https://www.easy-mock.com/mock/5bd67efe441b485820767219/ItemApi';
        axios.get(baseUrl + '/order/list', {
            params: {
                page: '1'
            }
        }).then((res) => {
            // console.log(res);
            if (res.status == 200) {
                this.setState({
                    loading:false
                })
                if (res.data.code == 0) {
                    let dataList = res.data.result.item_list.map((item, index) => {
                        item.key = index;
                        return item;
                    });
                    console.log(dataList);
                    this.setState({
                        dataList,
                        //     pagination: Utils.pagination(res, (current) => {
                        //     _this.params.page = current;
                        //     _this.requestList();
                        // })
                    })
                }else{
                    message.error(res.data.msg);
                }
            }
        }).catch((erro) => {
            console.log(erro);
        })
    }
    render() {
        const columns = [
            {
                title: "订单编号",
                dataIndex: "order_sn"
            },
            {
                title: "车辆编号",
                dataIndex: "bike_sn"
            },
            {
                title: "用户名",
                dataIndex: "user_name"
            },
            {
                title: "手机号",
                dataIndex: "mobile"
            },
            {
                title: "行驶里程",
                dataIndex: "distance",
                width: 80
            },
            {
                title: "行驶时常",
                dataIndex: "total_time"
            },
            {
                title: "状态",
                dataIndex: "status",
                width: 80,
            },
            {
                title: "结束时间",
                dataIndex: "end_time",
                width: 140
            },
            {
                title: "订单金额",
                dataIndex: "total_fee",
                width: 80
            }
            // {
            //     title: "实付金额",
            //     dataIndex: "user_pay",
            //     width:80
            // }
        ]
        return (
            <div>
                <Card>
                    <QueryForm />
                </Card>
                <Card title="订单详情">
                    <Spin tip="加载中..." spinning={this.state.loading} delay={500}>
                        <Table
                            bordered
                            columns={columns}
                            dataSource={this.state.dataList}
                            pagination={this.state.pagination}
                        />
                    </Spin>
                </Card>
            </div>
        )
    }
}

class QueryForm extends React.Component {
    render() {
        return (
            <Form layout="inline">
                <FormItem label="城市">
                    <Select style={{ width: 100 }} placeholder="全部">
                        <Option value="">全部</Option>
                        <Option value="1">成都市</Option>
                        <Option value="2">德阳市</Option>
                        <Option value="3">绵阳市</Option>
                        <Option value="4">内江市</Option>
                    </Select>
                </FormItem>
                <FormItem label="城市">
                    <RangePicker />
                </FormItem>
                <FormItem label="城市">
                    <Select style={{ width: 100 }} placeholder="全部">
                        <Option value="">全部</Option>
                        <Option value="1">成都市</Option>
                        <Option value="2">德阳市</Option>
                        <Option value="3">绵阳市</Option>
                        <Option value="4">内江市</Option>
                    </Select>
                </FormItem>
                <FormItem>
                    <Button type="primary" onClick={this.handleQuyery} style={{ margin: "0 10px" }}>
                        查询
                    </Button>
                </FormItem>
            </Form>
        )
    }
}
QueryForm = Form.create({})(QueryForm);