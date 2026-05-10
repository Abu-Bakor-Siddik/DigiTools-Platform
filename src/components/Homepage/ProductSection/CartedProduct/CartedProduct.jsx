import React from 'react';
import CartedCard from '../../../Ui/CartedCard';

const CartedProduct = ({selectedProducts,setSelectedProducts}) => {
    return (
        <div>
            <div className='space-y-5'>
                {
                    selectedProducts.length === 0 ? 
                        <div className='h-100 flex items-center justify-center flex-col gap-4'>
                            <h2 className='font-semibold! text-xl'>No Product selected Yet</h2>
                            <p>go to Products tab to buy product</p>
                        </div>
                    :
                    selectedProducts.map((cartedProduct,index) => {
                    return (
                        <CartedCard key={index} cartedProduct={cartedProduct} ></CartedCard>
                    )
                })
                }
            </div>
        </div>
    );
};

export default CartedProduct;