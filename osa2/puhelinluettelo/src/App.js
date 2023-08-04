import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import PersonsForm from './components/PersonsForm.js'
import Filters from './components/Filters'
import axios from 'axios'
import services from './services/persons'
import './index.css'
import Alert from './components/Alert'
import Error from './components/Error'

const App = () => {
  
    const [persons, setPersons] = useState([])
    
    const [showWhere, setShowWhere] = useState('')

    const [newContact, setNewContact] = useState({ name : '', number: ''})

    const [alertMsg, setAlert] = useState(null) 

    const [errorMsg, setError] = useState(null)

    const formHandlerName = (e) => {

      setNewContact({name : e.target.value, number : newContact.number}) 
      console.log(e.target.value)

  }

    const formHandlerNumber = (e) => {

        setNewContact({name : newContact.name, number : e.target.value}) 
        console.log(e.target.value)

    }

    const filterInputHandler = (e) => {
        
      setShowWhere(e.target.value)

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
          if(newContact.name === '' || newContact.number === '') {
            setError(`Missing name or number, please fill the information and try again.`)
            setTimeout(() => {
              setError(null)
            }, 4000)
          }else {
          services
          .addNew(newContact)
            .then((response) => {
              setPersons(persons.concat(response))
              setAlert(`Added ${newContact.name}.`)
              setTimeout(() => {
                setAlert(null)
              }, 4000)
              setNewContact({name: '', number : ''})
            })

          }

            


        } else if(typeof(resultName) === 'undefined' && typeof(resultNumber) !== 'undefined' ) {
            if(window.confirm(`This phonenumber is already in the phonebook under the name ${oldName.name}, do you want to change the name attached to this number to ${newContact.name}`)) {
              services
                .update(newContact, oldPerson.id)
                  .then((response) => {
                    setPersons((list) => list.map((object) => object.id === response.id ? response : object ))
                    setNewContact({name: '', number : ''})
                    setAlert(`Information updated successfully.`)
                    setTimeout(() => {
                      setAlert(null)
                    }, 4000)
                    })
                    .catch(() => {
                      setError(`Information of ${newContact.name} has already been removed from the server.`)
                      setTimeout(() => {
                        setError(null)
                      }, 4000)
                    })
            }
        } else if (typeof(resultName) !== 'undefined' && typeof(resultNumber) === 'undefined') {
            if(window.confirm(`${newContact.name} is already added to phonebook with a different number, replace the old number with a new one?`)){
              services
              .update(newContact, oldPerson.id)
                .then((response) => {
                  setPersons((list) => list.map((object) => object.id === response.id ? response : object ))
                  setNewContact({name: '', number : ''})
                  setAlert(`Information updated successfully.`)
                  setTimeout(() => {
                    setAlert(null)
                  }, 4000)                
                })
                  .catch(() => {
                    setError(`Information of ${newContact.name} has already been removed from the server.`)
                    setTimeout(() => {
                      setError(null)
                    }, 4000)
                    
                  })
            }
        } else  {
          alert(`${newContact.name} is alredy added to phonebook.`)
        }




    }

    const delButton = (id, name) => {

      if(window.confirm(`Delete ${name}?`)){
        services
          .del(id)
            .then(() => {
              setAlert(`${name} deleted successfully.`)
              setTimeout(() => {
                setAlert(null)
              }, 4000)
              setPersons((list) => list.filter((object) => object.id != id))
            })
            
        
      }

    }
    

    

   
    useEffect(() => {
      services
      .getAll()
        .then(response => {
          setPersons(response)
        })

    }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      {alertMsg !== null && <Alert alertMsg={alertMsg}/>}
      {errorMsg !== null && <Error errorMsg={errorMsg}/>}
      <Filters  
                showWhere={showWhere}
                filterInputHandler={filterInputHandler}/>

      <h3>Add a new contact</h3>
      <PersonsForm 
                    
                      newContact={newContact}
                      formHandlerName={formHandlerName}
                      formHandlerNumber={formHandlerNumber}
                      formAddButton={formAddButton}
                      
      />

      

      <h3>Numbers</h3>
      <Persons  persons={persons}
                showWhere={showWhere}
                delButton={delButton}/>
    </div>
  )

}

export default App