import React from 'react';
import Card from '../../Ui/Card';
const ProductSection = () => {
    return (
        <div className='container mx-auto p-10'>
            <div className='text-center space-y-6'>
                <h1 className='text-[48px] font-extrabold!' >Premium Digital Tools</h1>
                <p className='text-[#627382] font-regular'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
                <div>
                    <button className="btn btn-primary rounded-l-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] "> Product</button>
                    <button className='btn rounded-r-full'>Cart (2)</button>
                </div>
            </div>
            <div>
                <Card></Card>
            </div>
        </div>
    );
};

export default ProductSection;