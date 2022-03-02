import React from "react";

import {MainPanelStyles, MainPanelItem, MainPanelInner, MainPanelInnerTitle, MainPanelInnerBody} from './styles';
import {Button} from './../../ui/buttons';

function MainPanel (props){
    return(
        <MainPanelStyles>
            <Button bgcolor="blue" color="white">Add Product</Button>
            <MainPanelInnerTitle>
                <MainPanelItem>Product Listings</MainPanelItem>
            </MainPanelInnerTitle>
            <MainPanelInnerBody/>
        </MainPanelStyles>
    )
}

export default MainPanel;