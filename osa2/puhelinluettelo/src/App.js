import { useState } from 'react'
import Persons from './components/Persons'
import Button from './components/Button'
import Input from './components/Input'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <Input newName={newName} setNewName={setNewName}/>
        </div>
        <div>
          <Button 
                persons={persons} 
                setPersons={setPersons} 
                newName={newName}
                setNewName={setNewName} />
        </div>
      </form>
      <h2>Numbers</h2>
      <Persons persons={persons}/>
    </div>
  )

}

export default App