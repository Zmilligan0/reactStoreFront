import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import {ProductImageDropboxStyles} from './styles';


function ProductImageDropbox  ({setProductImage, ...props}){
  
 const onDrop = useCallback(acceptedFiles => {
   const file = acceptedFiles[0] ; 
   console.log(file)        
   setProductImage({previewImage:URL.createObjectURL(file), file})
 }, [setProductImage])
 
 const {
   getRootProps,
   getInputProps,
 
   isFocused,
   isDragAccept,
   isDragReject,
 } = useDropzone({ accept: 'image/jpeg,image/jpg,image/png', maxFiles:1, onDrop });


    return( 
     
       <ProductImageDropboxStyles {...getRootProps({isFocused, isDragAccept, isDragReject})}>
         <input {...getInputProps()}  />
         <p>Product Image Upload</p>
       </ProductImageDropboxStyles>
      
      
     
    )
}

export default ProductImageDropbox 