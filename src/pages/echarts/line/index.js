import React from "react";
import { Card } from "antd";
import echarts from "echarts/lib/echarts"; // 主模块
import "echarts/lib/chart/line"; //按需加载折线图
import 'echarts/map/js/china'

// 引入提示框组件、标题组件、工具箱组件。
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import "echarts/lib/component/toolbox";
// 导入React模块类开发的echarts
import ReactEcharts from "echarts-for-react";
//颜色主题
import echartTheme from "../echartsTheme";

export default class Line extends React.PureComponent  {
    componentWillMount() {
        echarts.registerTheme("theme", echartTheme);
    }

    getOption = () => {
        let option = {
            title: { text: "用户骑行订单", x: "center" },
            tooltip: { trigger: "axis" },
            xAxis: { data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"] },
            yAxis: { type: "value" },
            series: [
                {
                    name: "订单量",
                    type: "line",
                    data: [
                        1000,
                        1200,
                        1043,
                        1152,
                        1420,
                        1300,
                        1830
                    ]
                }
            ]
        };
        return option;
    };

    getOption2 = () => {
        let option = {
            title: { text: "用户骑行订单"},
            tooltip: { trigger: "axis" },
            xAxis: { data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"] },
            yAxis: { type: "value" },
            legend: {
                data: ["ofo", "摩拜", "青桔"]
            },
            series: [
                {
                    name: "ofo",
                    type: "line",
                    data: [
                        600,
                        730,
                        814,
                        732,
                        830,
                        987,
                        1132
                    ]
                },
                {
                    name: "摩拜",
                    type: "line",
                    data: [
                        1033,
                        1131,
                        1249,
                        1433,
                        1420,
                        1499,
                        1632
                    ]
                }, {
                    name: "青桔",
                    type: "line",
                    data: [
                        1024,
                        1080,
                        1322,
                        992,
                        1080,
                        1766,
                        2100
                    ]
                }
            ]
        };
        return option;
    };

    getOption3() {
        let option = {
            title: {
                text: '用户骑行订单'
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
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
                    type: 'line',
                    data: [
                        1000,
                        2000,
                        1500,
                        3000,
                        2000,
                        1200,
                        800
                    ],
                    areaStyle: {}
                }
            ]
        }
        return option;
    }

    render() {
        return (
            <div>
                <Card title="折线图1">
                    <ReactEcharts option={this.getOption()} theme="theme" />
                </Card>
                <Card title="折线图2" style={{ marginTop: 10 }}>
                    <ReactEcharts option={this.getOption2()} theme="theme" />
                </Card>
                <Card title="折线图3" style={{ marginTop: 10 }}>
                    <ReactEcharts option={this.getOption3()} theme="theme" />
                </Card>
            </div>
        );
    }
}
