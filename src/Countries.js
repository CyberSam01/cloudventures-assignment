import { useState, useEffect } from "react"

function Countries() {
    const[countries, setCountries] = useState()

    useEffect(() => {
        fetch("https://countriesnow.space/api/v0.1/countries/flag/unicode")
            .then((response) => response.json())
            .then((data) => setCountries(data.data))    
    }, [])

    function compare(a, b) {
        if (a.name < b.name){
          return -1;
        } else if (a.name > b.name){
          return 1;
        } else {
            return 0;
        }
      }
    
      countries && countries.sort(compare);
   

    return(
        <div className="countries-container">
            <h1>Countries</h1>
            {countries && countries.map(country => {
                return (
                    <div key={country.name} className="country">
                        <p>{country.name}</p>
                        <img src={`https://countryflagsapi.com/png/${country.iso2}`} alt={`Flag of ${country.name}`}/>
                    </div>
                )
            })}
        </div>)
}


export default Countries