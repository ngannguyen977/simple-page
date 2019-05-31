import React from 'react';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Products from './component/Products';
import NotFound from './component/NotFound';

const routes = [{
        path: '/',
        exact: true,
        main: () => <Home />
    },
    {
        path: '/about',
        exact: false,
        main: () => <About />
    },
    {
        path: '/products',
        exact: false,
        main: () => <Products />
    },
    {
        path: '/contact',
        exact: false,
        main: () => <Contact />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFound />
    }
];
export default routes;