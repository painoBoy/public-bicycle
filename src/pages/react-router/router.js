import React from 'react'
import {Route,Switch,HashRouter} from 'react-router-dom'
import About from './about'
import Main from './main'
import Home from './home'
import Topics from './topics'

export default class Router extends React.Component{
    render(){
        return(
                <div>
                    <HashRouter>
                    <Home>
                    <Switch>
                        <Route exact = {true} path="/" component={Main}></Route>
                        <Route path="/about" component={About}></Route>
                        <Route path="/topics" component={Topics}></Route>
                </Switch>
                    </Home>
                    </HashRouter>
                </div>
        )
    }
}