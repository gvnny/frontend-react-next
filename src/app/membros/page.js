import '@/components/cards/CardUser'
import { CardUser } from '@/components/cards/CardUser'

const getMembers = async () => {
    const response = await fetch('http://localhost:3300/user/list', { cache: 'no-store' })
    return await response.json()
}

const Membros = async () => {
    const users = await getMembers()

    return (
        <div id='container'>
            {
                users.map((user) => {
                    return (
                        <CardUser key={user.id} user={user}/>
                    )
                })
            }
        </div>
    )
}

export default Membros