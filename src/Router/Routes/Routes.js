import {createBrowserRouter} from 'react-router-dom'
import Main from '../../layout/Main'
import ErrorPage from '../../Pages/ErrorPage/ErrorPage';
import Blog from '../../Pages/Home/Blog/Blog';
import AddService from '../../Pages/Home/Home/AddService/AddService';
import Home from '../../Pages/Home/Home/Home';
import MyReview from '../../Pages/Home/Home/MyReview/MyReview';
import Details from '../../Pages/Home/Service/Details';
import Service from '../../Pages/Home/Service/Service';
import Login from '../../Pages/Login/Login';
import Register from '../../Pages/Register/Register';
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
                // loader:({params})=>{
                //     fetch(`http://localhost:5000/services/&{params.id}`)
                // }
            },
            {
                path:'/details',
                element:<Details></Details>,
                
            },
            {
                path:'/details/:id',
                element:<Details></Details>,
                loader:({params})=>{
                    fetch(`http://localhost:5000/services/${params.id}`)
                }
            },
            
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/addService',
                element:<PrivateRoute>
                    <AddService></AddService>
                </PrivateRoute>
            },
            {
                path:'/myReview',
                element:<PrivateRoute>
                  <MyReview></MyReview>
                     </PrivateRoute>
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