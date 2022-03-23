import React from "react";
import { Link } from "react-router-dom";

import {SideBarStyles, SideBarItem, SideBarItems} from './styles';

function SideBar (props){
    return(
        
        <SideBarStyles>
            <SideBarItems>
                <SideBarItem>
                    <Link to="/dashboard">View All Products</Link>
                </SideBarItem>
                <SideBarItem>
                    <Link to="add">Add Products</Link>
                </SideBarItem>
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