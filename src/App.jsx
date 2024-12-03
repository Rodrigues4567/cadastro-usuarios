import { useEffect, useState } from 'react'
import './App.css'
import Form from './components/form'
import Users from './components/users'
import api from './services/api'

function App() {

  const [usersInfo, setUsersInfo] = useState([])

  async function getUsers() {
    try {
      const responseAPI = await api.get('/cadastro')
      const res = responseAPI.data
      setUsersInfo(() => res)
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
      <Users usersInfo = {usersInfo} />
    </>
  )
}

export default App
