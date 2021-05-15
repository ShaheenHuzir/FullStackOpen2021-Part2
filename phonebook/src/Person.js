import React  from "react";

const Person = ({persons}) =>{
return (
    <div>
        {
            persons.map(item => {
                return (
                    <div>
                        <p key={item.name}>{item.name}</p>
                        <p key={item.number}>{item.number}</p>
                    </div>)
            }
            )
        }
    </div>
)
}

export default Person; 