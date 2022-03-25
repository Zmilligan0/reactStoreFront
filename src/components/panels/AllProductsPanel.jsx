import React from "react";

import { PanelStyles, PanelHeader, AllProductPanelBody } from './styles';

import { ProductPreview } from "./../products/ProductPreview"

function AllProductsPanel({ title, ...props }) {
  return (
    <PanelStyles>
      <PanelHeader color="blue">
        <h2>{title || "Display Panel"}</h2>
      </PanelHeader>
      <AllProductPanelBody>
        <ProductPreview/>
        <ProductPreview/>
        <ProductPreview/>
        <ProductPreview/>
        <ProductPreview/>
        <ProductPreview/>
        <ProductPreview/>
        <ProductPreview/>
        <ProductPreview/>
        <ProductPreview/>

      </AllProductPanelBody>
    </PanelStyles>
  );
}

export default AllProductsPanel;