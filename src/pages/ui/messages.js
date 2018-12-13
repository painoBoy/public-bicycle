import React from "react";
import { Card ,Button,message} from 'antd'
import './ui.less'

export default class Messages extends React.PureComponent{
    showMessages = (type)=>{
        if(type =='success'){
            message[type]('保存成功!')
        }else if(type=='info'){
            message[type]('保存成功!')
        }else if(type== 'warning'){
            message[type]("确定？")
        }else if(type=='error'){
            message[type]("保存失败")
        }else{
            message[type]("加载中...")
        }
        
    }

    render(){
        return(
            <div>
                <Card title="全局提示框" className="card">
                    <Button type="primary" onClick={()=>this.showMessages('success')}>Success</Button>
                    <Button type="primary" onClick={()=>this.showMessages('info')}>Info</Button>
                    <Button type="primary" onClick={()=>this.showMessages('warning')}>Warning</Button>
                    <Button type="primary" onClick={()=>this.showMessages('error')}>Error</Button>
                    <Button type="primary" onClick={()=>this.showMessages('loading')}>Loading</Button>
                </Card>
            </div>
        )
    }
}