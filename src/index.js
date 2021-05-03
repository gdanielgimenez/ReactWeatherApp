import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {SpeechProvider} from '@speechly/react-client';

ReactDOM.render(
  <SpeechProvider appId="9534f3c5-a6a4-4155-a0e0-ed94fde9306d" language="en-US">
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </SpeechProvider>,
  document.getElementById('root')
);


