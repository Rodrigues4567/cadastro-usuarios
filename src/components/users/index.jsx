import styles from './users.module.css'

function Users({ usersInfo }) {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.users_data}>
                    <ul>
                        {usersInfo.map((user) => (
                            <li key={user.id}>
                                <p><strong>Nome:</strong> {user.name}</p>
                                <p><strong>Idade:</strong> {user.age}</p>
                                <p><strong>Email:</strong> {user.email}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Users
