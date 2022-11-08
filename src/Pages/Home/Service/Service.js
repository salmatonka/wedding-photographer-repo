import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard'
import Button from 'react-bootstrap/Button';
const Service = () => {
    const [photos,setPhotos] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
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
           <Link><button type="button" class="btn btn-outline-primary">See All</button></Link>
        </div>
    );
};

export default Service;