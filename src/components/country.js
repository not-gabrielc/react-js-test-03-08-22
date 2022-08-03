import React from 'react';
import '../css/component.css'


const Country = (props) => {
    const { country } = props

    return (
        <div className='mainDiv'>
            <h3 className='keyDiv'>Country:</h3>
            <p className='valueDiv'>{country}</p>
        </div>
    );
};

export default React.memo(Country)