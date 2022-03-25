import React from 'react';

import {ProductDataEntryFormStyles, ProductDescription, ProductImage, ProductName, ProductPrice} from './styles';
import {Label, Input} from './../../../ui/forms';
import {TextArea} from './../../../ui/forms/textarea';
import { ProductImageDropBox } from '../ProductImageDropBox';

function ProductDataEntryForm ({children, handleProductName, handleProductPrice, handleProductDesc, setProductImage, ...props})  {
  return (
        <ProductDataEntryFormStyles  {...props}>
           <ProductImage>
              <Label>Product Image</Label>
              <ProductImageDropBox setProductImage={setProductImage}/>
           </ProductImage>
          <fieldset>
           <ProductName>
            <Label>Product Name</Label>
            <Input onChange={(e)=>handleProductName(e.target.value.trim())} maxLength={30}/>
           </ProductName>

           <ProductPrice>
            <Label>Product Price</Label>
            <Input onChange={(e)=>handleProductPrice(e.target.value.trim())} maxLength={8}/>
           </ProductPrice>
           </fieldset>
           <ProductDescription>
            <Label>Product Desc</Label>
            <TextArea onChange={(e)=>handleProductDesc(e.target.value.trim())} maxLength={120} rows={6}/>
           </ProductDescription>

        </ProductDataEntryFormStyles>
  )
}

export default ProductDataEntryForm