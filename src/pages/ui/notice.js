import React from "react";
import { Card ,Button,notification} from 'antd'
import './ui.less'

export default class Notifications extends React.PureComponent{
    openNotication =(type,val)=>{
        notification[type]({
            placement: val,
            message: '订单完成了',
            description: '高新区22104号订单完成',
        });
    }

    render(){
        return(
            <div>
                <Card title ="通知提醒框" className="card">
                    <Button type="primary" onClick={()=>this.openNotication("success")}>Success</Button>
                    <Button type="primary" onClick={()=>this.openNotication("info")}>Info</Button>
                    <Button type="primary" onClick={()=>this.openNotication("warning","bottomRight")}>Warning</Button>
                    <Button type="primary" onClick={()=>this.openNotication("error")}>Error</Button>
                </Card>
            </div>
        )
    }
}