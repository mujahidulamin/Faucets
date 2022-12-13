import React from 'react';
import '../components/Request.css'

const Request = () => {
    return (
        <div className='bg-req'>
            <div className='container '>
                <h2 className='fs-2 mt-5 color fw-bold'>Request testnet LINK</h2>
                <p className='mt-4'>Get testnet LINK for an account on one of the supported blockchain testnets so you can
                    <br />
                 create and test your own oracle and Chainlinked smart contract</p>
            </div>
        </div>
    );
};

export default Request;