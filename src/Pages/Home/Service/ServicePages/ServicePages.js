import React from 'react';


import { useLoaderData } from 'react-router-dom';
import useSetTitle from '../../../../hooks/useSetTitle';


const ServicePages = () => {
    useSetTitle('ServicePages')
    const {_id,name,rating} = useLoaderData();
    
    return (
        <div>
            <h1>{_id}</h1>
            <h1>{name}</h1>
            <h1>{rating}</h1>
        </div>
    );
};

export default ServicePages;