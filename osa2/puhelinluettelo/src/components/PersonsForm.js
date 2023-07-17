

const PersonsForm = ({newContact, setNewContact, persons, setPersons}) => {


    const handleOnChange = (e) => {

        setNewContact({name : e.target.value, number : newContact.number}) 
        console.log(e.target.value)

    }

    const handleOnChange2 = (e) => {

        setNewContact({name : newContact.name, number : e.target.value}) 
        console.log(e.target.value)

        console.log()

    }


    const handleClick = (event) => {
        event.preventDefault()
        
        const newObj = {
            name: newContact.name,
            number : newContact.number

        }

        const result = persons.find(({name}) => name === newContact.name)


        if (typeof(result) === 'undefined') {
            setPersons(persons.concat(newObj))
            setNewContact({name: '', number : ''})

        } else {
            alert(`${newContact.name} is already added to phonebook`)
        }



    }


    return (

        <form>
            <div>
                name: <input    placeholder="new name..."
                                value={newContact.name}
                                onChange={handleOnChange}/>
            </div>
            <div>
                number: <input  placeholder="new number..."
                                value={newContact.number}
                                onChange={handleOnChange2}/>
            </div>

            <button type="submit" onClick={handleClick}>add</button>
        
        
        </form>

    )

}

export default PersonsForm;