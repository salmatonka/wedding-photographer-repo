import React from 'react';
import { useContext} from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import CheckOut from '../../../CheckOut/CheckOut';
import AddReviews from '../../../Reviews/AddReviews';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServicePages = () => {
    // useSetTitle('ServicePages')
    const servicePagesAll = useLoaderData();
    const {title,img,description,price,rating} = servicePagesAll;
	const {user}= useContext(AuthContext);

	const handleAddReview = (event) => {
        event.preventDefault();

		

        const message = event.target.message.value;
        const name = user?.displayName;
        const img = user?.photoURL;
        console.log(message, name, img)
        const review = {
            message: message,
            name: name,
            img: img,
            email: user.email
        }

		
        fetch('http://localhost:3000/reviews', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())        
        .then(data => {
            console.log(data)
            event.target.reset()
        })
        .catch(err => console.error(err))
    };        



    return (
        
		<section className="dark:bg-gray-800 dark:text-gray-100">
		<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
		<h2 className="text-2xl font-semibold sm:text-4xl text-center text-blue-600 ">Elopement Service Details</h2>
			<div  className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">

				
               
		  <PhotoProvider>
              <PhotoView src={img}>
               <img  alt="" className="cursor-zoom-in object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" src={img}/>
       
              </PhotoView>
            </PhotoProvider>



				<div className="p-6 space-y-2 lg:col-span-5">
					<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
						{title}</h3>

					<h2 className="text-xl dark:text-gray-400">rating: {rating}</h2>
					<h2 className="text-xl dark:text-gray-400">price: {price}</h2>
					<p>description: {description}</p>

					
				</div>
			</div>
			
            <div>
			 <AddReviews handleAddReview={handleAddReview}></AddReviews>
			</div>


			<div className="flex justify-center">
				<CheckOut></CheckOut>
				
			</div>
			
		</div>
	</section>
            
        
    );
};

export default ServicePages;