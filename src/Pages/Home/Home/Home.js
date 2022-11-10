import React from 'react';
import useSetTitle from '../../../hooks/useSetTitle';
import ChoosePlan from '../ChoosePlan/ChoosePlan';
import Elopement from '../Elopement/Elopement';
import ServiceItems from '../Service/ServiceItems';


import Slider from '../Slider/Slider';


const Home = () => {
    useSetTitle('Home')
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