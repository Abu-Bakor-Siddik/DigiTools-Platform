import React from 'react';

const Stats = () => {
    return (
        <div className='md:flex items-center p-15 justify-evenly bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-[white] container mx-auto'>
            <div className='text-center'>
                <h2 className='text-[40px] font-extrabold!'>50K+</h2>
                <p>Active User</p>
            </div>
              <div className="divider divider-horizontal before:bg-white after:bg-white "></div>
              <div className="md:hidden divider before:bg-white after:bg-white"></div>  
            <div className='text-center'>
                <h2 className='text-[40px] font-extrabold!'>200+</h2>
                <p>Premium Tools</p>
            </div>
                <div className="divider divider-horizontal before:bg-white after:bg-white"></div>
                <div className="md:hidden divider before:bg-white after:bg-white"></div>  
            <div className='text-center'>
                <h2 className='text-[40px] font-extrabold!'>4.9</h2>
                <p>Rating</p>
            </div>
        </div>
    );
};

export default Stats;