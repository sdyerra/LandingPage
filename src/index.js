import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Table from './Table';
import Filter from './Filter';
import Newscalendartemp from './Newscalendartemp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const tableirr = ReactDOM.createRoot(document.getElementById('tableirr'));

tableirr.render(
  <React.StrictMode>
    <Table/>
  </React.StrictMode>
);

const filter = ReactDOM.createRoot(document.getElementById('filter'));

filter.render(
  <React.StrictMode>
    <Filter/>
  </React.StrictMode>
);

const nct = ReactDOM.createRoot(document.getElementById('nct'));

nct.render(
  <React.StrictMode>
    <Newscalendartemp/>
  </React.StrictMode>
);

