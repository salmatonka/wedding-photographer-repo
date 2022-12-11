import React from 'react';
import {useEffect,useState} from 'react';

const ReviewAdd = ({review,handleReviewDelete,handleUpdate}) => {
    const {_id,customer,message,price,email,rating,service,status} = review;
    const [reviewService, setReviewService] =useState({})

    useEffect(() =>{
        fetch(`https://wedding-server-eight.vercel.app/services/${service}`)
        .then(res => res.json())
        .then(data => setReviewService(data) )
    },[service])

    
return (
        <tr>
        <th>
          <label>
          <button onClick={() => handleReviewDelete(_id)} className="btn btn-circle btn-outline">
         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className=" mask mask-squircle w-24 h-30">
        
                    {
                        reviewService?.img &&
                        <img src={reviewService.img} alt="Avatar Tailwind CSS Component" />
                    }

               
              </div>
            </div>
            <div>
              
              {
                reviewService?.title &&
                <p className="font-bold" >{reviewService.title}</p>
                }

             </div>
          </div>
        </td>
        <td>
         {email}
         <br/>
          </td>
        <td>
        <div className="font-bold">{customer}</div>
         <br/>
          </td>
        
        <th>
          <button className="btn btn-ghost btn-xs">{message}</button>
        </th>
        <th>
          <button className="btn btn-ghost btn-xs">{price}</button>
        </th>
        <th>
          <button className="btn btn-ghost btn-xs">{rating}</button>
        </th>
        <th>
          <button onClick={() => handleUpdate(_id)} className="btn btn-ghost btn-xs">{status ? status : 'Edit Review'}</button>
        </th>
      </tr>
    );
};

export default ReviewAdd;