import { createSlice } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'
import { fetchContacts, addContact, deleteContact } from './contactsOps'
import { selectNameFilter } from './filtersSlice'

const initialState = {
  items: [],
  loading: false,
  error: null
}

const handlePending = (state) => {
  state.loading = true
}

const handleRejected = (state, action) => {
  state.loading = false
  state.error = action.payload
}

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.error = null
        state.loading = false
        state.items = action.payload
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.error = null
        state.loading = false
        state.items.push(action.payload)
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.error = null
        state.loading = false
        state.items = state.items.filter((item) => item.id !== action.payload)
      })
      .addCase(deleteContact.rejected, handleRejected)
  }
})

export const selectContacts = (state) => state.contacts

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    return contacts.items.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
  }
)

export default contactsSlice.reducer
