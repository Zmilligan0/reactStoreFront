import React from "react";

import { signOut } from 'firebase/auth';
import { auth } from "../../libs/firebase";
import { IoNotificationsOutline } from "react-icons/io5";
import { AiFillSetting, AiOutlineMail } from "react-icons/ai"
import { BiUserCircle } from "react-icons/bi"


import { AppBarStyles, AppBarItem, AppBarItems, BrandingName } from './styles';
import { IconButton, Button } from './../../ui/buttons';



function AppBar(props) {

    function onLogoutRequest(e) {
        signOut(auth)
    }

    return (
        <AppBarStyles>
            <BrandingName>Zach's Knives</BrandingName>
            <AppBarItems>
                <AppBarItem><Button hbgcolor="blue" color="black" hcolor="white" onClick={onLogoutRequest}>Sign out</Button></AppBarItem>
                <AppBarItem>
                    <IconButton><IoNotificationsOutline color="tomato" size="1.75rem" /></IconButton>
                </AppBarItem>
                <AppBarItem>
                    <IconButton><AiOutlineMail color="red" size="1.75rem" /></IconButton>
                </AppBarItem>
                <AppBarItem>
                    <IconButton><AiFillSetting color="grey" size="1.75rem" /></IconButton>
                </AppBarItem>
                <AppBarItem>
                    <IconButton><BiUserCircle color="black" size="1.75rem" /></IconButton>
                </AppBarItem>

            </AppBarItems>
        </AppBarStyles>
    )
}

export default AppBar;