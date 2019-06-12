import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

const menus = [

    {
        name: 'Home',
        to: '/',
        exact: true
    },
    {
        name: 'About',
        to: '/about',
        exact: false
    },
    {
        name: 'Contact',
        to: '/contact',
        exact: false
    },
    {
        name: 'Products',
        to: '/products',
        exact: false
    }
]
//custom menu
const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => {
            let active = match ? 'active' : '';
            return (
                <li className={`my-li ${active}`}>
                    <Link to={to} className="my-link">
                        {label}
                    </Link>
                </li>
            )
        }}
         />

    )
}

class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-default" >
                <ul className="nav navbar-nav">
                    {this.showMenus(menus)}
                </ul>
            </nav>
        );
    }
    //tạo vòng lặp menu
    showMenus = (menus) => {
        let result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink
                        key={index}
                        label={menu.name}
                        to={menu.to}
                        activeOnlyWhenExact={menu.exact}
                    />
                )
            });
        }
        return result;
    }
}
export default Menu;
