


const CountriesList = ({resultList, handleShow}) => {

    //Tän olisi varmaan pystynyt tekemään paljon nätimmin ja fiksumminkin :D

    return(
        <div>
            
                {resultList.length > 10 
                ? ( <p>Too many matches, specify another filter.</p>
                ): ( resultList.length > 1  ? (
                    resultList.map((country) => <li key={country}>{country}  <button onClick={() => handleShow(country)}>show</button></li>)
                ):(<></>)   
                
                )}    
                    
            
            



            


        </div>
    )


}


export default CountriesList