

const PersonsForm = ({newContact, formAddButton, formHandlerName, formHandlerNumber}) => {




    return (

        <form>
            <div>
                name: <input    placeholder="new name..."
                                value={newContact.name}
                                onChange={formHandlerName}/>
            </div>
            <div>
                number: <input  placeholder="new number..."
                                value={newContact.number}
                                onChange={formHandlerNumber}/>
            </div>

            <button type="submit" onClick={formAddButton}>add</button>
        
        
        </form>

    )

}

export default PersonsForm;