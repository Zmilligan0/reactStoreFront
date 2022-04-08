import React from "react";

import { useGetProducts } from "../../hooks/useGetProduct";

import { PanelStyles, PanelHeader, AllProductPanelBody } from './styles';
import {ProductCard} from "./../products/ProductCard"



function AllProductsPanel({ title, ...props }) {

  const productData = useGetProducts()

  return (
    <PanelStyles>
      <PanelHeader color="blue">
        <h2>{title || "Display Panel"}</h2>
      </PanelHeader>
      <AllProductPanelBody>
        { productData? productData.map(product=><ProductCard key={product.uid} product={product}/>) :<p>no data</p>}

      </AllProductPanelBody>
    </PanelStyles>
  );
}

export default AllProductsPanel;