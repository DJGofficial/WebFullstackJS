import { useState } from 'react'

const Button = ({ handleClick, text }) => (  
<button onClick={handleClick}>    
{text}  
</button>)

const StatisticsLine=({text, number})=>(
  <div><div>{text} {number}</div>
  </div>
)

const Statistics = (props) => {
  const average =((props.good * 1) + (props.bad * -1))/props.all
  const positive= props.good*100/props.all
  if(props.all>0){
    return (
      <div>
 <h2>Statistics</h2>
        <table>
          <tbody>
            <tr>
              <td>good</td>
              <td>{props.good}</td>
            </tr>
            <tr>
              <td>neutral</td>
              <td>{props.neutral}</td>
            </tr>
            <tr>
              <td>bad</td>
              <td>{props.bad}</td>
            </tr>
            <tr>
              <td>all</td>
              <td>{props.all}</td>
            </tr>
            <tr>
              <td>average</td>
              <td>{average}</td>
            </tr>
            <tr>
              <td>positive</td>
              <td>{positive}%</td>
            </tr>
          </tbody>
        </table>
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
    
        <Statistics {...props}/>

    </div>
  )
}

export default App