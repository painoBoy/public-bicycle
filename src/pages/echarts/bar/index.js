import React from 'react'
import {Card,Button} from 'antd'
// import echarts from 'echarts' 
import echarts from 'echarts/lib/echarts' // echarts 主模块
import 'echarts/lib/chart/bar'
// 引入提示框组件、标题组件、工具箱组件。
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/toolbox';
import ReactEcharts from 'echarts-for-react';
import echartTheme from '../echartsTheme'


export default class Bar extends React.PureComponent{

    componentWillMount(){
        echarts.registerTheme('theme',echartTheme);
    }

    getOption(){
        let option = {
            title: {
                text: '用户骑行订单'
            },
            tooltip : {
                trigger: 'axis'
            },
            xAxis: {
                data: [
                    '周一',
                    '周二',
                    '周三',
                    '周四',
                    '周五',
                    '周六',
                    '周日'
                ]
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: '订单量',
                    type: 'bar',
                    data: [
                        1000,
                        2000,
                        1500,
                        3000,
                        2000,
                        1200,
                        800
                    ]
                }
            ]
        }
        return option;
    }

    getOption2(){
        let option = {
            title: {
                text: '用户骑行订单'
            },
            tooltip : {
                trigger: 'axis'
            },
            legend:{
                data:['OFO','摩拜','青桔']
            },
            xAxis: {
                data: [
                    '周一',
                    '周二',
                    '周三',
                    '周四',
                    '周五',
                    '周六',
                    '周日'
                ]
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: 'OFO',
                    type: 'bar',
                    data: [
                        1000,
                        2000,
                        3880,
                        5402,
                        7420,
                        10000,
                        13000
                    ]
                },
                {
                    name: '摩拜',
                    type: 'bar',
                    data: [
                        1500,
                        3000,
                        4500,
                        6000,
                        8000,
                        10000,
                        15000
                    ]
                },
                {
                    name: '青桔',
                    type: 'bar',
                    data: [
                        1300,
                        2000,
                        2500,
                        4000,
                        6900,
                        13000,
                        14000
                    ]
                },
            ]
        }
        return option;
    }


    render(){
        return(
            <div>
                <Card title="柱形图1">
                    <ReactEcharts  option={this.getOption()} theme="theme" style={{height:400}} />
                </Card>
                <Card title="柱形图2" style={{marginTop:10}}>
                    <ReactEcharts  option={this.getOption2()} theme="theme" style={{height:400}} />
                </Card>
            </div>
        )
    }
}