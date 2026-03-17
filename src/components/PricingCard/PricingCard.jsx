import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({pricing}) => {
    const {name, price, description, features} = pricing;
    
    return (
        <div className='flex flex-col border bg-cyan-800 rounded-2xl p-4 m-3'>
            {/* card header */}
            <div className='space-y-2'>
                <h1 className="text-5xl">{name}</h1>
                <h4 className='text-3xl'>$ {price}</h4>
            </div>
            {/* card Body */}
            <div className='bg-emerald-600 rounded-2xl p-4 mt-5 flex-1'>
                <p>{description}</p>
                {
                    features.map((feature, index) => <PricingFeature key={index} feature={feature}></PricingFeature>)
                }
            </div>
            <button className="btn w-full mt-5 rounded-2xl">Subscribe</button>
        </div>
    );
};

export default PricingCard;