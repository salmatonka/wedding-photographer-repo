import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Spinner from '../../Pages/Spinner';

const PrivateRoute = ({children}) => {
    const {user,loading} =useContext(AuthContext);
    const location = useLocation();
    console.log(loading);


    if (loading){

        return <Spinner></Spinner>
    }


    if (user ){
    return children;
        
}

return <Navigate to='/login' state={{ from: location }} replace />

};

export default PrivateRoute;