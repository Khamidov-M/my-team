import React, { useState } from 'react'
import './Form.css'

const Form = ({ addUser },) => {
    const [user, setUser] = useState([
        {
            id: '',
            Image: '',
            name: '',
            surname: '',
            age: 16,
            from: '',
            job: '',
            gender: ''
        }
    ])

    const HanSub = (e) => {
        e.preventDefault()
        addUser(user);
    }

    return (
        <div className='owerlay'>
            <div className="modul">
                <form className="form" onSubmit={HanSub}>
                    <h3 className='counter'>Create User</h3><br />
                    <div className="logo_photo">
                        <label htmlFor="">Enter pfp</label><br />
                        <input className='input' type="url"/>
                    </div>
                    <div className='suar'>
                        <div>
                            <label htmlFor="">Enter Name</label><br />
                            <input onChange={(e) => {
                                setUser((prev) => {
                                    return { ...prev, name: e.target.value }
                                })
                            }} required className='input' type="text" placeholder='Name' /><br />
                            <label htmlFor="">Enter Surname</label><br />
                            <input onChange={(e) => {
                                setUser((prev) => {
                                    return { ...prev, surname: e.target.value }
                                })
                            }} required className='input' type="text" placeholder='Surname' /><br />
                            <label htmlFor="">Enter Age</label><br />
                            <input onChange={(e) => {
                                setUser((prev) => {
                                    return { ...prev, age: e.target.value }
                                })
                            }} required className='input' type="number" placeholder='Age' /><br />
                        </div>
                        <div>
                            <label htmlFor="">Enter Country</label><br />
                            <input onChange={(e) => {
                                setUser((prev) => {
                                    return { ...prev, from: e.target.value }
                                })
                            }} required className='input' type="text" placeholder='Country' /><br />
                            <label htmlFor="">Enter Job</label><br />
                            <input onChange={(e) => {
                                setUser((prev) => {
                                    return { ...prev, job: e.target.value }
                                })
                            }} required className='input' type="text" placeholder='Job' /><br />
                            <label htmlFor="">Enter Gender</label><br />
                            <select onChange={(e) => {
                                setUser((prev) => {
                                    return { ...prev, gender: e.target.value }
                                })
                            }} required name="" id="" className='input'>
                                <option value="" disabled>Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select><br />
                        </div>
                    </div><br />
                    <button type='#' className='sub' >Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Form

// accept='image/gif, image/jpeg, image/png'