import { votesUpdate } from "../reducers/anecdoteReducer"
import { useSelector, useDispatch } from "react-redux"
import { manageNotification } from "../reducers/notificationReducer"

const AnecdoteList = () => {
    const anecdotes = useSelector(state => {
      if(state.filter === '') {
        return state.anecdotes
      } else {
        return state.anecdotes.filter(anec => anec.content.includes(state.filter))
      }
    }).toSorted((a,b) => b.votes - a.votes)
    
    const dispatch = useDispatch()
    
    const vote = (votedAnecdote) => {
        dispatch(votesUpdate(votedAnecdote))
        const anecdote = anecdotes.find(anec => anec.id === votedAnecdote.id).content
        const message = `You voted "${anecdote}"`
        dispatch(manageNotification(message, 10))      
      }

    return(
        <div>
             {anecdotes.map(anecdote =>
            <div key={anecdote.id}>
              <div>
                {anecdote.content}
              </div>
              <div>
                has {anecdote.votes}
                <button onClick={() => vote(anecdote)}>vote</button>
              </div>
            </div>
          )}
        </div> 
    )
}

export default AnecdoteList