import React from 'react';
import { Check } from 'lucide-react';


const PricingCard = () => {
    return (
        <div className='gap-10 my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <div className="card w-96 bg-base-200 shadow-sm flex flex-col rounded-3xl">
                <div className="card-body ">

                    <div className='space-y-2'>
                        <h2 className="text-xl font-bold!">Starter</h2>
                        <p className='text-5 text-[#627382]'>Perfect for getting started</p>
                    </div>
                        <span className="text-lg text-[#627382] mt-2"> <span className="text-2xl font-bold! text-[black]">$0</span>/Month</span>
                    
                    
                    <ul className="mt-6 flex flex-col gap-2 flex-1">
                        <li className='flex gap-2'>
                            <Check color='#00ff04'></Check>
                            <span>Access to 10 free tools</span>
                        </li>
                        <li className='flex gap-2'>
                            <Check color='#00ff04'></Check>
                            <span>Basic templates</span>
                        </li>
                        <li className='flex gap-2'>
                            <Check color='#00ff04'></Check>
                            <span>Community support</span>
                        </li>
                        <li className='flex gap-2'>
                            <Check color='#00ff04'></Check>
                            <span>1 project per month</span>
                        </li>
                    </ul>
                    <div className="mt-6">
                        <button className="btn btn-primary font-bold! rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] w-full">Get Started Free</button>
                    </div>
                </div>
            </div>

            <div className="card w-96 bg-linear-to-r from-[#4f39f6] to-[#9514fa] shadow-sm rounded-3xl text-[white]">
                <div className="card-body">
                    <div className='flex justify-center relative -top-8'>
                        <span className="badge badge-soft bg-[#FEF3C6] rounded-full badge-lg badge-warning">Most Popular</span>
                    </div>

                    <div className='space-y-2'>
                        <h2 className="text-xl font-bold!">Pro</h2>
                        <p className='text-5 text-[#a6b4c0]'>Best for professionals</p>
                    </div>
                        <span className="text-lg  mt-2"> <span className="text-2xl font-bold! ">$29</span>/Month</span>
                    
                    
                    <ul className="mt-6 flex flex-col gap-2 flex-1">
                    <li className='flex gap-2'>
                        <Check color='#ffffff'></Check>
                        <span>Access to all premium tools</span>
                    </li>
                    <li className='flex gap-2'>
                        <Check color='#ffffff'></Check>
                        <span>Unlimited templates</span>
                    </li>
                    <li className='flex gap-2'>
                        <Check color='#ffffff'></Check>
                        <span>Priority support</span>
                    </li>
                    <li className='flex gap-2'>
                        <Check color='#ffffff'></Check>
                        <span>Unlimited projects</span>
                    </li>
                    <li className='flex gap-2'>
                        <Check color='#ffffff'></Check>
                        <span>Cloud sync</span>
                    </li>
                    <li className='flex gap-2'>
                        <Check color='#ffffff'></Check>
                        <span>Advanced analytics</span>
                    </li>
                    </ul>
                    <div className="mt-10">
                        <button className="btn  rounded-full  w-full "> <span className='font-bold! text-transparent bg-clip-text bg-linear-to-r from-[#4f39f6] to-[#9514fa]'>Start Pro Trial</span></button>
                    </div>
                </div>
            </div>

            <div className="card w-96 bg-base-200 shadow-sm rounded-3xl">
                <div className="card-body">

                    <div className='space-y-2'>
                        <h2 className="text-lg font-bold!">Enterprise</h2>
                        <p className='text-5 text-[#627382]'>For teams and businesses</p>
                    </div>
                        <span className="text-xl text-[#627382] mt-2"> <span className="text-2xl font-bold! text-[black]">$99</span>/Month</span>
                    
                    
                    <ul className="mt-6 flex flex-col gap-2 flex-1">
                    <li className='flex gap-2'>
                        <Check color='#00ff04'></Check>
                        <span>Everything in Pro</span>
                    </li>
                    <li className='flex gap-2'>
                        <Check color='#00ff04'></Check>
                        <span>Team collaboration</span>
                    </li>
                    <li className='flex gap-2'>
                        <Check color='#00ff04'></Check>
                        <span>Custom integrations</span>
                    </li>
                    <li className='flex gap-2'>
                        <Check color='#00ff04'></Check>
                        <span>Dedicated support</span>
                    </li>
                    <li className='flex gap-2'>
                        <Check color='#00ff04'></Check>
                        <span>SLA guarantee</span>
                    </li>
                    <li className='flex gap-2'>
                        <Check color='#00ff04'></Check>
                        <span>Custom branding</span>
                    </li>
                    </ul>
                    <div className="mt-10">
                        <button className="btn btn-primary font-bold! rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] w-full">Contact Sales</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingCard;