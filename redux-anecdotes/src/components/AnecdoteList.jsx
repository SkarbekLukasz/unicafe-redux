import { addVoteAction } from "../reducers/anecdoteReducer"
import { useSelector, useDispatch } from "react-redux"

const AnecdoteList = () => {
    const anecdotes = useSelector(state => state).toSorted((a,b) => b.votes - a.votes)
    const dispatch = useDispatch()
    
    const vote = (id) => {
        console.log('vote', id)
        dispatch(addVoteAction(id))
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
                <button onClick={() => vote(anecdote.id)}>vote</button>
              </div>
            </div>
          )}
        </div> 
    )
}

export default AnecdoteList