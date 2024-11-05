import React from 'react'

const Square=({setHex,setColor,setDark})=>{
    return(
        <section 
           className="square"
           style={{
                backgroundColor : setColor,
                color: setDark ? "#000": "#FFF"
           }}
        >
            <p>{setColor ? setColor :"Empty Value"}</p>
            <p> {setHex ? setHex : null }</p>
        </section>
    );
}
Square.defaultProps={
    colorValue :"Empty color Value"
}
export default Square