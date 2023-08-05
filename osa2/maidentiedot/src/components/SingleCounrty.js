

const SingleCountry = ({moreData, resultList, weatherData}) => {
    console.log(weatherData)
    return (


        <div>
        {Object.keys(moreData).length > 0 && resultList.length === 1 && weatherData !== null
            ? 
            <div>
                <h2>{moreData.name.common}</h2>
                <p>{moreData.capital}</p>
                <p>Area: {moreData.area}</p>

                <h3>Languages</h3>
                {Object.values(moreData.languages)
                    .map((x,index) => <li key={index}>{x}</li>)}
                <br></br>
                <img src={moreData.flags.png}/>

                <h3>Weather in {moreData.capital}</h3>

                <p>Temperature: {weatherData.data.main.temp} Celcius</p>
                <img style={{width : '10%'}} src={`https://openweathermap.org/img/wn/${weatherData.data.weather[0].icon}.png`}/>
                <p>Wind: {weatherData.data.wind.speed} m/s</p>
            </div>

            : <></>
                        
        
        
        }
    
        </div>
    
            )       
}


export default SingleCountry


/* 



*/