import React from 'react';
import { fetchApi } from './api';
import Country from './country';
import IpAddress from './ip';
import '../css/App.css';

const ReactBody = () => {
    const [apiCall, setApiCall] = React.useState();
    const [buttonClick, setButtonClick] = React.useState(false);

    React.useEffect(() => {
        fetchApi().then(f => {
            setApiCall(f)
        }
        ).catch(error =>
            console.error(`Could not get api: ${error}`)
        )
    }, []);

    return (
        <>
            <div className='showInfo'>
                <button onClick={() => setButtonClick(!buttonClick)} >
                    {
                        !buttonClick ?
                            <b>Show Info</b>
                            :
                            <b>Close Info</b>
                    }
                </button>
            </div>
            {
                buttonClick ?
                    <div className='widget'>
                        {
                            apiCall &&
                            <div className='childWidget'>
                                <IpAddress ip={apiCall.ip} />
                                <hr />
                                <Country country={apiCall.country} />
                            </div>
                        }
                    </div>
                    :
                    <p>
                        Click <b>Show Info</b> to open widget.
                    </p>
            }
        </>
    );
};


export default React.memo(ReactBody);