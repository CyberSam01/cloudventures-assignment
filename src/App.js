import { useState, useEffect } from "react";
import Pagination from "./Pagination"
import Countries from "./Countries";

function App() {
  const[countries, setCountries] = useState([])
  const[currentPage, setCurrentPage] = useState(1)
  const countriesPerPage = 15
  const visited = (currentPage - 1) * countriesPerPage

  useEffect(() => {
      fetch("https://countriesnow.space/api/v0.1/countries/flag/unicode")
        .then(response => response.json())
        .then(data => setCountries(data.data))
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
  
  countries.sort(compare)

  return (
    <div className="App">
      <header>
        <h1>Countries</h1>
      </header>
      <Countries 
        countries={countries.slice(visited, visited + countriesPerPage)}
      />
      <Pagination 
        currentPage={currentPage}
        total={countries.length}
        limit={countriesPerPage}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}

export default App;