import React from 'react'
import { Row,Col } from 'antd'
import Header from './components/Header/Header'
import './style/common.less'
import zhCN from 'antd/lib/locale-provider/zh_CN';
import {LocaleProvider} from 'antd'


export default class Common extends React.PureComponent {

    render() {
        return (
            <div>
                <Row className="simple-page">
                    <Header menuType="second" />
                </Row>
                <Row className="content">
                    {this.props.children}
                </Row>
                
            </div>
        );
    }
}