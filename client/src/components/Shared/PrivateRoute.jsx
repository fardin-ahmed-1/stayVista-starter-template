import React from 'react'
import useAuth from '../../hooks/useAuth'
import Loader from '../Shared/Loader'
import { useLocation, Navigate } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
    const location = useLocation()
    const { loading, user } = useAuth()
    if (loading) {
        return <Loader></Loader>
    }
    if (user) {
        return children
    }
    return <Navigate state={{from:location}} to='/login'></Navigate>
}
export default PrivateRoute