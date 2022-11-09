import React from 'react';
import ChoosePlan from '../ChoosePlan/ChoosePlan';
import Elopement from '../Elopement/Elopement';
import ServiceItems from '../Service/ServiceItems';


import Slider from '../Slider/Slider';


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <ServiceItems></ServiceItems>
            <Elopement></Elopement>
            <ChoosePlan></ChoosePlan>
        </div>
    );
};

export default Home;