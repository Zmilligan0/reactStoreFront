import React from "react";

import {Link} from 'react-router-dom'

import {AppBar} from "../../components/appBar";


function DashboardPage (props){
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
            <AppBar/>
        </>
        
    )
}

export default DashboardPage;