import React from 'react';
import './App.css';
import Table from './Table';
import Filter from './Filter';
import Newscalendartemp from './Newscalendartemp';
import Metadata from './metadata'; 

function App() {
  // HTML below is for header and navbar
  return (
    <div>
      <Table/>
      <Filter/>
      <Newscalendartemp/>
    </div>
  );
}

function storeMetadata() {
  // Adding Metadata To LocalStorage
  localStorage.setItem('metadata', JSON.stringify({Metadata}));
}

storeMetadata();

export default App;
