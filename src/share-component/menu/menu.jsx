import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

const menus = [

    {
        name: 'Trang chủ',
        to: '/',
        exact: true
    },
    {
        name: 'Về mộc hương',
        to: '/about',
        exact: false
    },
    {
        name: 'Liên hệ',
        to: '/contact',
        exact: false
    },
    {
        name: 'Sản phẩm',
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
