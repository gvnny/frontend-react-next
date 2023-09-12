import './Membros.css';

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
                        <div key={user.id} className="card-user">
                            <img src={user.avatar} alt={user.name} width="70px" height="70px" />
                            <div>
                                <h4>{user.name}</h4>
                                <p>{user.email}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Membros