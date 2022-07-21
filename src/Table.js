import React from 'react';
import './Table.css';
import Contractsdata from './contracts.json';

function setupContractData() {
    // Open Indexeddb for contracts
    
}

setupContractData();

export default function Table() {
    // HTML below is for table
    return (
        <div class="table">
            <div class="topbar">
                <div>
                    <p>IN REVIEW REQUESTS</p>
                </div>
                <counter>5</counter>
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