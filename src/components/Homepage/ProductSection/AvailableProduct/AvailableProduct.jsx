import React from "react";
import Card from "../../../Ui/Card";

const AvailableProduct = ({
  products,
  setSelectedProducts,
  selectedProducts,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 ">
      {products.map((product) => (
        <Card
          key={product.id}
          product={product}
          selectedProducts={selectedProducts}
          setSelectedProducts={setSelectedProducts}></Card>
      ))}
    </div>
  );
};

export default AvailableProduct;
