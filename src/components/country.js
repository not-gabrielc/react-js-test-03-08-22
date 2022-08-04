import React from 'react';
import '../css/component.css'
/* https://www.countryflagsapi.com/ used to get the image of the flag */


const Country = (props) => {
    const { country } = props;

    return (
        <div className='mainDiv'>
            <h3 className='keyDiv'>Country:</h3>
            <p className='valueDiv'>{country}</p>
            <img
                className='image'
                style={{ width: '10%' }}
                src={`https://countryflagsapi.com/png/${country}`}
                // style="--urlLink: url('https://countryflagsapi.com/png/GB')"
                alt={country}
            />
        </div>
    );
};

export default React.memo(Country)