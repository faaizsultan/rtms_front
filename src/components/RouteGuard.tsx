import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

interface RouteGuardProps {
    component: React.ComponentType<any>;
    [key: string]: any; // Allow other props to be passed
}

const RouteGuard: React.FC<RouteGuardProps> = ({ component: Component, ...rest }) => {
    const navigate = useNavigate();

    useEffect(() => {
        let login = localStorage.getItem('Token');
        if (!login) {
            navigate('/auth/signin');
        }
    }, [navigate]);

    function hasJWT() {
        return !!localStorage.getItem("Token");
    }

    return hasJWT() ? <Component {...rest} /> : null;
}

export default RouteGuard;
