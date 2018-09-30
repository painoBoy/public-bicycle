import React from 'react';

export default class Child  extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:'liaoxiaozhou'
        }
    }
    componentWillMount(){
        console.log('willMount');
    }
    componentWillUpdate(){
        console.log('willUpdate');
    }
    componentDidMount(){
        console.log('DidMount');
    }

    render(){
        return <div>
        <p>这里是自组件的生命周期</p>
            <p>{this.props.name}</p>
        </div>
    }
}