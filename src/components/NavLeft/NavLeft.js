import React from "react";
import { NavLink } from 'react-router-dom'
import { Menu ,Icon,Button} from "antd";
import MenuConfig from "./../../config/menuConfig";
import "./NavLeft.less";

const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;

export default class NavLeft extends React.Component {
  state = {
    collapsed: false
  }
  componentWillMount() {
    const menuTreeNode = this.renderMenu(MenuConfig);

    this.setState({
      menuTreeNode,
      collapsed: !this.state.collapsed
    });
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
        <Menu theme="dark"
              // mode="inline"
              // inlineCollapsed={this.state.collapsed}
        >
        {this.state.menuTreeNode}
        </Menu>
      </div>
    );
  }
}
