import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import PersonsForm from './components/PersonsForm.js'
import Filters from './components/Filters'
import axios from 'axios'
import services from './services/persons'
import './index.css'
import Alert from './components/Alert'

const App = () => {
  
    const [persons, setPersons] = useState([])
    
    const [showWhere, setShowWhere] = useState('')

    const [newContact, setNewContact] = useState({ name : '', number: ''})

    const [showAlert, setShowAlert] = useState(false) 

    const [alertName, setAlertName] = useState('')

    const formHandlerName = (e) => {

      setNewContact({name : e.target.value, number : newContact.number}) 
      console.log(e.target.value)

  }

    const formHandlerNumber = (e) => {

        setNewContact({name : newContact.name, number : e.target.value}) 
        console.log(e.target.value)

    }


    const formAddButton = (event) => {
        event.preventDefault()
        
        const newObj = {
            name: newContact.name,
            number : newContact.number

        }

        const resultName = persons.find(({name}) => name === newContact.name)
        const resultNumber = persons.find(({number}) => number === newContact.number)
        const oldName = persons.find((person) => person.number === newContact.number)
        const oldPerson =  persons.find((person) => person.number === newContact.number || person.name === newContact.name)


        if (typeof(resultName) === 'undefined' && typeof(resultNumber) === 'undefined' ) {
          services
          .addNew(newContact)
            .then(() => {
              setAlertName(newContact.name)
              alertShow()
              setNewContact({name: '', number : ''})
            })

            


        } else if(typeof(resultName) === 'undefined' && typeof(resultNumber) !== 'undefined' ) {
            if(window.confirm(`This phonenumber is already in the phonebook under the name ${oldName.name}, do you want to change the name attached to this number to ${newContact.name}`)) {
              services
                .update(newContact, oldPerson.id)
                  .then(() => {setNewContact({name: '', number : ''})})
            }
        } else if (typeof(resultName) !== 'undefined' && typeof(resultNumber) === 'undefined') {
            if(window.confirm(`${newContact.name} is already added to phonebook with a different number, replace the old number with a new one?`)){
              services
              .update(newContact, oldPerson.id)
                .then(() => {setNewContact({name: '', number : ''})})
            }
        } else  {
          alert(`${newContact.name} is alredy added to phonebook.`)
        }




    }

    const delButton =  (id, name) => {

      if(window.confirm(`Delete ${name}?`)){
        services.del(id)  
        
      }

    }
    const alertTime = 3000

    const alertShow = () => {
      setShowAlert(true)
      setTimeout(() => setShowAlert(false),3000)
    }




   
    
    useEffect(() => {
      services
      .getAll()
        .then(response => {
          setPersons(response)
        })

    }, [delButton, formAddButton])

  return (
    <div>
      <h2>Phonebook</h2>
      
      <Filters  persons={persons}
                showWhere={showWhere}
                setShowWhere={setShowWhere}/>

      <h3>Add a new contact</h3>
      <PersonsForm 
                    
                      newContact={newContact}
                      formHandlerName={formHandlerName}
                      formHandlerNumber={formHandlerNumber}
                      formAddButton={formAddButton}
                      
      />

      {showAlert && <Alert alertName={alertName}/>}

      <h3>Numbers</h3>
      <Persons  persons={persons}
                showWhere={showWhere}
                delButton={delButton}/>
    </div>
  )

}

export default App