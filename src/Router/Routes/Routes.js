import {createBrowserRouter} from 'react-router-dom'
import Main from '../../layout/Main'

import ErrorPage from '../../Pages/ErrorPage/ErrorPage';
import Blog from '../../Pages/Home/Blog/Blog';
import Home from '../../Pages/Home/Home/Home';
import AddService from '../../Pages/Home/Service/AddService/AddService';
import Service from '../../Pages/Home/Service/Service';
import ServicePages from '../../Pages/Home/Service/ServicePages/ServicePages';
import Login from '../../Pages/Login/Login';
import Register from '../../Pages/Register/Register';
import Reviews from '../../Pages/Reviews/Reviews';
import PrivateRoute from './PrivateRoute';

const  router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/service',
                element:<Service></Service>,
                
            },
            {
                path:'/servicePages',
                element:<ServicePages></ServicePages>,
                
            },
            {
                path:'/addService',
                element:<AddService></AddService>,
                
            },
            
            {
                path:'/servicePages/:id',
                // element:<PrivateRoute><ServicePages></ServicePages></PrivateRoute>,
                element:<ServicePages></ServicePages>,
                loader:({params})=>
                    fetch(`http://localhost:5000/services/${params.id}`)
                
                
            },
            
            {
                path:'/login',
                element:<Login></Login>
            },
           
            {
                path:'/reviews',
                //  element:<PrivateRoute><Reviews></Reviews></PrivateRoute>

             element:<Reviews></Reviews>
            },
           
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            }
            
        ]
    }
])

export default router;