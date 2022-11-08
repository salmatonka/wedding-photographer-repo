import {createBrowserRouter} from 'react-router-dom'
import Main from '../../layout/Main'
import Blog from '../../Pages/Home/Blog/Blog';
import Home from '../../Pages/Home/Home/Home';
import Service from '../../Pages/Home/Service/Service';
import Login from '../../Pages/Login/Login';
const  router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/',
                element:<Service></Service>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Login></Login>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            }
            
        ]
    }
])

export default router;