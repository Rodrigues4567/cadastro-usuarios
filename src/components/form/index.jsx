import styles from './form.module.css'

function Form({ createUser, inputName, inputAge, inputEmail }) {
    return (
        <>
            <div className={styles.container}>
                <form onSubmit={(e) => e.preventDefault()} className={styles.form}>
                    <h1>Cadastro de Usuários</h1>
                    
                    <div className={styles.inputs}>
                        <input ref={inputName} type="text" className={styles.input_text} placeholder='Digite seu nome' required />

                        <input ref={inputAge} type="number" className={styles.input_text} placeholder='Digite sua idade' required />

                        <input ref={inputEmail} type="email" className={styles.input_text} placeholder='Digite seu email' required />

                        <input onClick={createUser} className={styles.button} type="submit" value="Cadastrar" />
                    </div>
                </form>
            </div>
        </>
    )
}

export default Form
