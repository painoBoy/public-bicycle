import React from 'react'
import {Card ,Button,Table} from 'antd'

export default class PermissionUser extends React.Component{
    render(){
        return(
            <div>
                <Card title="用户权限">
                    <Button type="primary">添加用户</Button>
                </Card>
                <Card style={{marginTop:10}}>
                    <Table bordered/>
                </Card>
            </div>
        )
    }
}