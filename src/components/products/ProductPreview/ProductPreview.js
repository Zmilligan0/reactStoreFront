import React from 'react';

import { ProductMid, ProductBot, ProductOuterContainer, ProductTop, ProductImage, ProductName, ProductPrice, ProductDescription } from './styles'
//Remove when assignment 3 graded
import Placeholder from  './../../../assets/images/placeholder.png';

function ProductPreview({ children, /*productName, productPrice, productDesc, productImage,*/ ...props }) {
//Uncomment code to make it work with auto updating in product adder
  return (
    <ProductOuterContainer>

      <ProductTop>
        <ProductName>{/*{productName}*/}ProductName</ProductName>
      </ProductTop>

      <ProductMid  {...props}>
        <ProductImage>
          <img src={/*{productImage}*/ Placeholder } alt="placeholder" width="320" height="184"></img>
        </ProductImage>
      </ProductMid>

      <ProductBot>
        <ProductPrice>${/*productPrice*/ 12.99}</ProductPrice>
        <ProductDescription>{/*productDesc*/ }Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</ProductDescription>
      </ProductBot>

    </ProductOuterContainer>
  )
}

export default ProductPreview