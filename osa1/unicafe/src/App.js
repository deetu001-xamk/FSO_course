import { useState } from 'react'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)



  return (
    <>
      <Header text="Give Feedback"/>
      <Button text="good" name={good} set={setGood}/>
      <Button text="neutral" name={neutral} set={setNeutral}/>
      <Button text="bad" name={bad} set={setBad}/>
      <Header text="Statistics"/> 
      <table>
        <tbody>
          <Information text="good" name={good}/>
          <Information text="neutral" name={neutral}/>
          <Information text="bad" name={bad}/>
          <Statistics good={good} neutral={neutral} bad={bad}/>
        </tbody>
      </table>
    </>
  )
}

const Header = ({text}) => {

  return (
    <h1>{text}</h1>
  )

}

const Button = ({text, name, set}) => {

  const handleClick = () => {
    set(name + 1)
  }

  return (
    <button onClick={handleClick}>{text}</button>
  )

}

const Information = ({text, name}) => {



  return (
    <tr>
      <td>{text}</td>
      <td>{name}</td>
    </tr>
    )

}

const Statistics = ({good, neutral, bad}) => {
  
  if(good + neutral + bad > 0) {
    return (
      <>
            
          <StatisticLine text="all" value={good + neutral + bad}/>
          <StatisticLine text="average" value={Math.round((good * 1 + bad * -1) / (good + neutral + bad) * 10) / 10}/>
          <StatisticLine text="positive" value={Math.round(good/ (good + neutral + bad) * 100 * 10) / 10}/>

      
      </>
    )}
  
  return(
    <tr><td>No feedback given</td></tr>
  )

}

const StatisticLine = ({text, value}) => {

  if(text === "positive") {
    return (
      <tr>
       <td>{text}</td>
       <td>{value}%</td>
      </tr>
      
    )
  }

  return ( 
    <tr>
      <td>{text}</td>
      <td>{value}</td>
   </tr>
  )

}

export default App