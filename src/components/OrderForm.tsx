import React, {useState} from 'react';
import axios from "axios";

const OrderForm = () => {
    const initialDate = () => {
        // Default to tomorrow's date
        const date = new Date();
        date.setDate(date.getDate() + 1);
        date.setHours(0);

        // Format as YYYY-MM-DD for HTML Input compatibility
        return date.toISOString().split("T")[0]
    }

    const [date, setDate] = useState(initialDate);
    const [qtySmall, setQtySmall] = useState(0);
    const [qtyMedium, setQtyMedium] = useState(0);
    const [qtyLarge, setQtyLarge] = useState(0);
    const [memo, setMemo] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const order = {
            date,
            qtySmall,
            qtyMedium,
            qtyLarge,
            memo,
            userId: '1234'
        }

        const res = await axios.post(
            '/api/orders',
            order
        );

        console.log('POST request sent');
        console.log('Status ' + res.status);
        console.log('Response Object:')
        console.log(res)

    }

    return (
        <form onSubmit={handleSubmit}>
            <div className={'form-group'}>
                <label>Date</label>
                <input
                    className={'form-control date'}
                    type={'date'}
                    value={date}
                    min={initialDate()}
                    onChange={e => setDate(e.target.value)}
                />
            </div>
            <div className={'form-group'}>
                <label>Qty Large</label>
                <input
                    className={'form-control'}
                    type={'number'}
                    value={qtyLarge}
                    onChange={e => setQtyLarge(parseInt(e.target.value))}
                />
            </div>
            <div className={'form-group'}>
                <label>Qty Medium</label>
                <input
                    className={'form-control'}
                    type={'number'}
                    value={qtyMedium}
                    onChange={e => setQtyMedium(parseInt(e.target.value))}
                />
            </div>
            <div className={'form-group'}>
                <label>Qty Small</label>
                <input
                    className={'form-control'}
                    type={'number'}
                    value={qtySmall}
                    onChange={e => setQtySmall(parseInt(e.target.value))}
                />
            </div>
            <div className={'form-group'}>
                <textarea
                    className={'form-control'}
                    value={memo}
                    onChange={e => setMemo(e.target.value)}
                />
            </div>
            <button className={'btn btn-primary'}>Place Order</button>
        </form>
    )
};

export default OrderForm;