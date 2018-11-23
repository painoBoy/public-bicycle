import React from 'react';
import { Card, Select, Button, Input, Form, DatePicker } from 'antd'
import BaseFome from './../../components/BaseForm/baseForm'
import axios from './../../axios'
import './../order/detail.less'


const FormItem = Form.Item;
const Option = Select.Option;
const { RangePicker } = DatePicker;

export default class BikeMap extends React.Component {
    componentWillMount() {
        this.getBikeList();
    }

    getBikeList = ()=>{
        axios.ajax({
            url:'/bikeList',
            data:{
                params:{
                    
                }
            }
        }).then((res)=>{
            if(res.code == 0){
                console.log(res.result);
                this.initMap(res.result);
            }
        })
    }

    initMap = (res)=>{
        let list = res.route_list;
        this.map = new window.BMap.Map("container", {enableMapClick: false});
        this.map.addControl(new window.BMap.NavigationControl());
        this.map.addControl(new window.BMap.OverviewMapControl());
        let gps1 = list[0].split(',');
        let startPoint = new window.BMap.Point(gps1[0], gps1[1]);
        let gps2 = list[list.length - 1].split(',');
        let endPoint = new window.BMap.Point(gps2[0], gps2[1]);
        
        this.map.centerAndZoom(endPoint, 15);

         // 添加地图中的自行车
        let bikeList = res.bike_list;
        let bikeIcon = new window.BMap.Icon("/assets/bike.jpg", new window.BMap.Size(36, 42), {
            imageSize: new window.BMap.Size(36, 42),
            anchor: new window.BMap.Size(18, 42)
        });
        bikeList.forEach((item) => {
            let p = item.split(",");
            let point = new window.BMap.Point(p[0], p[1]);
            var bikeMarker = new window.BMap.Marker(point, { icon: bikeIcon });
            this.map.addOverlay(bikeMarker);
        })
    }


    formList = [
        {
            type: 'SELECT',
            label: '城市',
            field: 'city',
            placeholder: '全部',
            initialValue: '0',
            width: 80,
            list: [{ id: '0', name: '成都' }, { id: '1', name: '杭州' }, { id: '2', name: '北京' }, { id: '3', name: '上海' }]
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

    render() {

        return (
            <div>
                <Card>
                    <BaseFome formList={this.formList} />
                </Card>
                <Card style={{marginTop:20}}>
                    <div id="container" style={{height:500}}></div>
                </Card>
            </div>
        )
    }
}
