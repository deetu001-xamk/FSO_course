import services from './services/countries'
import CountriesList from './components/CountriesList';
import {useState, useEffect} from 'react'


const App = () => {

  const [listCountries, setCountries] = useState([])
  const [searchCountries, setSearch] = useState('')
  const [resultList, setResult] = useState([])
  const [specificCountry, setSpecific] = useState('')
  const [moreData, setData] = useState({})

  const handleShow = (country) => {
    setSpecific(country)
    setResult([country])
  }

  const handleChange = (e) => {
      const value = e.target.value
      setSearch(value)
      

  }

  const handleCountrySelect = (country) => {
    if (resultList.length === 1) {
      services
        .getSearchCountry(resultList[0])
          .then((response) => {
            setData(response.data)})
            
    } else {
      setSpecific(country);
    }

    console.log(moreData)
  };
  
  useEffect(() => {

    if(resultList.length === 1) {
      handleCountrySelect(resultList[0])
    }

  }, [resultList])

  useEffect(() => {
    setResult((prevList) =>
      listCountries.filter((str) =>
        str.toLowerCase().includes(searchCountries.toLowerCase())
      )


    );
  }, [searchCountries, listCountries]);

  useEffect(() => {
    
      services
      .getAllCountries()
        .then((response) => {
          setCountries(response.data.map((x) => {return x.name.common}))
          
        })
          
  }, [])

  return (
    <div>

        <p>Find countries: <input value={searchCountries}
                                  onChange={handleChange}
                                  placeholder='search...'/></p>

        <CountriesList  handleShow={handleShow}
                        moreData={moreData}
                        resultList={resultList}/>


    </div>


    )
}

export default App;
