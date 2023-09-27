'use client'

import { CardUser } from '@/components/cards/CardUser'
import { useEffect, useState } from 'react'
import Modal from '@/components/utils/Modal'

const listMembers =  () => {

    const [users, setUsers] = useState([])
    const [modalSingInIsOpen, setModalSingInIsOpen] = useState(false)
    
    useEffect (() => {
        const getMembers = async () => {
            const response = await fetch('http://localhost:3300/user/list', { cache: 'no-store' })
            const data =  await response.json()
            setUsers(data)
        }
        getMembers()
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault()

        const newUser = {
            name: event.target.name.value,
            email: event.target.email.value,
            pass: event.target.pass.value,
            avatar: event.target.avatar.value,
        }

        const response = await fetch('http://localhost:3300/user', {
            cache: 'no-store',
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser),
        }
        )
        if (response.ok) {
            const result = await response.json()
            if (result?.success) {
                setUsers([...users, result.user])
            }
        }
    }

  return (
    <>  
        <h1>Membros</h1>
        <button style={{margin: '0 0 15px 0'}} onClick={() => setModalSingInIsOpen(true)}>Cadastrar</button>
        {
            users.map((user) => {
                return (
                    <CardUser key={user.id} user={user}/>
                )
            })
        }
        <Modal Isopen={modalSingInIsOpen} changeOpen={setModalSingInIsOpen}>
            <h1>Cadastre-se</h1>
            <form onSubmit={handleSubmit}>
                Nome: <input type="text" name="name"/> <br/>
                Email: <input type="text" name="email"/> <br/>
                Pass: <input type="text" name="pass"/> <br/>
                Avatar: <input type="text" name="avatar"/> <br/>
                <br/>
                <input type="submit" value="Cadastrar"/>
            </form>
        </Modal>
    </>
  )
}

export default listMembers