import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import WeddingCard from './WeddingCard';
const ItemCard = () => {

    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div>
            <h1 className='text-center'>All Service: {services.length}</h1>
            <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 pt-5'>

             {services.map(service => <WeddingCard key={service._id}></WeddingCard>)}
            </div>
        </div>
    );
};

export default ItemCard;