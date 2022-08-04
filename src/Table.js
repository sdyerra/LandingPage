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
            console.log(getReq.result);
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
    const [data, setData] = useState([{Title: "Loading", AMSCO: "Loading"},]);

    // Dynamically fetching all data from Indexeddb using map
    function TableContent() {
        const scanumberstyle = {
            width:"17%"
        }

        // Sets Different Colors depending on Status ID
        function statusstyle(props) {
            if (parseInt(props) === 1) {
                return {color:"purple"};
            }
            else if (parseInt(props) === 2){
                return {color:"green"};
            }
            else if (parseInt(props) === 3) {
                return {color:"#AC7B56"};
            }
            else if (parseInt(props) === 9) {
                return {color:"green"};
            }
        }

        return (
            <tbody>              
                {data.map((contract) => (
                    <tr key={contract.ID}>
                        <td style={scanumberstyle}> <input type="checkbox"></input><p>{contract['SCA Number']}</p></td>
                        <td>Sep 2016 to Aug 2021</td>
                        <td>${contract['Total Project Cost']}</td>
                        <td>$1000</td>
                        <td>{contract["Created By"]}</td>
                        <td>{contract['Contract Term']}</td>
                        <td>1/1/11</td>
                        <td>N/A</td>
                        <td style={statusstyle(contract['Status:ID'])}>{contract["Status:Title"]}</td>
                    </tr>
              ))}
            </tbody>
          );
    };

    // function for adding data to the table
    function addTableData() {
        setData(getReq.result);
    }

    // when the request is finished run the addTableData function
    tablePromise.then(whencompleted => addTableData());

    // HTML below is for table
    return (
        <div>
        <div class="topbar">
                <div>
                    <p>IN REVIEW REQUESTS</p>
                </div>
                <p id="counter">5</p>
                <button>SAVE AS</button>
            </div>
        <div class="box">
            <div>
                <table class="table">
                    <thead>
                        <tr>
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
                    </thead>
                        <TableContent/>
                </table> 
            </div>
        </div>
        </div>
        );
}
