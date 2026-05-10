import React from 'react';
import { MdOutlineMenu } from 'react-icons/md';

const NavBar = ({selectedProducts}) => {
    let totalCost = 0;
    for(const product of selectedProducts){
        totalCost = totalCost + product.price;
    }
    return (
        <div className="navbar bg-base-100 shadow-sm flex justify-between items-center container mx-auto">
            <div className="dropdown">
                <div className='flex items-center'>
                    <button tabIndex={0} role="button" className='md:hidden mr-2 '> <MdOutlineMenu></MdOutlineMenu> </button>
                    <a className="btn btn-ghost font-bold! text-3xl text-transparent bg-clip-text bg-linear-to-r from-[#4f39f6] to-[#9514fa] ">DigiTools</a>
                </div>
                <ul
                    tabIndex="-1"
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow md:hidden ">
                    <li><a href="/products">Products</a></li>
                    <li><a href="/features">Features</a></li>
                    <li><a href="/pricing">Pricing</a></li>
                    <li><a href="/testimonials">Testimonials</a></li>
                    <li><a href="/faq">FAQ</a></li>
                </ul>
            </div>
            <div>
                <ul className=' md:flex gap-4 hidden'>
                    <li><a href="/products">Products</a></li>
                    <li><a href="/features">Features</a></li>
                    <li><a href="/pricing">Pricing</a></li>
                    <li><a href="/testimonials">Testimonials</a></li>
                    <li><a href="/faq">FAQ</a></li>
                </ul>
            </div>
            <div className='flex justify-between items-center gap-4'>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                    <div tabIndex="0" role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                        <span className="badge badge-sm indicator-item">{selectedProducts.length}</span>
                        </div>
                    </div>
                    <div
                        tabIndex="0"
                        className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
                        <div className="card-body">
                        <span className="text-lg font-bold">{selectedProducts.length} Items</span>
                        <span className="text-info">Subtotal: ${totalCost}</span>
                        </div>
                    </div>
                    </div>
                </div>
                <div>
                    <ul className='flex justify-between items-center gap-4'>
                        <li><a href="/login">Login</a></li>
                        <button className="btn btn-primary rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] ">Get Started</button>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;