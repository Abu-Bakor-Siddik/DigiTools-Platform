import React from 'react';
import CartedCard from '../../../Ui/CartedCard';
import { toast } from 'react-toastify';

const CartedProduct = ({selectedProducts,setSelectedProducts}) => {
    let totalCost = 0;
    for(const product of selectedProducts){
        totalCost = totalCost + product.price;
    }

    const checkOut = () =>{
        setSelectedProducts([]);
        toast.success(` your order placed successfully with charged  $${totalCost}`)
    }

    const handleDeleteSelectedProduct = (cartedProduct) => {
        const filterProduct = selectedProducts.filter(selectedProduct => selectedProduct.name != cartedProduct.name )
        setSelectedProducts(filterProduct);
        toast.error(`${cartedProduct.name} has been removed from the cart`)
    }
    return (
        <div>
            <div className='space-y-5  shadow-xl/20 p-10 rounded-2xl'>
                <h2 className='font-bold! text-2xl'>Your Cart </h2>
                {
                    selectedProducts.length === 0 ? 
                        <div className='h-100 flex items-center justify-center flex-col gap-4'>
                            <h2 className='font-semibold! text-xl'>No Product selected Yet</h2>
                            <p>go to Products tab to buy product</p>
                        </div>
                    :
                    selectedProducts.map((cartedProduct,index) => {
                        return (
                            <CartedCard key={index} cartedProduct={cartedProduct} handleDeleteSelectedProduct={handleDeleteSelectedProduct} ></CartedCard>
                        )
                    })
                }
                <div className={`space-y-5 ${selectedProducts.length === 0 ? 'hidden' : 'visible' }`}>
                    <div className='flex justify-between'>
                        <p>Total:</p>
                        <h3 className='text-2xl font-bold!'>${totalCost}</h3>
                    </div>
                    <button onClick={checkOut} className={`btn btn-primary w-full rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa]`}>Proceed To Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default CartedProduct;