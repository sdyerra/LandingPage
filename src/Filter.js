import React from 'react';
import './Filter.css';




export default function Filter()
{
    function DirFilter() {
        var data = (JSON.parse(localStorage.getItem('metadata'))).Metadata;
        console.log(data);
        return ( 
            <select>
                <option>ALL</option>
                {data.map((filter) => (
                <option>{filter.Directorates}</option>
            ))}
            </select>
        );    
    }
    function SCAFilter() {
        var data = (JSON.parse(localStorage.getItem('metadata'))).Metadata;
        console.log(data);
        return ( 
            <div>
                <select style={{width:"25%", 'margin-left':'10px'}}>
                {data.map((filter) => (
                <option>{filter['Primary Staff']}</option>
                ))}
                </select>
                <select style={{width:"20%"}}>
                    {data.map((filter) => (
                    <option>{filter.Directorates}</option>
                ))}
                </select>
                <select style={{width:"20%"}}>
                    <option>17</option>
                    <option>18</option>
                    <option>19</option>
                </select>
                <input style={{width:"20%"}}></input>
            </div>
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
                <p style={{"margin-left":"10px"}}>SCA Number</p>
                <SCAFilter/>
                <p style={{'margin-left':'10px'}}>Scarb Review</p>
                <select style={{width:"80%"}}></select>
                <p style={{'margin-left':'10px'}}>Contract Term</p>
                <select style={{width:"80%"}}></select>
                <p style={{'margin-left':'10px'}}>COR</p>
                <select style={{width:"80%"}}></select>
            </div>
            <div class="wheel">
                <h1>STAGES</h1>
            </div>
        </div>
    );
}