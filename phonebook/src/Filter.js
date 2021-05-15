import React from 'react';

const Filter = ({ handleInput, details }) => {
    
    return (
        <>
        <div>
        filter:<input onChange={handleInput}/>
            </div>
            <div>
            ****************************    
            {details.length>0?details.map(item => 
               <> <p>{ item.name}</p><p>{item.number}</p></> 
            ):<p></p>
                }
           *********************************     
            </div>
          
        </>
    )
}

export default Filter;