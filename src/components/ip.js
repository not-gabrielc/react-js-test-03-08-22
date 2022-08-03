import React from 'react';
import '../css/component.css'


const IpAddress = (props) => {
    const { ip } = props

    return (
        <div className='mainDiv'>
            <h3 className='keyDiv'>IP Address:</h3>
            <p className='valueDiv'>{ip}</p>
        </div>
    );
};

export default React.memo(IpAddress)