import React from 'react'
import { Card } from 'antd'
import echarts from 'echarts/lib/echarts' // 主模块

// 引入提示框组件、标题组件、工具箱组件。
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/toolbox';
// 导入React模块类开发的echarts
import ReactEcharts from 'echarts-for-react';
//颜色主题
import echartTheme from '../echartsTheme'

export default class Maps extends React.Component {


    componentWillMount(){
        echarts.registerTheme('theme',echartTheme);
    }


 
    render() {
        return <div>
            <Card title="地图">
            </Card>
          </div>;
    }
}
