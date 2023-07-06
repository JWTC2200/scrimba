import { useState } from "react"

import Header from "./components/Header"
import Main from "./components/Main"


export default function App() {

  const [currentPage, setCurrentPage] = useState("index")

  function changePage(page) {
    setCurrentPage(page)
  }


  return (
    <div>
      <Header 
        handleChange={changePage}
      />
      <Main 
        page={currentPage}
      />
    </div>
      
  )
}

