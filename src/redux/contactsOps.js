import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchContactsApi, addContactApi, deleteContactApi } from 'api/contactsApi'

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await fetchContactsApi()
    return response
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const addContact = createAsyncThunk('contacts/addContact', async (contact, thunkAPI) => {
  try {
    const response = await addContactApi(contact)
    return response
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, thunkAPI) => {
  try {
    const response = await deleteContactApi(id)
    return response
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})
