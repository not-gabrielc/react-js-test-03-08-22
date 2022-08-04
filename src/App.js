import React from 'react';
import { fetchApi } from './components/api';
import Country from './components/country';
import IpAddress from './components/ip';
import './css/App.css';

function App() {
  const [apiCall, setApiCall] = React.useState();
  const [buttonClick, setButtonClick] = React.useState(false);

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

    </div >
  );
}

export default React.memo(App);