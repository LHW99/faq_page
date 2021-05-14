import React,{ useState } from 'react'

const Questions = ({id,title,info}) => {
  const [toggle,setToggle] = useState(false)

  const toggleClick = () => {
    return setToggle(!toggle)
  }

  return (
    <article className="question">
      <h4>{title}</h4>
      { toggle ? <p>{info}</p> : <p></p> }
      <button onClick={()=>toggleClick()} className="btn">
        { toggle ? '-' : '+'}
      </button>
    </article>
  )
}

export default Questions;