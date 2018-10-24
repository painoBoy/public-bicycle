import React from "react";
import { Card ,Button,Modal} from 'antd'
import './ui.less'

export default class Modals extends React.Component{

    state = { 
        visible1: false, 
        visible2: false, 
        visible3: false
        }

    showModal = (type)=>{
        this.setState({
            [type]:true
        })
    }

    showConfirm=(type)=>{
        Modal[type]({
            title: [type],
            content: 'Bla bla ...',
            okText: '确认',
            cancelText: '取消',
  });
    }

    handleCancel =()=>{
        this.setState({
            visible1:false,
            visible2:false,
            visible3:false,
            visible4:false
        })
    }

    handOk = ()=>{
        this.setState({
            visible1:false,
            visible2:false,
            visible3:false,
            visible4:false
        })
    }

    render(){
        return(
            <div>
                 <Card title="模态框" className="card">
                    <Button type="primary" onClick={()=>this.showModal("visible1")}>Open</Button>
                    <Button type="primary" onClick={()=>this.showModal("visible2")}>自定义</Button>
                    <Button type="primary" onClick={()=>this.showModal("visible3")}>top20px</Button>
                    <Button type="primary" onClick={()=>this.showModal("visible4")}>水平垂直居中</Button>
                </Card>
                <Card title="信息确认框" className="card">
                    <Button type="primary" onClick={()=>this.showConfirm("confirm")}>Confirm</Button>
                    <Button type="primary" onClick={()=>this.showConfirm("info")}>Info</Button>
                    <Button type="primary" onClick={()=>this.showConfirm("success")}>Success</Button>
                    <Button type="primary" onClick={()=>this.showConfirm("warning")}>Warning</Button>
                </Card>
                <Modal title="模态框"
                visible={this.state.visible1}
                onOk={this.handOk}
                onCancel={this.handleCancel}
                >
                <p>模态框弹出</p>
                
                </Modal>
                <Modal title="模态框"
                visible={this.state.visible2}
                onCancel={this.handleCancel}
                onOk = {this.handOk}
                okText = "可以"
                cancelText = "不行"
                >
                <p>模态框弹出</p>
                
                </Modal>
                <Modal title="模态框"
                visible={this.state.visible3}
                onCancel={this.handleCancel}
                onOk = {this.handOk}
                style={{top:20}}
                >
                <p>模态框弹出</p>
                
                </Modal>
                <Modal title="模态框"
                visible={this.state.visible4}
                onCancel={this.handleCancel}
                onOk = {this.handOk}
                wrapClassName="vertical-center-modal"
                >
                <p>模态框弹出</p>
                
                </Modal>
            </div>
        )
    }
}