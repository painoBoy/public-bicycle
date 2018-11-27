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
import City from './pages/city/city'
import Order from './pages/order'
import Common from './common'
import OrderDetail from './pages/order/detail'
import StaffManage from './pages/staff'
import BikeMap from './pages/map';
import Bar from './pages/echarts/bar'
import Pie from "./pages/echarts/pie";
import Line from './pages/echarts/line'
import Maps from './pages/echarts/map'
import Rich from "./pages/rich";
import PermissionUser from './pages/perimission';

export default class IRouter extends React.Component{
    render(){        
        return <HashRouter>
            <App>
              <Switch>
                <Route path="/login" component={Login} />
                <Route path="/common" render={() => <Common>
                      <Route path="/common/order/detail/:orderId" component={OrderDetail} />
                    </Common>
                } />
                <Route path="/" render={() => <Admin>
                      <Switch>
                        <Route path="/home" component={Home} />
                        <Route path="/ui/buttons" component={Buttons} />
                        <Route path="/ui/modals" component={Modals} />
                        <Route path="/ui/loadings" component={Loadings} />
                        <Route path="/ui/notification" component={Notifications} />
                        <Route path="/ui/messages" component={Messages} />
                        <Route path="/ui/tabs" component={Tabis} />
                        <Route path="/ui/gallery" component={Gallery} />
                        <Route path="/ui/carousel" component={Carousels} />
                        <Route path="/form/login" component={FormLogin} />
                        <Route path="/form/reg" component={FormRegister} />
                        <Route path="/table/basic" component={BasicTables} />
                        <Route path="/table/high" component={HighTable} />
                        <Route path="/city" component={City} />
                        <Route path="/order" component={Order} />
                        <Route path="/staff" component={StaffManage} />
                        <Route path="/map" component={BikeMap} />
                        <Route path="/echarts/bar" component={Bar} />
                        <Route path="/echarts/pie" component={Pie} />
                        <Route path="/echarts/line" component={Line} />
                        <Route path="/echarts/map" component={Maps} />
                        <Route path="/rich" component={Rich} />
                        <Route path="/permission" component={PermissionUser} />
                        <Route component={noFound} />
                      </Switch>
                    </Admin>} />
              </Switch>
            </App>
          </HashRouter>;
    }
}