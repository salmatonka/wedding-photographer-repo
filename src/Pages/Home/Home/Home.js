import React from 'react';
import ChoosePlan from '../ChoosePlan/ChoosePlan';
import Elopement from '../Elopement/Elopement';
import Service from '../Service/Service';
import Slider from '../Slider/Slider';


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Service></Service>
            <Elopement></Elopement>
            <ChoosePlan></ChoosePlan>
        </div>
    );
};

export default Home;