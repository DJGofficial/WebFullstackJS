import { useState } from 'react'

const Statistics = (props) => {
 if(props.all>0){
    return (
      <div>
      <div>good {props.good}</div>
      <div>neutral {props.neutral}</div>
      <div>bad {props.bad}</div>
      <div>all {props.all}</div>
      <div>average {props.average}</div>
      <div>positive {props.positive} %</div>
      </div>
    )
  }else{
    return <div>No feedback given</div>;
  }
}

const App = () => {
  // save clicks of each button to its own state
 
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll]= useState(0)
  const average =((good * 1) + (bad * -1))/all
  const positive= good*100/all
  const [allStats, setStats] = useState([])

  const props = {
    good,
    neutral,
    bad,
    all,
    average,
    positive,
  };

  const handleGood = ()=>()=>{
  setGood(good+1)
  setAll(all+1)
}
const handleNeutral = ()=>()=>{
  setNeutral(neutral+1)
  setAll(all+1)

}
const handleBad = ()=>()=>{
  setBad(bad+1)
  setAll(all+1)
}
  return (
    <div>
      <h1>give feedback</h1>
      <button onClick= {handleGood()}>
        good
        </button>
        <button onClick= {handleNeutral()}>
        neutral
        </button>
        <button onClick= {handleBad()}>
        bad
        </button>
        <h1>statistics</h1>
    
        <Statistics {...props}/>
    </div>
  )
}

export default App
