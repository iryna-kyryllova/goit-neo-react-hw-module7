import { FaUser } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa6'
import styles from './Contact.module.css'

const Contact = ({ data, deleteContact }) => {
  return (
    <li className={styles.contact}>
      <ul className={styles.info}>
        <li className={styles.infoItem}>
          <FaUser />
          {data.name}
        </li>
        <li className={styles.infoItem}>
          <FaPhone />
          {data.number}
        </li>
      </ul>
      <button type='button' onClick={() => deleteContact(data.id)}>
        Delete
      </button>
    </li>
  )
}

export default Contact
