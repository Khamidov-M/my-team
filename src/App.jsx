import React, { useState } from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import './App.css'
import Form from './components/form/Form'
import {v4 as uuidv4} from 'uuid'

const App = () => {
  const [show, setShow] = useState(false)
  const deleteU = (id) => {
    setUsers((prev) => {
      return prev.filter((user) => {
        return user.id !== id
      })
    })
  }

  const hide = (e) => {
    if (e.target.className === 'owerlay') setShow(false)
    if (e.key === 'Escape') setShow(false)
  }

  const addUser = (user) => {
    setUsers((prev) => {
      return [...prev, user]
    })
    setShow(false)
  }

  const [users, setUsers] = useState([])
  return (
    <div onClick={hide} onKeyDown={hide}>
      <Header usersLength={users.length} />
      <main className='main'>
        <div className="accauntery">
          {users.length === 0 && <h1 className='back'>NO USERS</h1>}
          {
            users.map((user) => {
              return (
                <div className="card" key={user.id}>
                  <img src={user.Image} alt={user.name} height={150} width={150} className='img' />
                  <div className="text">
                    <h3 className='name'>{user.name} {user.surname}, {user.age} Age</h3>
                    <p>From: {user.from}</p>
                    <p>Job: {user.job}</p>
                    <p>Gender: {user.gender}</p>
                    <button onClick={() => deleteU(user.id = uuidv4)} className='delete'>DELETE</button>
                  </div>
                </div>
              )
            })
          }
        </div>
      </main>
      {show && <Form addUser={addUser} hide={hide}/>}
      <button onClick={() => setShow(true)} className="modul_btn">Create User</button>
      <Footer />
    </div>
  )
}

export default App