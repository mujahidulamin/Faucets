import React from 'react';
import Important from '../Important/Important';
import Request from '../Request';
import './Notice.css'
const Notice = () => {
    return (
        <div>
            <h2 className='fs-6 bg text-center text-white'>Notice Here</h2>
            <Request></Request>
            <Important></Important>
        </div>
    );
};

export default Notice;