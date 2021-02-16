import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StateProvider } from './components/StateProvider';
import reducer, { intialState } from './components/reducer';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={intialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
