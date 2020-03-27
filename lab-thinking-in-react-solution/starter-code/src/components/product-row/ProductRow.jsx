import React from 'react';

const ProductRow = ({ productKey, name, price }) => {
  // the same as: const {productKey, name, price} = props;
  return (
    <tr key={productKey}>
      <td>{name}</td>
      <td>{price}</td>
    </tr>
  );
};

export default ProductRow;
