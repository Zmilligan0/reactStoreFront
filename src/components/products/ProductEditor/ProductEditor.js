import React from 'react';

import {ProductEditorStyles} from './styles'

function ProductEditor ({children, ...props})  {
  return (
        <ProductEditorStyles  {...props}>
           <h2>ProductEditor Component</h2>
           {children}

        </ProductEditorStyles>
  )
}

export default ProductEditor