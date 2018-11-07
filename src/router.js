import React from 'react'
import {HashRouter,Route,Switch} from 'react-router-dom'
import App from './App'
import Login from './pages/login/login'
import Admin from './admin'
import Home from './pages/home/home'
import Buttons from './pages/ui/buttons'
import Modals from './pages/ui/modals'
import Loadings from './pages/ui/loadings'
import noFound from './pages/noMatch/noMatch'
import Notifications from './pages/ui/notice'
import Messages from './pages/ui/messages'
import Tabis from './pages/ui/tabs'
import Gallery from './pages/ui/gallery'
import Carousels from './pages/ui/carouel'
import FormLogin from './pages/login/login'
import FormRegister from './pages/login/register'
import BasicTables from  './pages/table/basicTable'
import HighTable from './pages/table/highTable';

export default class IRouter extends React.Component{
    render(){        
        return(
            <HashRouter>
                    <App>
                        <Route path='/login' component={Login}/>
                        <Route path='/' render = {()=>
                            <Admin>
                                <Switch>
                                    <Route path='/home' component={Home}/>
                                    <Route path='/ui/buttons' component={Buttons}/>
                                    <Route path='/ui/modals' component={Modals}/>
                                    <Route path='/ui/loadings' component={Loadings}/>
                                    <Route path='/ui/notification' component={Notifications}/>
                                    <Route path='/ui/messages' component={Messages}/>
                                    <Route path='/ui/tabs' component={Tabis}/>
                                    <Route path='/ui/gallery' component={Gallery}/>
                                    <Route path='/ui/carousel' component={Carousels}/>
                                    <Route path='/form/login/login' component={FormLogin}/>
                                    <Route path='/form/login/register' component={FormRegister}/>
                                    <Route path='/table/basicTable' component={BasicTables}/>
                                    <Route path='/table/highTable' component={HighTable}/>
                                    <Route component={noFound}/>
                                </Switch>
                                
                            </Admin>                 
                            }/>
                        <Route path='/order/detail' component={Login}/>
                    </App>
            </HashRouter>
        )
    }
}