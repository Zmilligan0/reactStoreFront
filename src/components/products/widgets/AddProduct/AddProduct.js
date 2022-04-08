import React, { useState } from 'react';

import { useNumberFormat } from '../../../../hooks/useNumberFormat';
import { useAddNewProduct } from '../../../../hooks/useAddNewProduct';
import { AddProductStyles } from './styles'
import { ProductEditor } from "./../../ProductEditor";
import { EditorFeedback} from "./../../EditorFeedback"
import ProductPreview from './../../../../assets/images/placeholder.png';


const defaults={
  desc:`Wow this is an awesome placeholder description so very cool!`,
  name: "Replace me!!!",
  price:211.11
}

function AddProduct({ children, ...props }) {
  const [isWriting, setIsWriting] = useState(false)
  const [productName, setProductName] = useState(defaults.name)
  const [productPrice, setProductPrice] = useState(defaults.price)
  const [productDesc, setProductDesc] = useState(defaults.desc)
  const [productImage, setProductImage] = useState({previewImage:ProductPreview, file:null})
  const [loading, productLoader] = useAddNewProduct();
  const formatter = useNumberFormat();

  function handleProductName(name) {
    setProductName(name)
  }

  function handleProductPrice(price) {
    setProductPrice(formatter(price))
  }

  function handleProductDesc(desc) {
    setProductDesc(desc)
  }

  function handleSubmit(e){
    e.preventDefault();
    const productData = {
      productName,
      productPrice,
      productDesc
    }
    setIsWriting(true)
    productLoader(productData, productImage.file)
    setProductDesc(defaults.desc)
    setProductImage({previewImage:ProductPreview, file:null})
    setProductName(defaults.name)
    setProductPrice(defaults.price)   
  }

  if(isWriting){
    return (<EditorFeedback status={loading} writeCompleted={setIsWriting}/>)
  }
  else
  {
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
          handleSubmit={handleSubmit}
        />
  
      </AddProductStyles>
    )
  }
}

export default AddProduct