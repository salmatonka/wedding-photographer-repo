import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const CheckOut = () => {
    const {_id,price,rating,img,title} = useLoaderData();
    const { user} = useContext(AuthContext);

    const handlePlaceReview = event=>{

		event.preventDefault();
		const form = event.target;
		const name = `${form.firstName.value} ${form.lastName.value}`;
		const img = user?.photoURL;
		const title = user?.displayName;
		const email = user?.email || "unregistered";
		const message = form.message.value;

        const review = {
           service:_id,
           serviceName:title,
		   customer: name,
		   price,
		   email,
		   rating,
		   img,
		   message


		}
       fetch('https://wedding-photo-server.vercel.app/reviews',{
		method: "POST",
		headers: {
			"content-type" : "application/json",
			authorization: `Bearer ${localStorage.getItem ('token')}`
		},
		body : JSON.stringify(review)
	   })
	   .then(res=> res.json())
	   .then(data=>{
		console.log(data)
	 if(data.acknowledged){
		alert(" review successfully")
		form.reset();
	 }
	
	
	})
	   .catch(error =>
		alert.error(error.message));
	}

    return (
        <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
	<form onSubmit={handlePlaceReview} novalidate="" action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
	<h2 className="text-2xl font-semibold sm:text-4xl text-center text-blue-600 ">Add Service</h2>
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
			<div className="space-y-2 col-span-full lg:col-span-1">
			<p className="font-medium">{title}</p>
			  <div className="col-span-full">
					
					<div className="flex items-center space-x-2">
						<img src={img} alt="" className="w-32 h-32 rounded-full dark:bg-gray-500 dark:bg-gray-700" />
						
					</div>
				</div>
				<p className="font-medium">price: {price}</p>
				<p className="font-medium">rating: {rating}</p>
				</div>
			
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label for="firstname" className="text-sm">First name</label>
					<input name='firstName' id="firstname" type="text" placeholder="First name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label for="lastname" className="text-sm">Last name</label>
					<input name='lastName' id="lastname" type="text" placeholder="Last name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
				</div>
				
				<div className="col-span-full sm:col-span-3">
					<label for="email" className="text-sm">Email</label>
					<input name='email' id="email" type="email" placeholder="Email" 
                    defaultValue={user?.email}
                    className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" readOnly />
				</div>
				<div className="col-span-full">
					<label for="message" className="text-sm">Message</label>
					<textarea name='message' id="message" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" required></textarea>
				</div>
				<input className='btn btn-ghost lg:w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700   dark:text-gray-900' type="submit" value='Review'/>
                </div>
		</fieldset>
		</form>
</section>
    );
};

export default CheckOut;