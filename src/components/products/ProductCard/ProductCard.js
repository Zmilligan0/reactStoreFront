import React from 'react';

import {BiTrash, BiPencil} from "react-icons/bi"

import { ProductMid, HoverP, ProductBot, ProductOuterContainer, ProductTop, ProductImage, ProductName, ProductPrice, ProductDescription } from './styles';


function ProductCard ({children, product, ...props})   {
  const{productName, productPrice,imageUrl, productDesc} = {...product}
//Uncomment code to make it work with auto updating in product adder
  return (
    <ProductOuterContainer>

      <ProductTop>
        <ProductName>{productName}</ProductName>
        <HoverP><BiTrash color='red'/></HoverP>
        
        <HoverP><BiPencil color="blue"/></HoverP>
      </ProductTop>

      <ProductMid  {...props}>
        <ProductImage>
          <img src={imageUrl} alt="placeholder" width="320" height="184"></img>
        </ProductImage>
      </ProductMid>

      <ProductBot>
        <ProductPrice>${productPrice}</ProductPrice>
        <ProductDescription>{productDesc}</ProductDescription>
        
      </ProductBot>

    </ProductOuterContainer>
  )
}

export default ProductCard