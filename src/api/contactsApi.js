import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://671128fd4eca2acdb5f3e624.mockapi.io'
})

export const fetchContactsApi = async () => {
  const { data } = await instance.get('/contacts')
  return data
}

export const addContactApi = async (data) => {
  const response = await instance.post('/contacts', data)
  return response
}

export const deleteContactApi = async (id) => {
  const response = await instance.delete(`/contacts/${id}`)
  return response
}
