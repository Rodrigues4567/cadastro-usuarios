import { useEffect, useRef, useState } from 'react'
import './App.css'
import Form from './components/form'
import Users from './components/users'
import api from './services/api'

function App() {

  const [usersInfo, setUsersInfo] = useState([])

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

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

  async function createUser() {
    await api.post('/cadastro', {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value
    })

    getUsers()
  }

  async function deleteUsers(id) {
    await api.delete(`/cadastro/${id}`)

    getUsers()
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
      <Form createUser={createUser} inputName={inputName} inputAge={inputAge} inputEmail={inputEmail} />
      <Users usersInfo={usersInfo} deleteUsers={deleteUsers} />
    </>
  )
}

export default App
