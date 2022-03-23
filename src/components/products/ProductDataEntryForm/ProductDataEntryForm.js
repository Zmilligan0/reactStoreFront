import React from 'react';

import {ProductDataEntryFormStyles} from './styles'

function ProductDataEntryForm ({children, ...props})  {
  return (
        <ProductDataEntryFormStyles  {...props}>
           <h2>ProductDataEntryForm Component</h2>
           {children}

        </ProductDataEntryFormStyles>
  )
}

export default ProductDataEntryForm