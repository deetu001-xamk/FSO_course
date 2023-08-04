import axios from 'axios'

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api'

const getAllCountries = () => {
    const request = axios.get(`${baseUrl}/all`)
    return request.then(response => response)
}

const getSearchCountry = (search) => {
    const request = axios.get(`${baseUrl}/name/${search}`)
    return request.then(response => response)

}





export default {getAllCountries, getSearchCountry}