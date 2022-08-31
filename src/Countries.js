
function Countries({countries}) {
    return(
        <div className="countries-container">
            {countries.map(country => {
                return (
                    <div key={country.name} className="country">
                        <p>{country.name}</p>
                        <img className="flag-img" src={`https://countryflagsapi.com/png/${country.iso2}`} alt={`Flag of ${country.name}`}/>
                    </div>
                )
            })}
        </div>)
}

export default Countries