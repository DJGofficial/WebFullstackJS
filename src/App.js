import { useState } from 'react'
const App = () => {
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })

  const handleLeftClick = () =>
  setClicks({ ...clicks, left: clicks.left + 1 })

const handleRightClick = () =>
  setClicks({ ...clicks, right: clicks.right + 1 })
  

  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {clicks.right}
    </div>
  )
}
export default App;
/*
const Display = ({ counter }) => <div>{counter}</div>

const Button = ({handleClick,text}) => <button onClick={handleClick}>{text}</button>
  

const App = () => {
  const [counter, setCounter] = useState(0)
  console.log('rendering with counter value', counter)
  const increaseByOne = () => {
    console.log('increasing, value before', counter)   
     setCounter(counter + 1)
  }

  const decreaseByOne = () => { 
    console.log('decreasing, value before', counter)    
    setCounter(counter - 1)
  }

  const setToZero = () => {
    console.log('resetting to zero, value before', counter)    
    setCounter(0)
  }
  return (
    <div>
          <Display counter={counter}/>
          <Button handleClick={increaseByOne}        
          text='plus'      
          />      
          <Button handleClick={setToZero}        
          text='zero'      
          />           
          <Button handleClick={decreaseByOne}        
          text='minus'      />           
    </div>
  )
}
*/
/*
import { useState } from 'react'
Stateful Component
const App = () => {
  const [ counter, setCounter ] = useState(0)

  setTimeout(    () => setCounter(counter + 1),    1000  )

  console.log('rendering...', counter)

  return (
    <div>{counter}</div>
  )
}

export default App;
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

const Hello = (props) => {
  const bornYear = () => {   
     const yearNow = new Date().getFullYear() 
       return yearNow - props.age
        }

  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  )
}

const App = (props) => {
  const {counter} = props
  return (
    <div>{counter}</div>
  )
}
*/

