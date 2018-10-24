import React from 'react'
import { Card ,Button,Icon,Radio} from 'antd'
import './ui.less'

export default class Buttons extends React.Component{
    state = {
        loading:true,
        size:"default"
    }

    handCloseLoading= ()=>{
        this.setState({
            loading:false
        })
    }

    handLoading = ()=>{
        this.setState({
            loading:true
        })
    }
    handleChange = (e)=>{
        this.setState({
           size: e.target.value
        })
    }

    render(){
        return(
            <div>
                <Card title = "基础组件" className="card">
                    <Button type="primary">primary</Button>
                    <Button>默认</Button>
                    <Button type="dashed">dashed</Button>
                    <Button type="danger">danger</Button>
                    <Button disabled>disabled</Button>
                </Card>
                <Card title = "图形按钮" className="card">
                    <Button icon="plus">创建</Button>
                    <Button icon="edit">编辑</Button>
                    <Button shape="circle" icon="search"></Button>
                    <Button type="primary" icon="search">搜索</Button>
                    <Button type="primary" icon="download">下载</Button>
                </Card>
                <Card title = "图形按钮" className="card">
                    <Button type="primary" loading={this.state.loading}>确定</Button>
                    <Button type="primary" shape="circle" loading = {this.state.loading} />
                    <Button loading={this.state.loading} onClick = {this.handLoading}>点击加载</Button>
                    <Button type="primary" onClick = {this.handCloseLoading}>关闭</Button>
                </Card>
                <Card title = "按钮组" className="card">
                    <Button.Group>
                        <Button className="Btngroup" type="primary"><Icon type="left" />后退</Button>
                        <Button className="Btngroup" type="primary">前进<Icon type="right" /></Button>
                    </Button.Group>
                </Card>
                <Card title = "按钮尺寸" className="card">
                    <Radio.Group onChange={this.handleChange} >
                        <Radio value="small" >小</Radio>
                        <Radio value="default" >中</Radio>
                        <Radio value="large" >大</Radio>
                    </Radio.Group> 
                    <Button type="primary" size={this.state.size}>默认</Button>
                    <Button type="primary" size={this.state.size}>默认</Button>
                    <Button type="primary" size={this.state.size}>默认</Button>
                    <Button type="primary" size={this.state.size}>默认</Button>
                </Card>
            </div>
        )
    }
}