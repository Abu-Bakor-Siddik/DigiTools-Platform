import React, { use, useState } from "react";
import AvailableProduct from "./AvailableProduct/AvailableProduct";
import CartedProduct from "./CartedProduct/CartedProduct";
const ProductSection = ({ productPromise,selectedProducts,setSelectedProducts }) => {
  const products = use(productPromise);

  const [selectedType, setSelectedType] = useState("product");


  return (
    <div className="container mx-auto p-10">
      <div className="text-center space-y-6">
        <h1 className="text-[48px] font-extrabold!">Premium Digital Tools</h1>
        <p className="text-[#627382] font-regular">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>
        <div>
          <button
            onClick={() => setSelectedType("product")}
            className={`btn btn-ghost text-[black] rounded-full ${selectedType === "product" ? "bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-[white] rounded-full" : "bg-white"} `}>
            {" "}
            Products
          </button>
          <button
            onClick={() => setSelectedType("cart")}
            className={`btn btn-ghost text-[black] rounded-full ${selectedType === "cart" ? "bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-[white] rounded-full" : "bg-white"} `}>
            Cart ({selectedProducts.length})
          </button>
        </div>
      </div>
      <div className="mt-10">
        {selectedType === "product" ? (
          <AvailableProduct
            products={products}
            selectedProducts={selectedProducts}
            setSelectedProducts={setSelectedProducts}></AvailableProduct>
        ) : (
          <CartedProduct
            selectedProducts={selectedProducts}
            setSelectedProducts={setSelectedProducts}>
            {" "}
          </CartedProduct>
        )}
      </div>
    </div>
  );
};

export default ProductSection;
