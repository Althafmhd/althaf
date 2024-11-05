import React from 'react'
import {useState} from 'react';
import Square from "./Square";
import Input from "./Input";
const Project=()=>{
    const[setHEX,setNewHex]=useState('');
    const[setDark,setNewDark]=useState(true);
    const[setColor,setNewColor]=useState('');
    
    
    return(
        <div>
            <Square 
                setHex={setHEX}
                setColor={setColor}
                setDark={setDark}
            />
            <Input>
                setHEX={setHEX}
                setColor={setColor}
                setDark={setDark}
                setNewHex={setNewHex}
                setNewColor={setNewColor}
                setNewDark={setNewDark}
            </Input>
        </div>
      
    )
}
export default Project 