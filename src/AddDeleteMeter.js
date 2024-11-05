import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
const AddDeleteMeter=()=>{
    return(
        <main>
            <h1>AddDeleteMeter</h1>
            <h4>OPBlockMeter</h4>
            <h6>AddMeter</h6>
            <label>MeterName</label>
            <input type="text" name ="phoneNumber" id="meter" placeholder="metername"></input>
            <button>Add</button>
            <h4>TKMMeter</h4>
            <label>MeterName</label>
            <input type="text" name ="phoneNumber" id="meter" placeholder="metername"></input>
            <button>Add</button>
            <h6>DeleteMeter</h6>
            <label>MeterName</label>
            <input type="text" name ="phoneNumber" id="meter" placeholder="metername"></input>
            <FaTrashAlt 
            role="button"
            tabIndex="0" />

        </main>
    );
}
export default AddDeleteMeter;