import React from 'react';
import AvailableOrder from '../AvailableOrder/AvailableOrder';
import Footer from '../Footer/Footer';
import MyorderHeader from '../MyorderHeader/MyorderHeader';
import Navigation from '../Navigation/Navigation';

const MyOrder = () => {
  
    return (
        <div>
            <Navigation/>
            <MyorderHeader  ></MyorderHeader>
            <AvailableOrder  ></AvailableOrder>
           <Footer></Footer>
        </div>
    );
};

export default MyOrder;