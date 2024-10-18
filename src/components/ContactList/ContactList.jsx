import { useSelector, useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import {
  selectContactsLoading,
  selectContactsError,
  selectFilteredContacts
} from '../../redux/contactsSlice'
import { deleteContact } from '../../redux/contactsOps'
import Contact from '../Contact/Contact'
import Loader from '../Loader/Loader'
import styles from './ContactList.module.css'

const ContactList = () => {
  const dispatch = useDispatch()

  const items = useSelector(selectFilteredContacts)
  const loading = useSelector(selectContactsLoading)
  const error = useSelector(selectContactsError)

  const deleteContactHandler = (id) => {
    dispatch(deleteContact(id))
      .unwrap()
      .then((res) => toast.success(`Contact ${res.name} successfully deleted!`))
  }

  return (
    <div className={styles.section}>
      {loading && <Loader />}
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
