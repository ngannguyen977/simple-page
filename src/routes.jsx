import React from 'react';
import HomeComponent from '././pages/home/index';
import AboutComponent from '././pages/about/index';
import ContactComponent from '././pages/contact/index';
import ProductComponent from '././pages/products/index';
import NotFoundComponent from '././pages/not-found/index';


const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomeComponent />
    },
    {
        path: '/about',
        exact: false,
        main: () => <AboutComponent />
    },
    {
        path: '/products List',
        exact: false,
        main: ({match}) => <ProductComponent match={match}/>
    },
    {
        path: '/contact',
        exact: false,
        main: () => <ContactComponent />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundComponent />
    }
];
export default routes;