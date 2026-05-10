import { Check } from 'lucide-react';
import React from 'react';

const CardFeature = ({feature}) => {
    return (
        <p><Check color='#00ff04'></Check> {feature}</p>
    );
};

export default CardFeature;