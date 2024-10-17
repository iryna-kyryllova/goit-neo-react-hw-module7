import { createAsyncThunk } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'
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
    toast.success(`Contact ${response.name} successfully added!`)
    return response
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (data, thunkAPI) => {
  try {
    const response = await deleteContactApi(data)
    toast.success(`Contact ${response.name} successfully deleted!`)
    return response.id
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})
