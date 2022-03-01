import React from "react";

import {Link} from 'react-router-dom'

function PageNotFound (props){
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
                <h1>Page not found</h1>
            </header>
        </>
    )
}

export default PageNotFound;