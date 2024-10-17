import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://671128fd4eca2acdb5f3e624.mockapi.io'
})

export const fetchContactsApi = async () => {
  const { data } = await instance.get('/contacts')
  return data
}

export const addContactApi = async (newContact) => {
  const { data } = await instance.post('/contacts', newContact)
  return data
}

export const deleteContactApi = async (id) => {
  const { data } = await instance.delete(`/contacts/${id}`)
  return data
}
