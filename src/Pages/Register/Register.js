import React from 'react';
import {useContext} from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const Register = () =>{
      const{createUser} = useContext(AuthContext)

    const handleRegister = event =>{
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const email = form.email.value;
		const password = form.password.value;

		console.log(name,email,password)

		createUser(email,password)
		.then(result=> {
		      const user = result.user;
		      console.log(user);
		 })
			.catch(err => console.error(err));
 

	} 


	
    return (
        <section className="p-6 dark:bg-gray-800 dark:text-gray-100">
	<div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
		<div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-900">
			
			<h1 className="text-5xl font-extrabold dark:text-gray-50">Register to access your account</h1>
			
			<form onSubmit={handleRegister}  className="self-stretch space-y-3 ng-untouched ng-pristine ng-valid">
				<div>
					<label for="name" className="text-sm sr-only">Your name</label>
					<input name="name" id="name" type="text" placeholder="Your name" className="w-full rounded-md focus:ring focus:ring-violet-400 dark:border-gray-700" />
				</div>
				<div>
					<label for="email" className="text-sm sr-only"></label>
					<input name="email" id="email"  type="text" placeholder="Email address" className="w-full rounded-md focus:ring focus:ring-violet-400 dark:border-gray-700" required />
				</div>
				<div>
					<label for="password" className="text-sm sr-only"></label>
					<input name="password" id="password" type="password" placeholder="Your Password" className="w-full rounded-md focus:ring focus:ring-violet-400 dark:border-gray-700" required />
				</div>

				<div>
					<label for="register"  className="text-sm sr-only"></label>
					<input type="submit" id="register" value="Register" className="bg-violet-400 w-full rounded-md focus:ring focus:ring-violet-400 dark:border-gray-700 text-black" required />
				</div>

			</form>

			<p className="text-1xl text-center sm:px-6 dark:text-gray-400">Already have an account?
		<Link  to="/login" className="underline dark:text-gray-100 font-bold text-2xl">Login</Link>
	</p>

		</div>
		<img src="https://mybangla24.com/static/img/blog/photography-services-bangladesh.webp" alt="" className="object-cover w-full rounded-md xl:col-span-3 dark:bg-gray-500" />
	</div>
</section>
    );
};

export default Register;