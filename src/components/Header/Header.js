import React from "react";
import { Row, Col } from "antd";
import "./Header.less";
import Util from "./../../utils/utils";
import axios from "../../axios/index";

export default class Header extends React.Component {
  componentWillMount() {
    this.setState({
      userName: "Norman"
    });

    setInterval(() => {
      let sysTime = Util.formateDate(new Date().getTime());
      this.setState({
        sysTime
      });
    }, 1000);
    this.getWeatherAPIData();
  }

  getWeatherAPIData() {
    let city = "成都";
    axios.jsonp({   //处理调取百度天气API跨域
        url:
            "http://api.map.baidu.com/telematics/v3/weather?location=" +
            encodeURIComponent(city) +
          "&output=json&ak=3p49MVra6urFRGOT9s8UBWr2"
      }).then(res => {
        if (res.status == "success") {
          console.log(res);
          let data = res.results[0].weather_data[1];      
          let date = new Date();
          let hour = date.getHours();
          this.setState({
            dayPictureUrl: 6<hour<20 ? data.dayPictureUrl: data.nightPictureUrl,
            weather: data.weather
          });
        }
      });
  }
  render() {
    const  menuType = this.props.menuType;
    return (
      <div className="header">
        <Row className="header-top">
         {  menuType ?<
            Col span="6" className="logo">
                <img src="/assets/logo-ant.svg" alt=""/>
                <span>共享单车管理系统</span>
              </Col> : ''
          }
          <Col span={menuType?18:24}>
              <span>欢迎, {this.state.userName}</span>
              <a href="#" style={{color:"#ff5400",marginLeft:'20px'}}>退出</a>
          </Col>
        </Row>
        {
          menuType ? '':
          <Row className="breadcrumb">
          <Col span="4" className="breadcrumb-title">
            首页
          </Col>
          <Col span="20" className="weather">
            <span className="date">{this.state.sysTime}</span>
            <span className="weather-img">
              <img src={this.state.dayPictureUrl} alt="" />
            </span>
            <span className="weather-detail">{this.state.weather}</span>
          </Col>
        </Row>
        }
       
      </div>
    );
  }
}
