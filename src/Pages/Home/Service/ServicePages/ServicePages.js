import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CheckOut from '../../../CheckOut/CheckOut';


const ServicePages = () => {
    // useSetTitle('ServicePages')
    const servicePagesAll = useLoaderData();
    const {title,img,description,price,rating} = servicePagesAll;
    return (
        
		<section className="dark:bg-gray-800 dark:text-gray-100">
		<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
		<h2 className="text-2xl font-semibold sm:text-4xl text-center text-blue-600 ">Elopement Service Details</h2>
			<Link rel="noopener noreferrer" to="/" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">

				<img src={img} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />

				<div className="p-6 space-y-2 lg:col-span-5">
					<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
						{title}</h3>

					<h2 className="text-xl dark:text-gray-400">rating: {rating}</h2>
					<h2 className="text-xl dark:text-gray-400">price: {price}</h2>
					<p>description: {description}</p>

					
				</div>
			</Link>
			
			<div className="flex justify-center">
				<CheckOut></CheckOut>
			</div>
			
		</div>
	</section>
            
        
    );
};

export default ServicePages;