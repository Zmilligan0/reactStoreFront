import React from 'react';

import { ProductDataEntryForm } from './../ProductDataEntryForm';
import { ProductPreview } from './../ProductPreview';
import { ProductEditorStyles } from './styles';

function ProductEditor({ children, productName, productPrice, handleSubmit, productDesc, productImage, handleProductName, handleProductPrice, handleProductDesc, setProductImage, ...props }) {
  return (
    <ProductEditorStyles  {...props}>
      <ProductDataEntryForm
        handleProductName={handleProductName}
        handleProductPrice={handleProductPrice}
        handleProductDesc={handleProductDesc}
        setProductImage={setProductImage}
        handleSubmit={handleSubmit}
      />

      <ProductPreview
        productName={productName}
        productPrice={productPrice}
        productDesc={productDesc}
        productImage={productImage}
      />

    </ProductEditorStyles>
  )
}

export default ProductEditor