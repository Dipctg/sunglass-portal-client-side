import React from 'react';
import Footer from '../../Footer/Footer';
import Navigation from '../../Navigation/Navigation';
import Banner from '../Banner/Banner';
import MyOrderBanner from '../MyOrderBanner/MyOrderBanner';
import Products from '../Products/Products';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation ></Navigation>
            <Banner></Banner>
            <Products></Products>
            <Services></Services>
            <MyOrderBanner></MyOrderBanner>
            <Footer></Footer>
        </div>
    );
};

export default Home;