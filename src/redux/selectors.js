import { createSelector } from 'reselect'
import { selectContacts } from './contactsSlice'
import { selectNameFilter } from './filtersSlice'

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    return contacts.items.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
  }
)
