import React from 'react';

function ProductList (props) {
  return (
    <ul>
      {
        props.products.map(product => (
          <li key={product.id} onClick={(evt) => props.onProductSelect(product)}>
            {product.name} ({product.brand})
          </li>
        ))
      }
    </ul>
  )
}

ProductList.propTypes = {
  products: React.PropTypes.array.isRequired,
  onProductSelect: React.PropTypes.func.isRequired
};

export default ProductList;