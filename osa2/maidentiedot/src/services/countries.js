import axios from 'axios'

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api'

const getCountries = ({search}) => {
    const request = axios.get(`${baseUrl}/${search}`)
    return request.then(response => response)
}




export default {getCountries}