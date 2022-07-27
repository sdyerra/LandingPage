import React from 'react';
import './Table.css';
import ContractsData from './contracts.json';

const dbName = "contracts_database";
let db;


    // Open Indexeddb for contracts
    const request = window.indexedDB.open(dbName, 1);

    // If error opening the Database
    request.onerror = event => {
        console.log("Database error: " + event.target.errorCode);
    };

    // When data needs to be added/changed
    request.onupgradeneeded = event => {
        db = event.target.result;
        console.log("hello");

        const objectStore = db.createObjectStore("contracts", {autoIncrement: true});

        // After ObjectStore is created add all the contracts
        objectStore.transaction.oncomplete = event => {
            const contractObjectStore = db.transaction("contracts", "readwrite").objectStore("contracts");
            ContractsData.forEach(function(contract) {
              contractObjectStore.add(contract);
            });
            
        };
    };

function getContract(key) {
    const request = db.transaction('contract_database').objectStore('contracts').get(key);
    console.log(request);

    request.onsuccess = ()=> {
        const contract = request.result;
        console.log(contract);
        //return contract;
    }

    request.onerror = (err)=> {
        console.error(`Error to get student information: ${err}`)
    }
}


export default function Table() {
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
                Note: this is a one-way operation. Once you eject, you can't go back!
                If you aren't satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.
                Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.
                You don't have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
                </p>
            </div>
        </div>
    );
}