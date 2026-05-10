import React from 'react';

const TransformSection = () => {
    return (
        <div className='bg-linear-to-r from-[#4f39f6] to-[#9514fa] container mx-auto text-[white] p-20 '>
            <div className='flex flex-col items-center space-y-5'>
                <h2 className='text-3xl font-extrabold!'>Ready to Transform Your Workflow?</h2>
                <p className='text-center text-[#a6b4c0] '>Join thousands of professionals who are already using Digitools to work smarter. <br />Start your free trial today.</p>
            </div>
            <div className='flex gap-4 justify-center my-5'>
                <button class="btn rounded-full"> <span className='text-transparent bg-clip-text bg-linear-to-r from-[#4f39f6] to-[#9514fa]'>Explore Products</span></button>
                <button class="btn rounded-full btn-outline">View Pricing</button>
            </div>
            <p className='text-center text-[#a6b4c0] '>14-day free trial • No credit card required • Cancel anytime</p>
        </div>
    );
};

export default TransformSection;