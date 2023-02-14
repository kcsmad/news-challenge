import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import routing from './routes';

import './index.css';
import 'semantic-ui-css/semantic.min.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(routing);

reportWebVitals();
