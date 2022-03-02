import React from "react";

import {SideBarStyles, SideBarItem, SideBarItems} from './styles';

function SideBar (props){
    return(
        
        <SideBarStyles>
            <SideBarItems>
                <SideBarItem>Dashboard</SideBarItem>
                <SideBarItem>Vendors</SideBarItem>
                <SideBarItem>Users</SideBarItem>
                <SideBarItem>Categories</SideBarItem>
                <SideBarItem>Products</SideBarItem>
                <SideBarItem>Orders</SideBarItem>
                <SideBarItem>Reviews</SideBarItem>
                <SideBarItem>Brands</SideBarItem>
                <SideBarItem>Authentication</SideBarItem>
                <SideBarItem>Icons</SideBarItem>
                <SideBarItem>Other Pages</SideBarItem>
                
            </SideBarItems>
        </SideBarStyles>
    )
}

export default SideBar;