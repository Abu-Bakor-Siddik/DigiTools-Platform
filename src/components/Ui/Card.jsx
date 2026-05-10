import React, { useState } from 'react';
import CardFeature from './CardFeature';
import { toast } from 'react-toastify';

const Card = ({product,selectedProducts,setSelectedProducts}) => {

    const{tag,tagType,icon,name,price,period,description,features}= product;

    const [isSelected,setIsSelected]=useState(false);

    const badgeHandle = (tagType) => {
            const badgeMap = {
                'popular':     'badge-warning',
                'best-seller': 'badge-success',
                'new':         'badge-info',
                'premium':     'badge-error',
            };
        return badgeMap[tagType] || 'badge-neutral';
    }

    const handleSelectedProductCart = () => {
        setIsSelected(true);
        toast.success(`${product.name} has been added to your cart`);
        setSelectedProducts([...selectedProducts,product])
    }

    return (
        <div className="card md:w-80 lg:w-96 bg-base-100 shadow-sm rounded-xl">
            <div className="card-body">
                <div className='flex justify-end'>                           
                    <span className={`badge badge-l font-bold! badge-soft ${badgeHandle(tagType)}`}>{tag}</span>
                </div>
                <img src={icon} alt={name} className='w-10 h-10' />
                <h2 className="text-3xl font-bold">{name}</h2>
                <p>{description}</p>
                <span className="text-xl">${price}/ <span className='text-sm'>{period}</span></span>
                {
                    features.map((feature,index) => <CardFeature key={index} feature={feature}></CardFeature>)
                }
                
                <ul className="mt-6 flex flex-col gap-2 text-xs">
                               
                </ul>
                <div className="mt-6">
                <button onClick={handleSelectedProductCart} disabled={isSelected === true? true : false} className={`btn btn-primary rounded-full ${isSelected === true ? 'bg-linear-to-r from-[#39f65c] to-[#39f65c] text-[black]' : 'bg-linear-to-r from-[#4f39f6] to-[#9514fa]'} w-full `}> {`${isSelected=== true ? 'Added to Cart':'Buy Now'}`}</button>
                </div>
            </div>
        </div>
    );
};

export default Card;