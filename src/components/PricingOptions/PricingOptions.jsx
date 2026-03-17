import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';
import DaisyPricingCard from '../DaisyNav/DaisyPricingCard';

const PricingOptions = ({ pricingProsmise }) => {

    const pricingData = use(pricingProsmise);
    console.log(pricingData);

    return (
        <div className='my-8 mx-5'>
            <h2 className='text-5xl text-center m-4'>Get Your Membership</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {/* {
                    pricingData.map(pricing => <PricingCard pricing={pricing} key={pricing.id}></PricingCard>)
                } */}

                {
                    pricingData.map(pricing => <DaisyPricingCard key={pricing.id} pricing={pricing}></DaisyPricingCard>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;