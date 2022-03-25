import React from "react";
import { Link } from "react-router-dom";

import { SideBarStyles, SideBarItem, SideBarItems } from './styles';
import { IoDesktopOutline, IoDuplicate, IoFileTrayFullOutline, IoPerson, IoReorderFour } from "react-icons/io5";
import { AiOutlineDollar, AiOutlinePicture } from "react-icons/ai"
import { BiNotepad } from "react-icons/bi"
import { SiBrandfolder, SiAuth0 } from "react-icons/si"
import { MdPages } from "react-icons/md"

function SideBar(props) {
    return (

        <SideBarStyles>
            <SideBarItems>
                <SideBarItem >
                    <Link to="/dashboard">
                    <IoDesktopOutline color="blue" size="1.75rem" />&nbsp;View All Products</Link>
                </SideBarItem>
                <SideBarItem >
                    <Link to="add"><IoDuplicate color="green" size="1.75rem" />&nbsp;Add Products</Link>
                </SideBarItem>
                <SideBarItem>
                    <Link to="edit"><IoFileTrayFullOutline color="#ab1d03" size="1.75rem" />&nbsp;Edit Products</Link>
                </SideBarItem>
                <SideBarItem><IoPerson color="#2e2e2e" size="1.75rem" />&nbsp;Users</SideBarItem>
                <SideBarItem><IoReorderFour color="black" size="1.75rem" />&nbsp;Categories</SideBarItem>
                <SideBarItem><AiOutlineDollar color="#31e000" size="1.75rem" />&nbsp;Orders</SideBarItem>
                <SideBarItem><BiNotepad color="#8c8343" size="1.75rem" />&nbsp;Reviews</SideBarItem>
                <SideBarItem><SiBrandfolder color="#d69b1a" size="1.75rem" />&nbsp;Brands</SideBarItem>
                <SideBarItem><SiAuth0 color="#d9a3bb" size="1.75rem" />&nbsp;Authentication</SideBarItem>
                <SideBarItem><AiOutlinePicture color="black" size="1.75rem" />&nbsp;Icons</SideBarItem>
                <SideBarItem><MdPages color="#367ed6" size="1.75rem" />&nbsp;Other Pages</SideBarItem>
            </SideBarItems>
        </SideBarStyles>
    )
}

export default SideBar;