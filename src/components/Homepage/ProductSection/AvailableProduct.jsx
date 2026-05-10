import React from 'react';
import Card from '../../Ui/Card';

const AvailableProduct = ({products}) => {
    return (
        <div>
            {
                products.map((product) => {
                    <Card key={product.id} product={product}></Card>
                })
            }
        </div>
    );
};

export default AvailableProduct;