import React from 'react'
import {Card,Button,Alert,Icon,Spin} from 'antd'
import './ui.less'

export default class Loadings extends React.PureComponent{

    render(){
        const antIcon = <Icon type="loading" style={{ fontSize: 24,marginLeft:20}}  />;
        return(
            <div>
                <Card title="Spin组件" className="card">
                    <Spin size="small" />
                    <Spin style={{margin:"0 10px"}}/>
                    <Spin size="large" />
                    <Spin indicator={antIcon} />
                </Card>
                <Card title="内容遮罩" className="card">
                    <Spin tip="加载中...">
                        <Alert
                        message="Alert message title"
                        description="Further details about the context of this alert."
                        type="info"
                        />
                    </Spin>
                    
                </Card>
                <Card title="内容遮罩" className="card">
                    <Spin indicator={antIcon}>
                        <Alert
                        message="Alert message title"
                        description="Further details about the context of this alert."
                        type="warning"
                        />
                    </Spin>
                    
                </Card>
            </div>
        )
    }
}