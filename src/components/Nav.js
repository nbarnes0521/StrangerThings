import React from "react";
import { Link } from 'react-router-dom';


export default function Nav({ setToken }) {
    function logout() {
        setToken('');
        window.localStorage.removeItem("token");
    }
    
    return (
        <nav>
            <h1> Stranger Things !!</h1>
            <Link to="/login">Login</Link>
            <br></br>
            <button onClick={logout}> Logout </button>
        </nav>
    )
}

