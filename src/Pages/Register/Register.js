import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
	const handlesignup =event =>{
		event.preventDefault ();
		

	  }
    return (
        <section className="p-6 dark:bg-gray-800 dark:text-gray-100">
	<div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
		<div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-900">
			
			<h1 className="text-5xl font-extrabold dark:text-gray-50">Register to access your account</h1>
			
			<form onSubmit={handlesignup} novalidate="" action="" className="self-stretch space-y-3 ng-untouched ng-pristine ng-valid">
				<div>
					<label for="name" className="text-sm sr-only">Your name</label>
					<input id="name" type="text" placeholder="Your name" className="w-full rounded-md focus:ring focus:ring-violet-400 dark:border-gray-700" />
				</div>
				<div>
					<label for="firstname" className="text-sm sr-only"></label>
					<input id="firsttname" type="text" placeholder="Email address" className="w-full rounded-md focus:ring focus:ring-violet-400 dark:border-gray-700" />
				</div>
				<div>
					<label for="lastname" className="text-sm sr-only"></label>
					<input id="lastname" type="text" placeholder="Your Password" className="w-full rounded-md focus:ring focus:ring-violet-400 dark:border-gray-700" />
				</div>
				<Link to='/register'><button type="button" className="w-full py-2 mt-3 font-semibold rounded bg-violet-400 dark:text-gray-900">Register</button></Link>
			</form>
		</div>
		<img src="https://mybangla24.com/static/img/blog/photography-services-bangladesh.webp" alt="" className="object-cover w-full rounded-md xl:col-span-3 dark:bg-gray-500" />
	</div>
</section>
    );
};

export default Register;