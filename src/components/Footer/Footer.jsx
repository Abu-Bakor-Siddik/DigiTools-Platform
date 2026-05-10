import React from 'react';
import { CiInstagram } from 'react-icons/ci';
import { FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='container mx-auto '>
            <footer className='bg-[#101727] text-white p-20 '>
                <div className="grid grid-cols-2 text-center md:text-left md:grid-cols-3 lg:grid-cols-5 gap-10">
                    <div className='mr-2'>
                        <h1 className='text-4xl font-bold!'>DigiTools</h1>
                        <p className='text-sm text-[#a6b4c0] mt-4'>Premium digital tools for creators, <br /> professionals, and businesses. Work smarter <br /> with our suite of powerful tools.</p>
                    </div>

                        <div className='flex flex-col'>
                            <h6 className="">Product</h6>
                            <a className="link link-hover text-5 text-[#a6b4c0]">Features</a>
                            <a className="link link-hover text-5 text-[#a6b4c0]">Pricing</a>
                            <a className="link link-hover text-5 text-[#a6b4c0]">Templates</a>
                            <a className="link link-hover text-5 text-[#a6b4c0]">Integrations</a>
                        </div>
                        <div className='flex flex-col'>
                            <h6 className="">Company</h6>
                            <a className="link link-hover text-5 text-[#a6b4c0]">About</a>
                            <a className="link link-hover text-5 text-[#a6b4c0]">Blog</a>
                            <a className="link link-hover text-5 text-[#a6b4c0]">Careers</a>
                            <a className="link link-hover text-5 text-[#a6b4c0]">Press</a>
                        </div>
                        <div className='flex flex-col'>
                            <h6 className="">Resources</h6>
                            <a className="link link-hover text-5 text-[#a6b4c0]">Documentation</a>
                            <a className="link link-hover text-5 text-[#a6b4c0]">Help Center</a>
                            <a className="link link-hover text-5 text-[#a6b4c0]">Community</a>
                            <a className="link link-hover text-5 text-[#a6b4c0]">Contact</a>
                        </div>
                    <div>
                        <h6 className="">Social Links</h6>
                        <div className=" flex justify-center md:grid md:grid-cols-3  md:gap-4 gap-3 mt-2">
                            <a href=""> <CiInstagram className='bg-white text-black w-10 h-10 p-2 rounded-full'></CiInstagram> </a>
                            <a href=""> <FaFacebook  className='bg-white text-black w-10 h-10 p-2 rounded-full'></FaFacebook> </a>
                            <a href=""> <FaXTwitter  className='bg-white text-black w-10 h-10 p-2 rounded-full'></FaXTwitter> </a>
                        </div>
                    </div>
                </div>
                <br />
                <div className="divider before:bg-[#ffffff2a] after:bg-[#ffffff2a]"></div>
                <div className='flex flex-col items-center gap-5 md:flex-row  md:justify-between   text-sm text-[#a6b4c0]'>
                    <div>
                        <p>© 2026 Digitools. All rights reserved.</p>
                    </div>
                    <div>
                        <ul className='flex gap-4 '>
                            <li><a href="">Privacy Policy </a></li>
                            <li><a href="">Terms of Service </a></li>
                            <li><a href="">Cookies</a></li>
                        </ul>
                    </div>
                </div>

            </footer>
        </div>
    );
};

export default Footer;