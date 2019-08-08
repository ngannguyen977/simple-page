import React, { Component } from 'react';
import './App.scss';
import './main.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './share-component/menu/menu';
import Footer from './share-component/footer/footer'
import routes from './routes';
import logo from "./img/main_logo.png"
import banner from "./img/main-banner.jpg";



class App extends Component {
    render(){
        return (
            <Router>
                <div className="App" >
                    
                    { /* Menu */}
                    <Menu />
                    {/*react ko import kieu nay duoc px */}
                    <div className="main-banner">
                        <img src ={banner} alt=""/>
                    </div>
                    <img src ={logo} alt=""/>
                    { /*CONTENT */}
                    <Switch>
                        {/* phương thức hiển thị ra nôi dung khi trùng khớp routes */}
                        {this.showContentMenus(routes)}
                    </Switch>
                    <Footer />
                </div>
            </Router>
        );
    }
    //tạo vòng lặp cho route
    showContentMenus = (routes) =>{
        let result = null;
        if(routes.length > 0){
            result = routes.map((route, index) =>{
                return (
                    <Route
                        key={index}
                        path ={route.path}
                        exact ={route.exact}
                        component = {route.main}
                    />
                )
            })
        }
        return result;
    }
}

export default App;
