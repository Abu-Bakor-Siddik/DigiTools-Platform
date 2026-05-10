import React from 'react';
import PricingCard from '../../Ui/PricingCard';

const Pricing = () => {
    return (
        <div className='container mx-auto'>
            <div className='flex flex-col items-center space-y-5 '>
                <h2 className='text-5xl font-extrabold! text-center'>Simple, Transparent Pricing</h2>
                <p className='text-5 text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            <div className='flex justify-center' >
                <PricingCard></PricingCard>
            </div>
        </div>
    );
};

export default Pricing;