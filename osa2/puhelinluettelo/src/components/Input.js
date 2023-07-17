
const Input = ({newName, setNewName}) => {


    const handleOnChange = (e) => {

        setNewName(e.target.value) 
        console.log(e.target.value)

    }

    return (
        <input placeholder='new name...' value={newName} onChange={handleOnChange}/>
    )
}


export default Input;