import axios from 'axios'

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api'

const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?'

const getAllCountries = () => {
    const request = axios.get(`${baseUrl}/all`)
    return request.then(response => response)
}

const getSearchCountry = (search) => {
    const request = axios.get(`${baseUrl}/name/${search}`)
    return request.then(response => response)

}

const getWeather = (api,city) => {
    const request = axios.get(`${weatherUrl}q=${city}&appid=${api}&units=metric`)
    return request.then(response => response)

}





export default {getAllCountries, getSearchCountry, getWeather}