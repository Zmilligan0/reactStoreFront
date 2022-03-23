import React from 'react';

import {ProductImageDropboxStyles} from './styles'

function ProductImageDropbox ({children, ...props})  {
  return (
        <ProductImageDropboxStyles  {...props}>
           <h2>ProductImageDropbox Component</h2>
           {children}

        </ProductImageDropboxStyles>
  )
}

export default ProductImageDropbox