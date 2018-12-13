import React from 'react'
import {Route,Switch,Link,HashRouter} from 'react-router-dom'
import About from './about'
import Main from './main'
import Topics from './topics'


export default class Home extends React.PureComponent{
     render(){
         return(
             <HashRouter>
                 <div>
                 <ul>
                    <li>
                        <Link to="/">Home2</Link>
                    </li>
                    <li>
                        <Link to="/about">About3</Link>
                    </li>
                    <li>
                        <Link to="/topics">Topics4</Link>
                    </li>
                </ul>
                <hr />
                {this.props.children}
                 </div>
             </HashRouter>
         )
     }
 }