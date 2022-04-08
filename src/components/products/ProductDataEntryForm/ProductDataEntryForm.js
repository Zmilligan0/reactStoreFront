import React from 'react';

import {ProductDataEntryFormStyles, ProductDescription, ProductImage, ProductName, ProductPrice} from './styles';
import {Label, Input} from './../../../ui/forms';
import {SubmitButton} from './../../../ui/buttons';
import {TextArea} from './../../../ui/forms/textarea';
import { ProductImageDropbox } from './../ProductImageDropbox';

function ProductDataEntryForm ({children, handleProductName, handleSubmit, handleProductPrice, handleProductDesc, setProductImage, ...props} )  {
  return (
        <ProductDataEntryFormStyles  {...props} onSubmit={handleSubmit}>
           <ProductImage>
              <Label>Product Image</Label>
              <ProductImageDropbox setProductImage={setProductImage}/>
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

           <div>
              <SubmitButton width="100%" padding="0.75rem" margin="1.125rem 0 0 0" type="submit">Add Product</SubmitButton>
           </div>

        </ProductDataEntryFormStyles>
  )
}

export default ProductDataEntryForm