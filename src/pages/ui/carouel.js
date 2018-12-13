import React from 'react'
import {Card,Carousel} from 'antd'
import './ui.less'

export default class Carousels extends React.PureComponent{
    render(){
        return(
            <div>
                <Card title="走马灯" className="card" >
                    <Carousel autoplay ={true} effect="fade">
                        <div><h3>React</h3></div>
                        <div><h3>Vue</h3></div>
                        <div><h3>Angular</h3></div>
                    </Carousel>
                </Card>   
            </div>
        )
    }
}