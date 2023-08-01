
const Persons = ({persons, showWhere, delButton}) => {


    return (

        <>

            {showWhere === '' 
            
            ? persons.map(person => 
                
                    <p key={person.name}>{person.name} <b>{person.number} </b>  
                    <button onClick={() => {delButton(person.id, person.name)}}>Delete</button></p>
                    
                
             )
                
            
            : persons.map(person => {
                let name = person.name.toLowerCase()
                let show = showWhere.toLowerCase()
                console.log(name.includes(show))
                if(name.includes(show) || person.number.includes(show)) {
                    return (
                    <div>
                        <p key={person.name}>{person.name} <b>{person.number}</b></p>
                          
                        <button onClick={delButton(person.id)}>Delete</button>
                    
                    </div> )}
            } )}

        
        </>
    )


}

export default Persons;