import React from 'react';

const PersonForm = ({handleSubmit,handleNameInput,handleNumberInput}) => {
    return (
     <div>
    <form onSubmit={handleSubmit}>
        <div>
        name: <input onChange={handleNameInput} />
        number: <input onChange={handleNumberInput} />
        </div>
        
        <div>
        <button type="submit">add</button>
        </div>
            </form>
            </div>
 )
}

export default PersonForm;