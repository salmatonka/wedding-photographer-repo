import React,{useContext,useState,useEffect} from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewAdd from './ReviewAdd';


const Reviews = () => {
    const {user, logout} = useContext(AuthContext);
    const [ reviews, setReviews ] = useState([]);
    
     
    useEffect(()=>{
        fetch(`https://wedding-server-eight.vercel.app/reviews?email=${user.email}`,{
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
        }
        })
        .then(res => {
          if (res.status === 401 || res.status === 403) {
              return logout();
          }
          return res.json();
      })
        .then(data => setReviews(data))
    },[user?.email, logout])

    const handleReviewDelete = id =>{
        const proceed = window.confirm('are you sure,you want to delete review');
        if(proceed){
            fetch(`https://wedding-server-eight.vercel.app/reviews/${id}`,{
                method: "DELETE",
                headers: {
                  authorization: `Bearer ${localStorage.getItem('token')}`
              }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0)
                alert('delete is successfully');
                const remaining = reviews.filter(review => review._id !== id);
                setReviews(remaining);
            })
        }
      }
     
      const handleUpdate = id =>{
        fetch(`https://wedding-server-eight.vercel.app/reviews/${id}`,{
            method: 'PATCH',
            headers: {
                'content-type' : 'application/json',
                authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({status:"Approved"})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                const remaining = reviews.filter(review => review._id !== id);
                const changing = reviews.find(review => review._id !== id );
                changing.status = 'Approved';

                const newReview = [changing, ...remaining];
                setReviews(newReview);
            }
        })
      }



    return (
     
<div>
<h1 className="text-xl font-semibold sm:text-4xl text-center text-blue-600 py-3">Selected your reviews: {reviews?.length}</h1> 

 <div className="overflow-x-auto w-full">
  <table className="table w-full">
    
    <thead>
      <tr>
      <th>
      Delete Review
        </th>
        <th>Service Photo & Name</th>
        <th>Email Address</th>
        <th>User Name</th>
        <th>Message</th>
        <th>price</th>
        <th>Rating</th>
      </tr>
    </thead>
      <tbody>
     
       {
         reviews?.map(review =><ReviewAdd
       key={review._id}
         review={review}
         handleReviewDelete={handleReviewDelete}
         handleUpdate={handleUpdate}
         ></ReviewAdd>)
       }  
       
      
        </tbody>
     </table>
   </div>

 </div>
     );
 };

export default Reviews;
