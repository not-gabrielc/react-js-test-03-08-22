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
      console.log(f)
    }
    ).catch(error =>
      console.error(`Could not get api: ${error}`)
    )
  }, []);


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
          </div>
        </div>
      }
    </div >
  );
}

export default React.memo(App);