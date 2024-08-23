import { useMutation, useQueryClient} from '@tanstack/react-query'
import { addAnecdote } from '../services/anecdotesService'
import { useContext } from 'react'
import NotificationContext from '../reducers/notificationContext'

const AnecdoteForm = () => {

  const [notification, notificationDispatch] = useContext(NotificationContext)
  const queryClient = useQueryClient()

  const newAnecdoteMutation = useMutation({
    mutationFn: addAnecdote,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['anecdotes']})
    }
  })

  const onCreate = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    console.log('new anecdote')
    newAnecdoteMutation.mutate({content})
    notificationDispatch({type: 'SHOW', payload: `Anecdote "${content}" has been created.`})
    setTimeout(() => notificationDispatch({type: 'HIDE', payload: ''}), 5000)
}

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
