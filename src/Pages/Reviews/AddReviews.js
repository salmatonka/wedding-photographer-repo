import React, {useContext} from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const AddReviews = () => {

    const {user}= useContext(AuthContext);
	const handleAddReview = (event) => {
        event.preventDefault();

		console.log('jjj')
        const form = event.target;
        const message = form.message.value;
        const name = user?.displayName;
        const img = user?.photoURL;
        console.log(message, name, img)
        const review = {
            message: message,
            name: name,
            img: img,
            email: user.email
        }

		
        fetch('http://localhost:5000/reviews', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())        
        .then(data => {
            console.log(data)
            event.reset()
        })
        .catch(err => console.error(err))
    };        

    return (
        <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
	<form onSubmit={handleAddReview}  novalidate="" action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
		
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
			
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
			
				<div className="col-span-full sm:col-span-3">
					<label for="website" className="text-3xl my-4">Please Add To Reviews</label>
					<input name='message' id="message" type="text" placeholder="Add review" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 " required/>

                    <button type="submit" className="flex items-center justify-center w-full p-2 font-semibold tracking-wide rounded-md bg-violet-400 dark:text-gray-900 my-4">Submit</button>
				</div>
                
				
		
			</div>
		</fieldset>
	</form>
</section>

           
        
    );
};

export default AddReviews;