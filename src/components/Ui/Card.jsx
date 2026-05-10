import React from 'react';
import CardFeature from './CardFeature';

const Card = ({product}) => {
    const{tag,icon,name,price,period,description,features}= product;
    return (
        <div className="card w-96 bg-base-100 shadow-sm">
            <div className="card-body">
                <div className='flex justify-end'>                           
                    <span className="badge badge-xs badge-warning ">{tag}</span>
                </div>
                <img src={icon} alt={name} />
                <h2 className="text-3xl font-bold">{name}</h2>
                <p>{description}</p>
                <span className="text-xl">${price}/{period}</span>
                {
                    features.map((feature,index) => <CardFeature key={index} feature={feature}></CardFeature>)
                }
                
                <ul className="mt-6 flex flex-col gap-2 text-xs">
                               
                </ul>
                <div className="mt-6">
                <button className="btn btn-primary rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] w-full"> Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Card;