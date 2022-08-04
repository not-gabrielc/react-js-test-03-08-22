import React from 'react';
import '../css/component.css'
/* https://www.countryflagsapi.com/ used to get the image of the flag */


const Country = (props) => {
    const { country } = props;

    return (
        <div className='mainDiv countryCss'>
            <h3 className='keyDiv'>Country:</h3>
            <p className='valueDiv childCountry'>{country}</p>
            {/* <img
                className='image'
                src={`https://countryflagsapi.com/svg/${country}`}
                alt={country}
                style={{ width: '10%' }}
            /> */}
        </div>
    );
};

export default React.memo(Country)