import React from 'react';

import {ProductPreviewStyles, ProductImage, ProductName, ProductPrice, ProductDescription} from './styles'

function ProductPreview ({children, productName, productPrice, productImage, ...props})  {
  console.log("This is your productImage: " + productImage)
  console.log("This is your productPrice: " + productPrice)
  return (
        <ProductPreviewStyles  {...props}>
           <ProductImage>
             <img src={productImage} alt="placeholder" width="320" height="184"></img>
           </ProductImage>
           <ProductName>{productName}</ProductName>
           <ProductPrice>${productPrice}</ProductPrice>
           <ProductDescription>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</ProductDescription>

        </ProductPreviewStyles>
  )
}

export default ProductPreview