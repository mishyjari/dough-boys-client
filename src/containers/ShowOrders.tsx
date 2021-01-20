import React from 'react';
import OrderPreview from "../components/OrderPreview";

const ShowOrders = () => {
    return (
        <div>
        {
            dummyOrders.map(order => <OrderPreview {...order} />)
        }
        </div>
    );
};

const dummyOrders = [
    {
        id: '1',
        date: '2021-01-20',
        qtySmall: 5,
        qtyMedium: 0,
        qtyLarge: 10,
        memo: 'Sample Sample',
        userId: '1234'
    },
    {
        id: '2',
        date: '2021-01-20',
        qtySmall: 5,
        qtyMedium: 0,
        qtyLarge: 10,
        memo: 'Sample Sample',
        userId: '1234'
    },
    {
        id: '3',
        date: '2021-01-20',
        qtySmall: 5,
        qtyMedium: 0,
        qtyLarge: 10,
        memo: 'Sample Sample',
        userId: '1234'
    }

];

export default ShowOrders;