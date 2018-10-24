import React from "react";
import { Card ,Tabs,message,Icon} from 'antd'
import './ui.less'
const TabPane = Tabs.TabPane;

export default class Tabis extends React.Component{

    componentWillMount(){
        this.newTabIndex = 0;
        const panes = [
            { title: 'Tab 1', content: 'Content of Tab 1', key: '1' },
            { title: 'Tab 2', content: 'Content of Tab 2', key: '2' },
            { title: 'Tab 3', content: 'Content of Tab 3', key: '3' }
        ]
        this.setState({panes});
    }

    callback = (key)=>{
        message.success("点击的是"+key);
    }

    onChange = (activeKey) => {
        this.setState({ activeKey });
        message.success(activeKey);
    }

    onEdit = (targetKey, action) => {
        this[action](targetKey);
    }

   add = () => {
    const panes = this.state.panes;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey });
    this.setState({ panes, activeKey });
  }

  remove = (targetKey) => {
    let activeKey = this.state.activeKey;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (lastIndex >= 0 && activeKey === targetKey) {
      activeKey = panes[lastIndex].key;
    }
    this.setState({ panes, activeKey });
  }

    render(){
        return(
            <div>
                <Card title="Tab标签页" className="card">
                    <Tabs defaultActiveKey="1" onChange={this.callback}>
                        <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
                        <TabPane tab="Tab 2" key="2" disabled>Content of Tab Pane 2</TabPane>
                        <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
                    </Tabs>
                </Card>
                <Card title="Tab带图标" className="card">
                    <Tabs defaultActiveKey="2">
                        <TabPane tab={<span><Icon type="apple" />IOS</span>} key="1">
                            this is IOS' page
                        </TabPane>
                        <TabPane tab={<span><Icon type="android" />Andorid</span>} key="2">
                            this is Android's page
                        </TabPane>
                    </Tabs>
                </Card>
                <Card title="动态Tab标签页" className="card">
                    <Tabs defaultActiveKey="1"
                     type="editable-card" 
                     activeKey={this.state.activeKey}
                     onChange = {this.onChange}
                     onEdit={this.onEdit}
                    >
                        {this.state.panes.map((panes)=>{
                            return <TabPane 
                            onEdit={this.onEdit} 
                            tab={panes.title}
                            key={panes.key}
                            >{panes.content}</TabPane>
                        })}
                    </Tabs>
                </Card>
            </div>
        )
    }
}