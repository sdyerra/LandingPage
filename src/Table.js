import React from 'react';
import './Table.css';
import ContractsData from './contracts.json';
import { useState } from 'react';

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

// promise for opening the database and getting the data
var tablePromise = new Promise(function(resolve, reject) {
    request.onsuccess = event => {
        var db = event.target.result;

        // opens the contracts database as readonly
        const store = db.transaction("contracts", "readonly").objectStore("contracts");

        // gets all the data in the contract database
        getReq = store.getAll();

        getReq.onsuccess = () => {
            console.log("Getting contract data was successful");
            resolve();
        }

        getReq.onerror = () => {
            console.log("Error getting contract data");
            reject();
        }
    };  
    
});


export default function Table() {

    // Hook for Contract Data in Table
    const [data, setData] = useState("Loading....");

    // function for adding data to the table
    function addTableData(props) {
        setData(getReq.result);
    }

    // when the request is finished run the addTableData function
    tablePromise.then(whencompleted => addTableData());

    // HTML below is for table
    return (
        <div class="box">
            <div class="topbar">
                <div>
                    <p>IN REVIEW REQUESTS</p>
                </div>
                <p id="counter">5</p>
                <button>SAVE AS</button>
            </div>
            <div class="table">
                <table>
                    <tr id="tableheading">
                        <th>SCA Number</th>
                        <th>Contract Duration</th>
                        <th>Total Project Cost</th>
                        <th>Requested Cost</th>
                        <th>COR</th>
                        <th>Contract Term</th>
                        <th>Submission Date</th>
                        <th>SCARB Review</th>
                        <th>Status</th>
                    </tr>
                    <tr>
                        <td>{data[0]['SCA Number']}</td>
                        <td>Sep 2016 to Aug 2021</td>
                        <td>$123456789</td>
                        <td>$987654321</td>
                        <td>TestAdmin</td>
                        <td>BASE</td>
                        <td>29/29/29</td>
                        <td></td>
                        <td>Approved by COS</td>
                    </tr>
                </table>
            </div>
        </div>
        );
}