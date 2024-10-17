import { createSlice } from '@reduxjs/toolkit'
import { fetchContacts, addContact } from './contactsOps'

const initialState = {
  items: [],
  loading: false,
  error: null
}

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    deleteContact: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.error = null
        state.loading = true
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false
        state.items = action.payload
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(addContact.pending, (state) => {
        state.error = null
        state.loading = true
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false
        state.items.push(action.payload)
      })
      .addCase(addContact.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  }
})

export const selectContacts = (state) => state.contacts

export const { deleteContact } = contactsSlice.actions

export default contactsSlice.reducer
