import React from 'react';
import { fetchApi } from './components/api';
import Country from './components/country';
import IpAddress from './components/ip';
import './css/App.css';

function App() {
  const [apiCall, setApiCall] = React.useState();

  React.useEffect(() => {
    fetchApi().then(f => {
      setApiCall(f)
    }
    ).catch(error =>
      console.error(`Could not get api: ${error}`)
    )
  }, []);

  const postInApi = (e) => {
    e.preventDefault()

    const postEndPoint = 'https://62ebb8e6705264f263dee407.mockapi.io/info'

    const data = {
      IpAddress: apiCall.ip,
      Country: apiCall.country,
      Flag: `https://countryflagsapi.com/svg/${apiCall.country}`
    }

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };

    fetch(postEndPoint, requestOptions)
      .then(response => {
        console.log("Status code: " + response.status)
        return response.json()
      })
      .then(response =>
        console.log(response)
      )
      .catch(err => {
        console.error(err)
      })

  };


  return (
    <div className="App">
      <header>
        <h2 className='title'>
          React APi
        </h2>
      </header>

      {
        apiCall &&
        <div className='widget'>
          <div className='childWidget'>
            <IpAddress ip={apiCall.ip} />
            <hr />
            <Country country={apiCall.country} />

            {/* send to the api */}
            <div>
              <button
                onClick={e => postInApi(e)}
              >
                post
              </button>
            </div>
          </div>
        </div>
      }
    </div >
  );
}

export default React.memo(App);