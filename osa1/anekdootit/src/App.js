import { useState } from 'react'

const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    {anecdote : 'If it hurts, do it more often.', vote : 0},
    {anecdote : 'Adding manpower to a late software project makes it later!', vote : 0},
    {anecdote : 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.', vote : 0},
    {anecdote : 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', vote : 0},
    {anecdote : 'Premature optimization is the root of all evil.', vote : 0},
    {anecdote : 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', vote : 0},
    {anecdote : 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.', vote : 0},
    {anecdote : 'The only way to go fast, is to go well.', vote : 0} 
    
  ])
   
  const [highestVotes, setHighest] = useState({anecdote : "", vote : 0})

  const [selected, setSelected] = useState(0)
 // console.log(anecdotes[selected].anecdote)
 // console.log(anecdotes[selected].vote)

  return (
    <>
      <p>{anecdotes[selected].anecdote}</p>
      <VoteInformation votes={anecdotes[selected].vote} />

      <VoteButton anecdotes={anecdotes} 
      votes={anecdotes[selected].vote} 
      setAnecdotes={setAnecdotes} 
      selected={selected}
      highestVotes={highestVotes}
      setHighest={setHighest} />

      <Button setSelected={setSelected} anecdotes={anecdotes} />

      <BestAnecdote highestVotes={highestVotes}/>
    </>
  )
}
 
const Button = ({setSelected, anecdotes}) => {

  const handleClick = () => {

    let randomNumber = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomNumber)

  }

  return (
    <button onClick={handleClick}>
      Random anecdote
    </button>
  )

}

const VoteButton = ({anecdotes, votes, setAnecdotes, selected, highestVotes, setHighest}) => {

  const handleClick = () => {
    // Olisi varmaan ollu helpompikin ratkaisu tähän, mutta tein sen nyt näin.
    setAnecdotes(anecdotes.map(anecdote => {
      if (anecdotes[selected] === anecdote) {
        if (anecdote.vote + 1 > highestVotes.vote) {
          setHighest({...anecdote, vote : anecdote.vote + 1})
        }
        return {...anecdote, vote : anecdote.vote + 1}
      } else {
        return anecdote
      }
    }))

  }

  return (
    <button onClick={handleClick}>
      vote
    </button>
  )

}

const VoteInformation = ({votes}) => {

  return (
    <p>{votes}</p>
  )

}

const BestAnecdote = ({highestVotes}) => {

  console.log(highestVotes)

  return (
    <>
      <p>{highestVotes.anecdote} has {highestVotes.vote} votes</p>
    </>
  )

}


export default App