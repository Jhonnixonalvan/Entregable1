import React from 'react'

const QuoteBox = ({ramdomUsers, ramdomColors, clickRamdom}) => {
const letterColor = {
    color: ramdomColors 
}
console.log(letterColor)
const bckColor = {
    backgroundColor: ramdomColors
}



  return (
    <article className='card' style={letterColor}>
     <i className="fa-solid fa-quote-left"></i>
     <p className='p'>{ramdomUsers.quote}</p>
      <div className='container2'>
          <p className='name'>{ramdomUsers.author}</p>
          <button onClick={clickRamdom} className='btn' style={bckColor}>&#62;</button>
      </div>
     </article>
  )
}

export default QuoteBox