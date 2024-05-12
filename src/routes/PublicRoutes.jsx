import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ children }) => {
    // const isAuthorized = useSelector((state) => state.authReducer.isAuthenticated);
    if (isAuthorized) {
        return <Navigate to="/admin/" />;
    }
    return (
        <>
            {children}
        </>
    );
};