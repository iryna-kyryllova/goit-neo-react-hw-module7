import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectFilteredContacts } from '../../redux/selectors'
import { deleteContact, selectContacts } from '../../redux/contactsSlice'
import { fetchContacts } from '../../redux/contactsOps'
import Contact from '../Contact/Contact'
import styles from './ContactList.module.css'

const ContactList = () => {
  const dispatch = useDispatch()
  const items = useSelector(selectFilteredContacts)
  const { loading, error } = useSelector(selectContacts)

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  const deleteContactHandler = (id) => {
    dispatch(deleteContact(id))
  }

  return (
    <ul className={styles.contacts}>
      {loading && <div>Loading...</div>}
      {error && <div>Oops... {error}</div>}
      {items.length > 0 &&
        items.map((contact) => (
          <Contact key={contact.id} data={contact} deleteContact={deleteContactHandler} />
        ))}
      {items.length === 0 && !loading && !error && <div>No contacts.</div>}
    </ul>
  )
}

export default ContactList
