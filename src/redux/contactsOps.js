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

export const addContact = createAsyncThunk('contacts/addContact', async (data, thunkAPI) => {
  try {
    const response = await addContactApi(data)
    return response
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (data, thunkAPI) => {
  try {
    const response = await deleteContactApi(data)
    return response.id
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})
