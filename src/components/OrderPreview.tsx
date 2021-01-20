import React from 'react';

interface Order {
    id: string;
    date: string;
    qtySmall: number;
    qtyMedium: number;
    qtyLarge: number;
    memo: string;
    userId: string
}

const OrderPreview: React.FC<Order> = (props) => {

    const { date, qtyLarge, qtyMedium, qtySmall, memo, id } = props;
    return (
        <div className={'card'} key={id}>
            <div className={'card-body'}>
                <div className={'card-title'}>
                    <strong>{date}</strong>
                </div>
                <div className={'card-text'}>
                    <strong>Large: </strong><em>{qtyLarge}</em><br />
                    <strong>Medium: </strong><em>{qtyMedium}</em><br />
                    <strong>Small: </strong><em>{qtySmall}</em><br />
                    {
                        memo
                        ?
                            <p>{memo}</p>
                        :
                            null
                    }
                </div>
            </div>
        </div>
    )
}

export default OrderPreview;