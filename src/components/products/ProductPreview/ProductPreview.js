import React from 'react';

import { ProductMid, ProductBot, ProductOuterContainer, ProductTop, ProductImage, ProductName, ProductPrice, ProductDescription } from './styles';


function ProductPreview({ children, productName, productPrice, productDesc, productImage, ...props }) {
//Uncomment code to make it work with auto updating in product adder
  return (
    <ProductOuterContainer>

      <ProductTop>
        <ProductName>{productName}</ProductName>
      </ProductTop>

      <ProductMid  {...props}>
        <ProductImage>
          <img src={productImage.previewImage} alt="placeholder" width="320" height="184"></img>
        </ProductImage>
      </ProductMid>

      <ProductBot>
        <ProductPrice>${productPrice}</ProductPrice>
        <ProductDescription>{productDesc }</ProductDescription>
      </ProductBot>

    </ProductOuterContainer>
  )
}

export default ProductPreview