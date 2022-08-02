import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import quotes from './json/quotes.json'
import colors from './components/Colors.jsx'

function App() {

  const getRamdoElements = arr =>{
    const indexnumber = Math.floor(Math.random() * arr.length)
    return arr[indexnumber]
  }
    
  let usersRamdom = getRamdoElements(quotes)
  let colorsRamdom = getRamdoElements(colors)

  

  const [ramdomUsers, setRamdomUsers] = useState(usersRamdom)
  const [ramdomColors, setRamdomColors] = useState(colorsRamdom)

  const clickRamdom = () => {
    usersRamdom = getRamdoElements(quotes)
    colorsRamdom = getRamdoElements(colors)

    setRamdomUsers(usersRamdom)
    setRamdomColors(colorsRamdom)
  }


  const backg = {
    backgroundColor: ramdomColors
  }
  return (
    <div className="App" style={backg}>
      <i className="fa-solid fa-quote-left"></i>
      <QuoteBox ramdomUsers={ramdomUsers} ramdomColors={ramdomColors} clickRamdom={clickRamdom}/>
    </div>
  )
}

export default App
