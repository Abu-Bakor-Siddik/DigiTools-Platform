import React from 'react';

const GetStartedCard = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            <div className="card w-80 bg-base-100 shadow-sm hover-3d">
                <div className="card-body space-y-3">
                    <div className='flex justify-end'>
                        <span className="badge badge-lg bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-[white] rounded-full">01</span>
                    </div>
                    <div className='flex justify-center'>
                        <img src="https://i.ibb.co.com/V0W5J78F/User.png" alt="" className='w-20 h-20'/>
                    </div>
                    <div className="flex items-center flex-col text-center space-y-3">
                        <h2 className="text-3xl font-bold!">Create Account</h2>
                        <p className='text-5 text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                </div>
            </div>
            <div className="card w-80 bg-base-100 shadow-sm hover-3d">
                <div className="card-body space-y-3">
                    <div className='flex justify-end'>
                        <span className="badge badge-lg bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-[white] rounded-full">02</span>
                    </div>
                    <div className='flex justify-center'>
                        <img src="https://i.ibb.co.com/b5kSHttq/Package.png" alt="" className='w-20 h-20'/>
                    </div>
                    <div className="flex items-center flex-col text-center space-y-3">
                        <h2 className="text-3xl font-bold!">Choose Products</h2>
                        <p className='text-5 text-[#627382]'>Browse our catalog and select the tools that fit your needs.</p>
                    </div>
                </div>
            </div>
            <div className="card w-80 bg-base-100 shadow-sm hover-3d">
                <div className="card-body space-y-3">
                    <div className='flex justify-end'>
                        <span className="badge badge-lg bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-[white] rounded-full">03</span>
                    </div>
                    <div className='flex justify-center'>
                        <img src="https://i.ibb.co.com/d45BWgRL/Rocket.png" alt="" className='w-20 h-20'/>
                    </div>
                    <div className="flex items-center flex-col text-center space-y-3">
                        <h2 className="text-3xl font-bold!">Start Creating</h2>
                        <p className='text-5 text-[#627382]'>Download and start using your premium tools immediately.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetStartedCard;