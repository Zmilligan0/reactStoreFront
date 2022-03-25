import React, { useState } from 'react';

import { useNumberFormat } from '../../../../hooks/useNumberFormat';
import { AddProductStyles } from './styles'
import { ProductEditor } from "./../../ProductEditor";
import ProductPreview from './../../../../assets/images/placeholder.png';

function AddProduct({ children, ...props }) {
  const [productName, setProductName] = useState('Product Name')
  const [productPrice, setProductPrice] = useState('0.00')
  const [productDesc, setProductDesc] = useState('Description')
  const [productImage, setProductImage] = useState(ProductPreview)
  const formatter = useNumberFormat()

  function handleProductName(name) {
    setProductName(name)
  }

  function handleProductPrice(price) {
    setProductPrice(formatter(price))
  }

  function handleProductDesc(desc) {
    setProductDesc(desc)
  }

  return (
    <AddProductStyles  {...props}>
      <ProductEditor
        productName={productName}
        productPrice={productPrice}
        productImage={productImage}
        productDesc={productDesc}
        handleProductName={handleProductName}
        handleProductPrice={handleProductPrice}
        handleProductDesc={handleProductDesc}
        setProductImage={setProductImage}
      />

    </AddProductStyles>
  )
}

export default AddProduct