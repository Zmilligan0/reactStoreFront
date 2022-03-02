import React from "react";

import {Link} from 'react-router-dom'

import {AppBar} from "../../components/appBar";
import {SideBar} from "../../components/sideBar";
import {MainPanel} from "../../components/panels";


function DashboardPage (props){
    return(
        <>
            
            <AppBar/>
            <div class="flex">
                <SideBar/>
                <MainPanel/>
            </div>
            

        </>
        
    )
}

export default DashboardPage;