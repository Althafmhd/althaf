import React from 'react'
import colorNames from 'colornames'

const Input=({setNewHex, setColor,setNewColor,setDark,setNewDark})=>{
    return(
        <form onSubmit={(e)=>e.preventDefault()}>
            <lable>AddColor</lable>&nbsp;&nbsp;
            <input 
                autoFocus
                required
                type="text"
                value= {setColor}
                onChange={(e) => { 
                    setNewColor(e.target.value)
                    setNewHex(colorNames(e.target.value));
                
                }}
            />
            <button
                type="button"
                onClick={()=> {setNewDark(!setDark)}}
            >
                Toogle Text Color
            </button>
        </form>
    );
}

export default Input