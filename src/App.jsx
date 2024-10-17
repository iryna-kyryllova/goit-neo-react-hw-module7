import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Toaster } from 'react-hot-toast'
import { fetchContacts } from './redux/contactsOps'
import ContactForm from 'components/ContactForm/ContactForm'
import SearchBox from 'components/SearchBox/SearchBox'
import ContactList from 'components/ContactList/ContactList'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  return (
    <div className='container'>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
      <Toaster position='top-right' />
    </div>
  )
}

export default App
