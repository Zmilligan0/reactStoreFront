import React, {useState} from "react";

import {AppBar} from "../../components/appBar";
import {SideBar} from "../../components/sideBar";
import {DashBoardStyles} from "./styles";

import {onAuthStateChanged} from 'firebase/auth';
import {auth} from '../../libs/firebase'
import {Outlet, useNavigate} from 'react-router-dom';


function DashboardPage (props){
    const [isUser, setIsUser] = useState(false)
    const navigator = useNavigate();

        onAuthStateChanged(auth, (user)=>{
            if(user){
                setIsUser(true)
            }
            else{
                setIsUser(false)
                //send back to login page
                navigator('/')
            }
        })
    if(isUser){
        return(
            <>    
                <AppBar/>
                <DashBoardStyles>
                    <SideBar/>
                    <Outlet/>
                </DashBoardStyles>
            </>
            
        )
    }
    else
    {
        return null;
    }
    
}

export default DashboardPage;