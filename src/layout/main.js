import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Faq/Footer/Footer';
import NavScrollExample from '../components/NavScrollExample/NavScrollExample';

const Main = () => {
    return (
        <div>
            <NavScrollExample></NavScrollExample>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;