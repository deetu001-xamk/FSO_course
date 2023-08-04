


const CountriesList = ({resultList, moreData, handleShow}) => {


    return(
        <div>
            {Object.keys(moreData).length > 0 && resultList.length === 1
            ? (
                <div>
                    <h2>{moreData.name.common}</h2>
                    <p>{moreData.capital}</p>
                    <p>Area: {moreData.area}</p>

                    <h3>Languages</h3>
                    {Object.values(moreData.languages)
                           .map((x,index) => <li key={index}>{x}</li>)}
                    <br></br>
                    <img src={moreData.flags.png}/>
                    

                </div>
            ):(
                resultList.length > 10 
                    ? <p>Too many matches, specify another filter.</p>
        
        
                    : resultList.map((country) => <li key={country}>{country}  <button onClick={() => handleShow(country)}>show</button></li>)
                        
                    
                    
                    
                    
                    
                    
            )}
            



            


        </div>
    )


}


export default CountriesList