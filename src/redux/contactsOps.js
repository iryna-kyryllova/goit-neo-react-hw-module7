import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchContactsApi, addContactApi, deleteContactApi } from 'api/contactsApi'

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (data, thunkAPI) => {
  try {
    const response = await fetchContactsApi()
    return response
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const addContact = createAsyncThunk('contacts/addContact', async (data) => {
  const response = await addContactApi(data)
  return response
})

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id) => {
  const response = await deleteContactApi(id)
  return response
})
