import React from 'react';
import './Table.css';
import ContractsData from './contracts.json';
import { useState, useEffect } from 'react';

const dbName = "contracts_database";
var getReq;
// Open Indexeddb for contracts
const request = window.indexedDB.open(dbName, 1);

// If error opening the Database
request.onerror = event => {
    console.log("Database error: " + event.target.errorCode);
};

// When data needs to be added/changed
request.onupgradeneeded = event => {
    var db = event.target.result;
    const objectStore = db.createObjectStore("contracts", {autoIncrement: true});

    // After ObjectStore is created add all the contracts
    objectStore.transaction.oncomplete = event => {
        const contractObjectStore = db.transaction("contracts", "readwrite").objectStore("contracts");
        ContractsData.forEach(function(contract) {
            contractObjectStore.add(contract);
        });
            
    };
};

// if opening the database is successful and the data has been loaded
var tablePromise = new Promise(function(resolve, reject) {
    request.onsuccess = event => {
        var db = event.target.result;
        const store = db.transaction("contracts", "readonly").objectStore("contracts");
        getReq = store.getAll();
        getReq.onsuccess = () => {
            console.log("getting data was successful");
            resolve();
        }
        getReq.onerror = () => {
            console.log("error getting the data");
            reject();
        }
    };  
    
});



export default function Table() {
    const [data, setData] = useState("Loading....");
    function addTableData() {
        setData(getReq.result[0].Title);
    }
    tablePromise.then(whencompleted => addTableData());
    // HTML below is for table
    return (
        <div class="table">
            <div class="topbar">
                <div>
                    <p>IN REVIEW REQUESTS</p>
                </div>
                <p id="counter">5</p>
                <button>SAVE AS</button>
            </div>
                <div>
                <p>
                    {data}
                </p>
            </div>
        </div>
        );
}