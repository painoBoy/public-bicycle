import React from 'react'
import { Card, Button, Table, Form, Select, Modal, message, Spin, DatePicker } from "antd";
import axios from 'axios';
import Utils from './../../utils/utils'
import BaseForm from './../../components/BaseForm/baseForm'
import './../ui/ui.less'

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
    formList = [
        {
            type: 'SELECT',
            label: '城市',
            field: 'city',
            placeholder: '全部',
            initialValue: '1',
            width: 80,
            list: [{ id: '0', name: '全部' }, { id: '1', name: '成都' }, { id: '2', name: '北京' }, { id: '3', name: '上海' }]
        },
        {
            type: '时间查询'
        },
        {
            type: 'SELECT',
            label: '订单状态',
            field: 'order_status',
            placeholder: '全部',
            initialValue: '1',
            width: 120,
            list: [{ id: '0', name: '全部' }, { id: '1', name: '进行中' }, { id: '2', name: '结束行程' }]
        }
    ]

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
                    loading: false
                })
                if (res.data.code == 0) {
                    let dataList = res.data.result.item_list.map((item, index) => {
                        item.key = index;
                        return item;
                    });
                    this.setState({
                        dataList,
                        //     pagination: Utils.pagination(res, (current) => {
                        //     _this.params.page = current;
                        //     _this.requestList();
                        // })
                    })
                } else {
                    message.error(res.data.msg);
                }
            }
        }).catch((erro) => {
            console.log(erro);
        })
    }

    onRowClick = (record,index)=>{
        let selectKey = [index];
        // Modal.info({
        //     title:'信息',
        //     content:`用户名：${record.user_name},手机号:${record.mobile}`
        // })
        this.setState({
            selectedRowKeys:selectKey,
            selectedItem: record
        })
    }

    handleDelete = ()=>{
        Modal.confirm({
            title:"提示",
            content:"确定删除吗？",
            onOk:()=>{
                message.success("删除成功");
                this.requestList();
            }
        })
    }

    handleDetail = (record)=>{
        // let item = this.state.selectedItem;
        window.open(`/#/common/order/detail/${record.id}`,'_blank') 
    }

    render() {
        const status = {
            "1":"完成",
            "2":"未完成"
        }

        const columns = [
            {
                title: "订单编号",
                dataIndex: "order_sn",
                width: 100
            },
            {
                title: "车辆编号",
                dataIndex: "bike_sn",
                width:120
            },
            {
                title: "用户名",
                dataIndex: "user_name",
                width:100
            },
            {
                title: "手机号",
                className:"table-head",
                dataIndex: "mobile",
                width: 140
            },
            {
                title: "行驶里程",
                dataIndex: "distance",
                width: 90,
                render(distance) {
                    return distance / 1000 + 'Km';
                }
            },
            {
                title: "状态",
                dataIndex: "status",
                width: 80,
                render(idx){
                    return status[idx]
                }
            },
            {
                title: "结束时间",
                dataIndex: "end_time",
                width: 140
            },
            {
                title: "订单金额",
                dataIndex: "total_fee",
                width: 100,
                render(count) {
                    return Utils.formatFee(count)
                }
            },
            {
                title: "操作",
                className:"table-head",
                width:140,
                render: (text,record)=><div>
                            <a style={{marginRight:"5px"}} onClick={()=>this.handleDetail(record)}>查看详情</a>
                            <a onClick={(item)=>this.handleDelete(item)}>删除</a>
                        </div>
            }
        ]
        return (
            <div>
                <Card>
                    {/* <QueryForm /> */}
                    <BaseForm formList={this.formList} filterSubmit={this.handleFilter} />
                </Card>
                <Card title="订单详情" className="card">
                    <Spin tip="加载中..." spinning={this.state.loading} delay={500}>
                        <Table
                            bordered
                            columns={columns}
                            dataSource={this.state.dataList}
                            pagination={this.state.pagination}
                            onRow={(record,index) => {
                                return {
                                    onClick:()=>{this.onRowClick(record,index)}
                                }
                            }}
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
                    <Select style={{ width:80}} placeholder="全部">
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