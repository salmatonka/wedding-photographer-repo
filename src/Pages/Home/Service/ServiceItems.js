import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard'
//3cards
const ServiceItems = () => {
    const [photos,setPhotos] = useState([]);
    useEffect(()=>{
        fetch('https://wedding-photo-server.vercel.app')
        .then(res=>res.json())
        .then(data=>setPhotos(data))
    },[])
    return (
        <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 pt-5' >
           
            {
                photos.map(Service=><ServiceCard key={Service._id}
                Service={Service}
                
                ></ServiceCard>)
            }
           <Link to="/service"><button type="button" className="flex items-center justify-center w-full p-2 font-semibold tracking-wide rounded-md bg-violet-400 dark:text-gray-900">See All</button></Link>
        </div>
        )
};

export default ServiceItems;