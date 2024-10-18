import { createSlice } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'
import { fetchContacts, addContact, deleteContact } from './contactsOps'
import { selectNameFilter } from './filtersSlice'

const initialState = {
  items: [],
  loading: false,
  error: null
}

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.items = payload
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.items.push(payload)
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.items = state.items.filter((item) => item.id !== payload.id)
      })
      .addMatcher(
        (action) => action.type.endsWith('/pending'),
        (state) => {
          state.error = null
          state.loading = true
        }
      )
      .addMatcher(
        (action) => action.type.endsWith('/fulfilled'),
        (state) => {
          state.loading = false
        }
      )
      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (state, { payload }) => {
          state.loading = false
          state.error = payload
        }
      )
  }
})

export const selectContacts = (state) => state.contacts.items
export const selectContactsLoading = (state) => state.contacts.loading
export const selectContactsError = (state) => state.contacts.error

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    return contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))
  }
)

export default contactsSlice.reducer
