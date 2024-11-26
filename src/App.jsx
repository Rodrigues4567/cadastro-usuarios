import { useEffect } from 'react'
import './App.css'
import Form from './components/form'
import Users from './components/users'
import api from './services/api'

function App() {

  async function getUsers() {
    try {
      const responseAPI = await api.get('/cadastro')
      const res = responseAPI.data
      console.log(res)
    }
    catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
      <Form />
      <Users />
    </>
  )
}

export default App
