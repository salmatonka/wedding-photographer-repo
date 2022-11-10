import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user} =useContext(AuthContext)
    const location = useLocation()


    if (user && user.id){
    return children
        
}

return <Navigate to='/login' state={{from: location}} replace />

};

export default PrivateRoute;