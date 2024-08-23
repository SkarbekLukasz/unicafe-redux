import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import ErrorPage from './components/ErrorPage'
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query'
import { getAnecdotes, updateVotes } from './services/anecdotesService'
import NotificationContextProvider from './reducers/notificationContext'
import { useContext } from 'react'
import NotificationContext from './reducers/notificationContext'

const App = () => {

  const queryClient = useQueryClient()

  const [notification, notificationDispatch] = useContext(NotificationContext)

  const updateVoteMutation = useMutation({
    mutationFn: updateVotes,
    onSuccess: () => queryClient.invalidateQueries({queryKey: ['anecdotes']})
  })

  const result = useQuery({
    queryKey: ["anecdotes"],
    queryFn: getAnecdotes
  })
  console.log(JSON.parse(JSON.stringify(result)))

  if(result.isLoading) {
    return <div>loading data...</div>
  }

  if(result.isError) {
    return <ErrorPage />
  }

  const handleVote = async (anecdote) => {
    console.log('vote')
    updateVoteMutation.mutate(anecdote)
    notificationDispatch({type: 'SHOW', payload: `Anecdote "${anecdote.content}" has been voted on.`})
    setTimeout(() => notificationDispatch({type: 'HIDE', payload: ''}), 5000)
  }

  const anecdotes = result.data

  return (
      <div>
      <h3>Anecdote app</h3>
    
      <Notification />
      <AnecdoteForm />
    
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
