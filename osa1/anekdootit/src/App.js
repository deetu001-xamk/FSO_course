import { useState } from 'react'

const App = () => {
  const [anecdotes, setAnecdotes] = [
    {anecdote : 'If it hurts, do it more often.', vote : 0},
    {anecdote : 'Adding manpower to a late software project makes it later!', vote : 0},
    {anecdote : 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.', vote : 0},
    {anecdote : 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', vote : 0},
    {anecdote : 'Premature optimization is the root of all evil.', vote : 0},
    {anecdote : 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', vote : 0},
    {anecdote : 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.', vote : 0},
    {anecdote : 'The only way to go fast, is to go well.', vote : 0} 
    
  ]
   
  const [selected, setSelected] = useState(0)
  console.log(anecdotes)

  return (
    <>
      <p>{anecdotes[selected]}</p>
      <VoteButton anecdotes={anecdotes} setAnecdotes={setAnecdotes}/>
      <Button setSelected={setSelected} anecdotes={anecdotes} />
    </>
  )
}

const Button = ({setSelected, anecdotes}) => {

  const handleClick = () => {

    // Otin listan propsina Button elementtiin, jotta voin tulostaa random numeron listan pituuden perusteella.
    let randomNumber = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomNumber)

  }

  return (
    <button onClick={handleClick}>
      Random anecdote
    </button>
  )

}

const VoteButton = ({anecdotes, setAnecdotes}) => {

  return (
    <button>
      vote
    </button>
  )

}

export default App