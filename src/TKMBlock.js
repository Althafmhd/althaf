import React from 'react';

const TKMBlock=()=>{
    return(
        <main>
            <h1>TKMBlock</h1>
            <h3>MainMeter</h3>
            <lable>Date</lable>
            <label>MeterName</label>
            <input type="dropdown"  placeholder="metername" id="meter" required="true" ></input>
            <label>ReadingValue</label>
            <input type="number" placeholder="ReadingValue" id="Reading"></input>
            <button>Add</button>
            <lable>Total Value</lable>
            <input type="number" placeholder="TotalValue" id="Total"></input>
            <lable>Today value</lable>
            <input type="number" placeholder="TodayValue" id="Today"></input>
            <br></br><hr></hr>
            <h3>SubMeter</h3>
            <label>MeterName</label>
            <input type="dropdown"  placeholder="metername" id="meter" required="true" ></input>
            <label>ReadingValue</label>
            <input type="number" placeholder="ReadingValue" id="Reading"></input>
            <button>Add</button>
            <lable>Total Value</lable>
            <input type="number" placeholder="TotalValue" id="Total"></input>
            <lable>Today value</lable>
            <input type="number" placeholder="TodayValue" id="Today"></input>
        </main>
    );
}

export default TKMBlock;