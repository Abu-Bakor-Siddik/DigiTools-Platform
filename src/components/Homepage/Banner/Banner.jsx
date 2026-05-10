import { Play } from 'lucide-react';
import React from 'react';
import { BounceLoader } from 'react-spinners';
const Banner = () => {
    return (
        <div className="hero bg-base-200 container mx-auto py-20 px-10 md:px-30">
            <div className="hero-content flex-col lg:flex-row-reverse xl:gap-50">
                <img
                src="https://i.ibb.co.com/V0PVnz2K/banner.png"
                className="max-w-sm rounded-lg"
                />
                <div>
                    <div>
                        <div className="badge badge-soft badge-primary mb-4"> <BounceLoader size={12} color="#7e00fc"></BounceLoader> New: AI-Powered Tools Available</div>

                    </div>
                    <h1 className='md:text-5xl text-4xl font-extrabold! mb-1'>Supercharge Your</h1>
                    <h1 className='md:text-5xl text-4xl font-extrabold!'>Digital Workflow</h1>
                    <p className="py-6 text-[#627382] font-regular">
                        Access premium AI tools, design assets, templates, and productivity <br />
                        software—all in one place. Start creating faster today. <br />
                        Explore Products
                    </p>
                    <div>
                        <button className="btn btn-primary rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] mr-4"> Explore Product</button>
                        <button className="btn btn-neutral btn-outline rounded-full border-[#9514fa]  "> <Play color='#9434f4'></Play> <span className='text-transparent bg-clip-text bg-linear-to-r from-[#4f39f6] to-[#9514fa] '>Outline</span></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;