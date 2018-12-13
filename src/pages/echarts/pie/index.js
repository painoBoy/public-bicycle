import React from 'react'
import { Card } from 'antd'
import echarts from 'echarts/lib/echarts' // 主模块
import 'echarts/lib/chart/pie' //按需加载饼图

// 引入提示框组件、标题组件、工具箱组件。
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/toolbox';
// 导入React模块类开发的echarts
import ReactEcharts from 'echarts-for-react';
//颜色主题
import echartTheme from '../echartsTheme'

export default class Pie extends React.PureComponent {

    componentWillMount(){
        echarts.registerTheme('theme',echartTheme);
    }

    getOption = ()=>{
        let option = {
            title:{
                text:'用户骑行订单',
                x:'center'
            },
            legend:{
                orient: 'vertical',
                right: 10,
                data:["周一","周二","周三","周四","周五","周六","周日"]
            },
            tooltip:{
                trigger:'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            series:[{
                name:"订单量",
                type:"pie",
                data:[{value:1000,name:'周一'},
                    {value:1200,name:'周二'},
                    {value:1043,name:'周三'},
                    {value:1152,name:'周四'},
                    {value:1420,name:'周五'},
                    {value:1300,name:'周六'},
                    {value:1830,name:'周日'}]
            }]
    }
    return option;
}

 getOption2 = () => {
     let option = {
         title: {
             text: '用户骑行订单',
             x: 'center'
         },
         legend: {
             orient: 'vertical',
             right: 10,
             data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
         },
         tooltip: {
             trigger: 'item',
             formatter: '{a} <br/>{b} : {c} ({d}%)'
         },
         series: [{
             name: "订单量",
             radius:["50%","70%"],
             type: "pie",
             data: [{
                     value: 1000,
                     name: '周一'
                 },
                 {
                     value: 920,
                     name: '周二'
                 },
                 {
                     value: 1043,
                     name: '周三'
                 },
                 {
                     value: 1152,
                     name: '周四'
                 },
                 {
                     value: 1420,
                     name: '周五'
                 },
                 {
                     value: 1300,
                     name: '周六'
                 },
                 {
                     value: 1830,
                     name: '周日'
                 }
             ]
         }]
     }
     return option;
 }

    getOption3 = () => {
        let option = {
            title: {
                text: '用户骑行订单',
                x: 'center'
            },
            legend: {
                orient: 'vertical',
                right: 10,
                data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            roseType :'radius',
            series: [{
                name: "订单量",
                type: "pie",
                data: [{
                    value: 1000,
                    name: '周一'
                },
                {
                    value: 920,
                    name: '周二'
                },
                {
                    value: 1043,
                    name: '周三'
                },
                {
                    value: 1152,
                    name: '周四'
                },
                {
                    value: 1420,
                    name: '周五'
                },
                {
                    value: 1300,
                    name: '周六'
                },
                {
                    value: 1630,
                    name: '周日'
                }
                ].sort((a,b)=>{
                    return a.value - b.value
                })
            }]
        }
        return option;
    }

    render() {
        return (
            <div>
                <Card title="饼图一">
                    <ReactEcharts option={this.getOption()} theme="theme" />
                </Card>
                <Card title="饼图二" style={{marginTop:10}}>
                    <ReactEcharts option={this.getOption2()} theme="theme" />
                </Card>
                <Card title="饼图三" style={{marginTop:10}}>
                    <ReactEcharts option={this.getOption3()} theme="theme" />
                </Card>
            </div>
        )
    }
}
