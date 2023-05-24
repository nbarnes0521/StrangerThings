import React from "react";
import { Link } from 'react-router-dom';


export default function Nav({ setToken, setIsLoggedIn }) {
    function logout() {
        setToken('');
        setIsLoggedIn(false);
        window.localStorage.removeItem("token");
    }
    
    return (
        <nav>
            <h1> Stranger Things !!</h1>
            <button><Link to="/login">Login</Link></button>
            <button><Link to="/Register">Register</Link></button>
            <br></br>
            <button onClick={logout}> Logout </button>
        </nav>
    )
}

