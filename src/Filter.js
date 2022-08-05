import React from 'react';
import './Filter.css';




export default function Filter()
{
    function DirFilter() {
        var data = (JSON.parse(localStorage.getItem('metadata'))).Metadata;
        return ( 
            <select>
                <option>ALL</option>
                {data.map((filter) => (
                <option>{filter.Directorates}</option>
            ))}
            </select>
        );    
    }

    // HTML below is for filters
    return (
        <div class="boxr">
            <div class="sfy">
                <p>SELECT FISCAL YEAR</p> 
                <select>
                <option value="starter" selected>FY2017</option>
                </select>
            </div>
            <div class="filterstitle">
                <p id="heading">FILTERS</p>
                <p>DIR</p>
                <DirFilter/>
            </div>
            <div class="filters">
                <p id="contract">Contract Number #</p>
                <input></input>
            </div>
            <div class="wheel">
                <h1>STAGES</h1>
            </div>
        </div>
    );
}