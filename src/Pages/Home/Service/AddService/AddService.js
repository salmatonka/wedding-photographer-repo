import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
const notify = () => toast.success('Add service ...!');

const AddService = () => {


    const handleServiceAdd =(event)=>{
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const img =form.photoURL.value;
        const price = form.price.value;
        const message = form.message.value;
        console.log(title,img,price,message);
        
        const newServices = {
            title: title,
            img: img,
            price: price,
            description: message
        }
        fetch(`https://wedding-server-eight.vercel.app/users`,{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(newServices)
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data)
             notify();
            form.reset();
        })
        .catch(error=> console.error(error))


    }
    return (
        
        <div className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid ">
            <h3 className='text-5xl font-semibold text-primary text-center my-5 uppercase'>Add a Service</h3>
        <form onSubmit={handleServiceAdd}>
            
            <div className='grid grid-cols-1 l gap-4'>
            <input name='title' type="text" placeholder="Title" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />

            <input name='photoURL' type="text" placeholder="photoURL" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />

            <input name='price' type="text" placeholder="price" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />

            </div>
            <textarea name='message' className="textarea textarea-bordered h-24 w-full my-5" placeholder="Add description"></textarea>
            <input className='flex items-center justify-center w-full p-2 font-semibold tracking-wide rounded-md bg-violet-400 dark:text-gray-900 my-4' type="submit" value="Add Services" />
        </form>
        <Toaster></Toaster>
        
    </div>
    );
};

export default AddService;;