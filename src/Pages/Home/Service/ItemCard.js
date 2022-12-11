import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';

import WeddingCard from './WeddingCard';
const ItemCard = () => {
//service:6cards
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch('https://wedding-server-eight.vercel.app/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div>
            <h1 className='text-center text-2xl'>Choose your best Elopement Service: {services.length}</h1>
            <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 pt-5'>

             {services.map(service => <WeddingCard key={service._id}
                service={service}
             ></WeddingCard>)}
            </div>
            
        </div>
    );
};

export default ItemCard;