import React, { Component } from 'react';
import './App.scss';
import './main.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './share-component/menu/menu';
import Footer from './share-component/footer/footer'
import routes from './routes';


class App extends Component {
    render(){
        return (
            <Router>
                <div className="App" >
                    { /* Menu */}
                    <Menu />
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
