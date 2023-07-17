import { useState } from 'react'
import Persons from './components/Persons'
import PersonsForm from './components/PersonsForm.js'
import Filters from './components/Filters'

const App = () => {
  
    const [persons, setPersons] = useState([
      { name: 'Arto Hellas', number: '040-123456' },
      { name: 'Ada Lovelace', number: '39-44-5323523' },
      { name: 'Dan Abramov', number: '12-43-234345' },
      { name: 'Mary Poppendieck', number: '39-23-6423122' }
    ])
    
    const [showWhere, setShowWhere] = useState('')

    const [newContact, setNewContact] = useState({ name : '', number: ''})



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