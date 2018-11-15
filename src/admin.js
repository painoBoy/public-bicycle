import React from 'react'
import { Row,Col } from 'antd'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import NavLeft from './components/NavLeft/NavLeft'
import Home from './pages/home/home'
import './style/common.less'
import zhCN from 'antd/lib/locale-provider/zh_CN';
import {LocaleProvider} from 'antd'


export default class Admin extends React.Component{
    render(){
        return(
            <LocaleProvider locale={zhCN}>
                <Row className="container">
                    <Col span="3" className="nav-left">
                        <NavLeft/>
                    </Col>
                <Col span="21" className="main">
                <Header/>
                <Row className="content">
                    {/* <Home/> */}
                    {this.props.children}
                </Row>
                <Footer/>
            </Col>
        </Row>
            </LocaleProvider>
            
        )
    }
}