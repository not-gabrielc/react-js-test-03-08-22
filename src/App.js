import React from 'react';
import ReactBody from './components/content';
import './css/App.css';

function App() {

  return (
    <div className="App">
      <header>
        <h2 className='title'>
          React APi
        </h2>
      </header>

      <ReactBody />

    </div >
  );
}

export default React.memo(App);