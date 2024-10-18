import { useSelector, useDispatch } from 'react-redux'
import { selectNameFilter, changeFilter } from '../../redux/filtersSlice'
import { selectContacts } from '../../redux/contactsSlice'
import styles from './SearchBox.module.css'

const SearchBox = () => {
  const dispatch = useDispatch()

  const searchValue = useSelector(selectNameFilter)
  const items = useSelector(selectContacts)

  const handleOnChange = ({ target }) => {
    dispatch(changeFilter(target.value))
  }

  return (
    items.length > 0 && (
      <label className={styles.label}>
        Find contacts by name
        <input type='text' value={searchValue} className={styles.input} onChange={handleOnChange} />
      </label>
    )
  )
}

export default SearchBox
