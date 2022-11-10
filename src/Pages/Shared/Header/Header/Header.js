import { toast } from 'react-toastify';
import React, { useContext } from 'react';
import {Link} from 'react-router-dom'
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const {user,logout} = useContext(AuthContext)

    const handleLogout =()=>{
      logout()
      .then(toast.warning('Logout!!'))
      .catch(error=>console.log(error))
    }
    console.log(user)

    return (
        
      <header className="p-4 dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex justify-between h-16 mx-auto">
        <Link  rel="noopener noreferrer" to="/" aria-label="Back to homepage" className="flex items-center p-2  text-2xl font-extrabold dark:text-gray-50">
        <img alt="" className="w-12 h-12 mr-2 border rounded-full dark:bg-gray-500 dark:border-gray-700" src="https://previews.123rf.com/images/butenkow/butenkow1701/butenkow170102106/70227809-wedding-photographer-vector-illustration-of-icon.jpg" />Wedding Photographer
        </Link>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <Link rel="noopener noreferrer" to="/" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400">Home</Link>
          </li>
          
          {user?.email ? <>
          <li className="flex">
            <Link rel="noopener noreferrer" to="/details" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"> Details</Link></li>
          
            <li className="flex">
            <Link rel="noopener noreferrer" to="/addService" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Add Service</Link></li>

          <li className="flex">
            <Link rel="noopener noreferrer" to="/myReview" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">My Review</Link>
          </li>
         
          <li> <Link to="/home"><button onClick={handleLogout} className="self-center px-8 py-3 rounded">Logout</button></Link></li>
          </> :

        <li className="items-center flex-shrink-0 hidden lg:flex">
          <Link to="/login"><button className="self-center px-8 py-3 rounded">Login</button></Link>
        </li>}

        <li className="items-center flex-shrink-0 hidden lg:flex">
          <Link to="/blog"><button className="self-center px-8 py-3 rounded">BLog</button></Link>
        </li>
          
     </ul>
        <button className="p-4 lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
         
         </div>
    </header>


  
        


        
    );
};

export default Header;