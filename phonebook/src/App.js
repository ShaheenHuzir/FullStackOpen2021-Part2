import React, { useState } from 'react';
import Person from '../src/Person';
import PersonForm from '../src/PersonForm';
import Filter from '../src/Filter';



const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);

  const [filterInput, setFilterInput] = useState('');
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('');
  const [filterData, setFilterData] = useState([]);



  const addToPhonebook = (event) => {
    event.preventDefault();
    
    const newPhoneBook = persons.concat({ name: newName,number:newNumber });
    
    //avoiding person duplication. Count is the instance of person.
    let count = 0;
    persons.forEach((item) => {
      if ((item.name.toLowerCase())=== (newName.toLowerCase())){
        count++;
      }
    })
    count>0 ?
       alert(`${newName} is already in the Phonebook`) : setPersons(newPhoneBook);
       console.log(persons);
  }

  const addName = (event) => {
    
    setNewName(event.target.value);
    
}

  const addNumber = (event) => {
    setNewNumber(event.target.value);
  }

  const filterFunc = (event) => {
    setFilterInput(event.target.value);
    let filteredData = filterInput.length > 0 ? persons.filter(item => { return item.name.toLowerCase().includes(filterInput.toLowerCase()) }) : [];
    setFilterData(filteredData);
   
    }
 
  
  return (
    
    <div>
      <h2>Phonebook</h2>
      <PersonForm handleSubmit={addToPhonebook} handleNameInput={addName} handleNumberInput={addNumber} />
      <h3>Contacts</h3>
      <Filter handleInput={filterFunc} details={filterData}/>
      <Person persons={persons}/>
   
    </div>
  )
}


export default App;
