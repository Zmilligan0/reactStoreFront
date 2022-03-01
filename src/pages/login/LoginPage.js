import React from "react";

import {Link, useNavigate} from 'react-router-dom'

function LoginPage (props){
    let navigation = useNavigate();
    function onHandleSubmit(e){
        

        e.preventDefault();
        //firebase auth
        navigation('dashboard')
    }

    return(
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Login</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">dashboard</Link>
                    </li>
                </ul>
            </nav>
            <header>
                <h1>Login Page</h1>
            </header>

            <form onSubmit={onHandleSubmit}>
                <input type="text"/>
                <button type="submit">Form submit</button>
            </form>
            

        </>
    )
}

export default LoginPage;