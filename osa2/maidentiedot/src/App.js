import services from './services/countries'
import CountriesList from './components/CountriesList';
import {useState, useEffect} from 'react'


const App = () => {

  const [listCountries, setCountries] = useState([])
  const [search, setSearch] = useState('')



  useEffect(() => {
    if(search !== '') {
      services
      .getCountries(search)
        .then((response) => {
          setCountries(response.data)
          console.log(listCountries)
        })
    }

  }, [])

  return (
    <div>

        <p>Find countries: <input/></p>

        <CountriesList  search={search}
                        setSearch={setSearch}/>


    </div>


    )
}

export default App;
