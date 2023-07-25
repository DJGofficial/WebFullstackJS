import { useState } from 'react'

const Button = ({ handleClick, text }) => (  
<button onClick={handleClick}>    
{text}  
</button>)

const StatisticsLine=({text, number})=>(
  <div><div>{text}{number}</div>
  </div>
)

const Statistics = (props) => {
  const average =((props.good * 1) + (props.bad * -1))/props.all
  const positive= props.good*100/props.all
  if(props.all>0){
    return (
      <div>
      <div>good {props.good}</div>
      <div>neutral {props.neutral}</div>
      <div>bad {props.bad}</div>
      <div>all {props.all}</div>
      <StatisticsLine text='average' number={average}/>
      <StatisticsLine text='positive' number={positive}/>
      </div>
    )
  }else{
    return <div>No feedback given</div>;
  }
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll]= useState(0)
  //const [allStats, setStats] = useState([])

  const props = {
    good,
    neutral,
    bad,
    all,
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
      <Button handleClick={handleGood()} text='good' />
      <Button handleClick={handleNeutral()} text='neutral' />
      <Button handleClick={handleBad()} text='bad' />
        <h1>statistics</h1>
    
        <Statistics {...props}/>

    </div>
  )
}

export default App