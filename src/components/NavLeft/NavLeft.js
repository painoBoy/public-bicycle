import React from "react";
import { NavLink } from 'react-router-dom'
import { Menu ,Icon,Button} from "antd";
import { connect } from 'react-redux'
import { switchMenu, saveBtnList } from './../../redux/action'
import MenuConfig from "./../../config/menuConfig";
import "./NavLeft.less";

const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;

class NavLeft extends React.PureComponent {
  state = {
    collapsed: false,
    currentKey :''
  }
  componentWillMount() {
    const menuTreeNode = this.renderMenu(MenuConfig);
    const currentKey = window.location.hash.replace('/#|\?.*$/g','');
    this.setState({
      menuTreeNode,
      collapsed: !this.state.collapsed,
      currentKey
    });
  }

  //点击设置选中菜单栏高亮
  handleChange =({ item, key })=>{
  // 事件派发，自动调用reducer，通过reducer保存到store对象中
        const { dispatch } = this.props;
        dispatch(switchMenu(item.props.title));


      this.setState({
        currentKey:key
      })
  }
  
  //渲染菜单栏
  renderMenu = data => {
    return data.map(item => {
      if (item.children) {
        return (
          <SubMenu key={item.key} title={item.title}>
            {this.renderMenu(item.children)}
          </SubMenu>
        );
      }
      return (
        <Menu.Item title={item.title} key={item.key}>
          <NavLink to={item.key}>{item.title}</NavLink>
        </Menu.Item>
      );
    });
  };

  render() {
    return (
      <div>
        <div className="logo">
          <img src="/assets/logo-ant.svg" alt="" />
          <h1>Bike Share</h1>
        </div>
        <Menu
        onClick={this.handleChange}
        selectedKeys={this.state.currentKey}
         theme="dark"
              // mode="inline"
              // inlineCollapsed={this.state.collapsed}
        >
        {this.state.menuTreeNode}
        </Menu>
      </div>
    );
  }
}
export default connect()(NavLeft)