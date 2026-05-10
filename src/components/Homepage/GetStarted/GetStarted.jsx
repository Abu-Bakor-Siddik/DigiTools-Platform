import React from 'react';
import GetStartedCard from '../../Ui/GetStartedCard';

const GetStarted = () => {
    return (
        <div className='container mx-auto space-y-10 my-20 bg-base-200 p-25'>
            <div className='flex flex-col items-center space-y-3'>
                <h2 className='text-3xl font-bold!'>Get Started in 3 Steps</h2>
                <p className='text-5 text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className='flex justify-center'>
                <GetStartedCard></GetStartedCard>
            </div>
        </div>
    );
};

export default GetStarted;