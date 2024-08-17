import { useDispatch } from "react-redux"
import { createAnecdoteAction } from "../reducers/anecdoteReducer"

const AnecdoteForm = () => {
    const dispatch = useDispatch()
    
    const create = (event) => {
        event.preventDefault()
        const content = event.target.anec.value
        event.target.anec.value = ''
        dispatch(createAnecdoteAction(content))
      }

    return(
        <div>
            <h2>create new</h2>
            <form onSubmit={create}>
                <div><input name='anec'/></div>
            <button type='submit'>create</button>
            </form>
        </div>
    )
}

export default AnecdoteForm