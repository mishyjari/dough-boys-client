import React from 'react';
import OrderForm from "../components/OrderForm";
import LoginForm from "../components/LoginForm";

const Account = () => {
  return (
    <div className='container-fluid'>
        <div className={'row justify-content-center'}>
                <h3>My Account</h3>
        </div>
        <div className={'row justify-content-center'}>
            <div className={'col-4 d-flex justify-content-center'}>
                <div className='card m-auto w-100'>
                    <div className='card-body'>
                        <h5 className='card-title'>Place New Order</h5>
                        <div className='card-text'>
                            <OrderForm />
                        </div>
                    </div>
                </div>
            </div>
            <div className={'col-4'}>
                <div className={'row'}>
                    <div className='card m-auto w-100'>
                        <div className='card-body'>
                            <h5 className='card-title'>Active Orders</h5>
                            <div className='card-text'>
                                <ul>
                                    <li>Example</li>
                                    <li>Example</li>
                                    <li>Example</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'row'}>
                    <div className='card m-auto w-100'>
                        <div className='card-body'>
                            <h5 className='card-title'>Past Orders</h5>
                            <div className='card-text'>
                                <ul>
                                    <li>Example</li>
                                    <li>Example</li>
                                    <li>Example</li>
                                </ul>
                                <a href={"#"}>...more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'col-4'}>
                <div className={'row'}>
                    <div className='card m-auto w-100'>
                        <div className='card-body'>
                            <h5 className='card-title'>Invoices</h5>
                            <div className='card-text'>
                                Invoices go here
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'row'}>
                    <div className='card m-auto w-100'>
                        <div className='card-body'>
                            <h5 className='card-title'>Pay Invoice</h5>
                            <div className='card-text'>
                                Payment portal goes here
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  );
};

export default Account;
