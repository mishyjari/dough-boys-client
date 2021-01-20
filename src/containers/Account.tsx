import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import OrderForm from "../components/OrderForm";
import ShowOrders from "./ShowOrders";

const accountPages = [
    {
        label: 'New Order',
        href: '/account/new-order',
        component: <OrderForm />
    },
    {
        label: 'View Orders',
        href: '/account/orders',
        component: <ShowOrders />
    },
    {
        label: 'Invoicing',
        href: '/account/invoicing'
    },
    {
        label: 'Account Details',
        href: '/account/details'
    }
]

const Account = () => {

    return (
    <div className='container-fluid red'>
        <div className={'row justify-content-center'}>
                <h3>My Account</h3>
        </div>
        <div className={'row fluid red'}>
            <div className={'col col-2 red'}>
                <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                {
                    accountPages.map(({label, href}) => {
                        return <Link to={href}>
                            {label}
                        </Link>
                    })
                }
                </div>
            </div>
            <div className={'col col-10'}>
            <Switch>
                {
                    accountPages.map(({label, href, component}) => {
                        return <Route path={href}>
                            {component || label}
                        </Route>
                })
                }
            </Switch>
            </div>
        </div>
    </div>
  );
};

export default Account;
