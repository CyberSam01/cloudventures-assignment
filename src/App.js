import { useState } from "react";
import Countries from "./Countries"
import Pagination from "./Pagination"

function App() {
  const [currentPage, setCurrentPage] = useState(1)
  return (
    <div className="App">
        <Pagination 
          currentPage={currentPage}
          total={500}
          limit={15}
          onPageChange={(page) => setCurrentPage(page)}
        />
        <Countries />
    </div>
  );
}

export default App;
