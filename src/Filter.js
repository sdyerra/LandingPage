import './Filter.css';

export default function Filter()
{
    return (
        <div class="boxr">
            <div class="sfy">
                <p>SELECT FISCAL YEAR</p> 
                <select>
                <option value="starter" selected>FY2017</option>
                </select>
            </div>
            <div class="filterstitle">
                <t>FILTERS</t>
                <p>DIR</p>
                <select>
                    <option>ALL</option>
                </select>
            </div>
            <div class="filters">
                <p>Contract Number #</p>
                <input></input>
            </div>
        </div>
    );
}