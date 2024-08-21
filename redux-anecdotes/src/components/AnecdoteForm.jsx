import { useDispatch } from "react-redux"
import { anecdotesCreation } from "../reducers/anecdoteReducer"
import { manageNotification} from '../reducers/notificationReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()
    
    const create = async (event) => {
        event.preventDefault()
        const content = event.target.anec.value
        event.target.anec.value = ''
        dispatch(anecdotesCreation(content))
        const message = `You created "${content}"`
        dispatch(manageNotification(message, 10))
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