
const Persons = ({persons, showWhere}) => {


    return (

        <>

            {showWhere === '' 
            
            ? persons.map(person => <p key={person.name}>{person.name} <b>{person.number}</b></p>)
                
            
            : persons.map(person => {
                let name = person.name.toLowerCase()
                let show = showWhere.toLowerCase()
                console.log(name.includes(show))
                if(name.includes(show) || person.number.includes(show)) {
                    return <p key={person.name}>{person.name} <b>{person.number}</b></p> }
            } )}

        
        </>
    )


}

export default Persons;