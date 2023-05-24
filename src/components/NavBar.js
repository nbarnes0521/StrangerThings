import React from "react";
import { Link } from 'react-router-dom';


export default function Nav({ setToken, setIsLoggedIn, isLoggedIn }) {
    function logout() {
        setToken('');
        setIsLoggedIn(false);
        window.localStorage.removeItem("token");
    }
    
    return (
        <nav>
            <h1> Stranger Things !!</h1>
            {
                isLoggedIn ? (
                <>
                    <button><Link to="/create-post">Create Post</Link></button>
                <button onClick={logout}> Logout </button>
                
                </>
                ) : (
                    <>
                    <p>
                        Welcome
                    </p>
                    <button><Link to="/login">Login</Link></button>
                    <button><Link to="/Register">Register</Link></button> 
                    </>
                )
            }
        </nav>
    )
}

/* {
    <button><Link to="/login">Login</Link></button>
    <button><Link to="/Register">Register</Link></button>
    <br></br>
    <button onClick={logout}> Logout </button>
    } */