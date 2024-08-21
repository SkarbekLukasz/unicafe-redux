import { useDispatch } from "react-redux"
import { anecdotesCreation, createAnec } from "../reducers/anecdoteReducer"
import {setNotification, removeNotification} from '../reducers/notificationReducer'
import anecdoteService from "../services/anecdoteService"

const AnecdoteForm = () => {
    const dispatch = useDispatch()
    
    const create = async (event) => {
        event.preventDefault()
        const content = event.target.anec.value
        event.target.anec.value = ''
        dispatch(anecdotesCreation(content))
        const message = `You created \"${content}\"`
        dispatch(setNotification(message))
        setTimeout(() => dispatch(removeNotification()), 5000)
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