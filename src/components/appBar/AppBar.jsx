import React from "react";

import {IoNotificationsOutline} from "react-icons/io5";
import {AiFillSetting, AiOutlineMail} from "react-icons/ai"
import {BiUserCircle} from "react-icons/bi"
import {Link} from 'react-router-dom'


import {AppBarStyles, AppBarItem, AppBarItems, BrandingName} from './styles';
import {IconButton} from './../../ui/buttons';



function AppBar (props){
    return(
        <AppBarStyles>
            <BrandingName>Zach's Knives</BrandingName>
            <AppBarItems>
                <AppBarItem><Link to="/">Sign Out</Link></AppBarItem>
                <AppBarItem>
                    <IconButton><IoNotificationsOutline color="tomato" size="1.75rem"/></IconButton>
                </AppBarItem>
                <AppBarItem>
                    <IconButton><AiOutlineMail color="red" size="1.75rem"/></IconButton>
                </AppBarItem>
                <AppBarItem>
                    <IconButton><AiFillSetting color="grey" size="1.75rem"/></IconButton>
                </AppBarItem>
                <AppBarItem>
                    <IconButton><BiUserCircle color="black" size="1.75rem"/></IconButton>
                </AppBarItem>
                
            </AppBarItems>
        </AppBarStyles>
    )
}

export default AppBar;