import { useSelector, useDispatch } from 'react-redux'
import { selectFilteredContacts } from '../../redux/selectors'
import { deleteContact, selectContacts } from '../../redux/contactsSlice'
import Contact from '../Contact/Contact'
import styles from './ContactList.module.css'

const ContactList = () => {
  const dispatch = useDispatch()
  const items = useSelector(selectFilteredContacts)
  const { loading, error } = useSelector(selectContacts)

  const deleteContactHandler = (id) => {
    dispatch(deleteContact(id))
  }

  return (
    <div className={styles.section}>
      {loading && <div>Loading...</div>}
      {error && <div>Oops... {error}</div>}
      {items.length > 0 && (
        <ul className={styles.list}>
          {items.map((contact) => (
            <Contact key={contact.id} data={contact} deleteContact={deleteContactHandler} />
          ))}
        </ul>
      )}
      {items.length === 0 && !loading && !error && <div>No contacts.</div>}
    </div>
  )
}

export default ContactList
