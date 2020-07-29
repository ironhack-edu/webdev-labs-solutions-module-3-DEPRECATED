import React from "react";
import ProductRow from "../product-row/ProductRow";

const ProductList = (props) => {
  const filteredProducts = props.data.filter((product) => {
    if (props.stocked) {
      return (
        product.name.toLowerCase().includes(props.name.toLowerCase()) &&
        product.stocked === true
      );
    }
    return product.name.toLowerCase().includes(props.name.toLowerCase());
  });

  const productList = filteredProducts.map((prod, idx) => {
    return <ProductRow productKey={idx} name={prod.name} price={prod.price} />;
  });

  return (
    <table>
      <col width="200" />
      <col width="200" />
      <tr>
        <th>Name</th>
        <th>Price</th>
      </tr>
      {productList}
    </table>
  );
};

export default ProductList;
