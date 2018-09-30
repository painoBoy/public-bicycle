import React from 'react'
import Child from './Child'
import {Button,Input} from 'antd'
import '../../index.less'
import 'antd/dist/antd.css'



 export default class Life  extends React.Component{
     constructor(props){
         super(props);
         this.state={
             count:0
         }
     }
     
     handleAdd=()=>{
         this.setState({
             count:this.state.count + 1
            })
     }
     render(){
          return <div>
            <Input></Input>
             <p>React生命周期</p>
             <Button onClick={this.handleAdd}>点击一下</Button>
             <p>{this.state.count}</p>
             <Child name ={this.props.count}/>
         </div>
     }
 }