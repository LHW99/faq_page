import React,{ useState } from 'react';
import Questions from './Questions';
import data from './data';

function App() {
  const [questions,setQuestion] = useState(data)

  return (
    <div className="container">
      <h1>FAQ</h1>
      <section>
        {questions.map((question)=>{
          return <Questions key={question.id} {...question} /> 
        })}
      </section>
    </div>
  )
}

export default App;
