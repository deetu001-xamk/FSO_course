import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import PersonsForm from './components/PersonsForm.js'
import Filters from './components/Filters'
import axios from 'axios'

const App = () => {
  
    const [persons, setPersons] = useState([])
    
    const [showWhere, setShowWhere] = useState('')

    const [newContact, setNewContact] = useState({ name : '', number: ''})

    const hook = () => {
    
      axios.get('http://localhost:3001/persons').then(response => {
        console.log("onnistui")
        setPersons(response.data)
      })


    }

    useEffect(hook, [])

  return (
    <div>
      <h2>Phonebook</h2>
      
      <Filters  persons={persons}
                showWhere={showWhere}
                setShowWhere={setShowWhere}/>

      <h3>Add a new contact</h3>
      <PersonsForm 
                    
                      newContact={newContact}
                      setNewContact={setNewContact}
                      persons={persons}
                      setPersons={setPersons}
                    
      />

      <h3>Numbers</h3>
      <Persons  persons={persons}
                showWhere={showWhere}/>
    </div>
  )

}

export default App