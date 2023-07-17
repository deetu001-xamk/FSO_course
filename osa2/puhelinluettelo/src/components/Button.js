



const Button = ({setPersons, newName, persons, setNewName}) => {
    
    const handleClick = (event) => {
        event.preventDefault()
        
        const newObj = {
            name: newName
        }

        setPersons(persons.concat(newObj))
        setNewName('')

    }



    return ( 
        <button type="submit" onClick={handleClick}>add</button>
    )
}


export default Button;