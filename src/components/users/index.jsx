import styles from './users.module.css'
import { FaRegTrashAlt } from "react-icons/fa";

function Users({ usersInfo, deleteUsers }) {
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
                                <button onClick={() => deleteUsers(user.id)} className={styles.deleteButton}><FaRegTrashAlt /></button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Users
