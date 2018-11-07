import React from 'react'
import {Card,Table,Modal,Spin} from 'antd'
// import './../ui/ui.less'
import axios from 'axios'
// import Axios from './../../axios/index'

export default class highTable extends React.Component{
    constructor(props){
        super();
        this.state = {
            dataSource2 :[],
            loading:true
        }
    }
    componentDidMount(){
          this.request()
    }

    request = ()=>{
        let baseUrl = 'https://www.easy-mock.com/mock/5bd67efe441b485820767219/ItemApi';
        axios.get(baseUrl+'/table/list').then((res)=>{
            let data = res.data.result;
            if(res.status == 200 ){
                if(res.data.code == 0){
                    this.setState({
                        dataSource2:data,
                        loading:false
                    })
                    console.log(data);
                }else{
                    Modal.info({
                        title:'提示',
                        content:res.data.msg
                    })
                }                
            }
        }).catch((erro)=>{
            console.log(erro);
        })
        // Axios.ajax({
        //     url:'/table/list',
        //     data:{
        //         params:{
        //             page:1
        //         }
        //     }
        // }).then((res)=>{
        //     if(res.code == 0 ){
        //         this.setState({
        //             dataSource2:res.result
        //         })
        //     }
        // })
        
    }
    render(){
        let config = {
            "1":'LOL',
            '2':'PUBG',
            '3':'Dota2',
            '4':'星际争霸',
            '5':'守望先锋'
        },status = {
            '0':'进行中',
            '1':'完成'
        }
        const columns2 = [{
            fixed:'left',
            title:'序号',
            dataIndex:'id',
            key:'id',
            width: 80,
          },{
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
            width:80,
          }, {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
            width:80,
          }, {
            title: '住址',
            dataIndex: 'address',
            key: 'address',
          },{
            title:'爱好',
            dataIndex:'games',
            render(idx){
                return config[idx]
            },
            width:220,
          },{
              title:'状态',
              dataIndex:'state',
              render(idx){
                  return status[idx]
              },
              width:80,
          },{
            title:'状态',
            dataIndex:'state',
            render(idx){
                return status[idx]
            },
            width:80,
        },{
            title:'状态',
            dataIndex:'state',
            render(idx){
                return status[idx]
            },
            width:80,
        }];
          const columns = [{
            title:'序号',
            dataIndex:'id',
            key:'id',
            width: 80,
          },{
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
            width:80,
          }, {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
            width:80,
          }, {
            title: '住址',
            dataIndex: 'address',
            key: 'address',
          },{
            title:'爱好',
            dataIndex:'games',
            render(idx){
                return config[idx]
            },
            width:220,
          },{
              title:'状态',
              dataIndex:'state',
              render(idx){
                  return status[idx]
              },
              width:80,
          },
          {
            title:'状态',
            dataIndex:'state',
            render(idx){
                return status[idx]
            },
            width:80,
          }];
          const selection = {
              type:'radio'
          }
          const selection2 = {
            type:'checkbox'
        }
        return(
            <div>
                <Card title="动态表格" className="card">
                <Spin tip="加载中..." spinning={this.state.loading} delay={500}>
                    <Table 
                    bordered={true} 
                    dataSource={this.state.dataSource2} 
                    columns={columns} 
                    pagination={false}
                    scroll ={{y:240}}
                     />
                </Spin>
                </Card>
                <Card title="Mock表格-单选" className="card">
                <Spin tip="加载中..." spinning={this.state.loading} delay={500}>
                    <Table 
                    scroll = {{y:260}}
                    bordered={true}
                    dataSource={this.state.dataSource2}
                    columns={columns} 
                    rowSelection={selection}
                    pagination={false}
                    />
                </Spin>
                </Card>

            <Card title="Mock表格-复选" className="card">
                <Spin tip="加载中..."  spinning={this.state.loading} delay={500}>
                    <Table 
                    dataSource={this.state.dataSource2}
                    columns={columns2} 
                    rowSelection={selection2}
                    scroll={{x:1200}}
                    pagination={{
                        total:5,
                        pageSize:3,
                    }}
                    />
                </Spin>
                </Card>
            </div>
        )
    }
}