import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './components/app';

const root = createRoot(document.getElementById('main'));
root.render(
  <App />,
);
