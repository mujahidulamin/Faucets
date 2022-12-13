import React from 'react';
import './Important.css'

import { ImWarning } from "react-icons/im";
import Table from '../Table/Table';
import { Link } from 'react-router-dom';

const Important = () => {
    return (
        <div className=''>
            <div className='container bg-important'>
                <div className='pt-3'>

                    <ImWarning className='icon-color'></ImWarning><span>Your wallet is connected to <strong> Arbitrum Rinkeby</strong>, so you are requesting <strong>Arbitrum Rinkeby</strong> Link/ETH.</span>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label mt-3">Wallet address</label>
                    <input type="email" class="form-control w-50" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <p className='mt-3'>Request Type</p>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <div className='d-flex'>
                            <input type="email"
                                value='20 Test Link'
                                class="form-control w-25" id="exampleInputEmail1" aria-describedby="emailHelp" readOnly />
                            <input type="email"
                                value='0.5 ETH'
                                class="form-control w-25 ms-3" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className='mt-3'>
                            <button className='button'>
                                Send Request
                            </button>
                        </div>
                        <div>
                            <p className='mt-4 fw-bold'>Request History</p>
                        </div>
                        <Link to={'/'}>
                            <button class="bg-button">ETH Transaction History
                            </button></Link>
                        <div>
                            <Table></Table>
                        </div>
                        <Link to={'/'}>
                            <button class="bg-button">TestLink Transaction History
                            </button>
                        </Link>
                        <div>
                            <Table></Table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Important;