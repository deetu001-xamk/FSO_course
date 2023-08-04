import axios from "axios";

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const req = axios.get(baseUrl)
    return req.then(response => response.data)
}

const addNew = (newContact) => {
    const req = axios.post(baseUrl, newContact)
    return req.then(response => response.data)
}

const del =  (id) => {
    const req =  axios.delete(`${baseUrl}/${id}`)
    return req.then(response => response)


}

const update = (newContact, id) => {
    const req = axios.put(`${baseUrl}/${id}`, newContact)
    return req.then(response => response.data)
}



export default {getAll, addNew, del, update}