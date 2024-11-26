import styles from './form.module.css'

function Form() {
    return (
        <>
            <div className={styles.container}>
                <form className={styles.form}>
                    <h1>Cadastro de Usuários</h1>
                    
                    <div className={styles.inputs}>
                        <input type="text" className={styles.input_text} placeholder='Digite seu nome' />

                        <input type="number" className={styles.input_text} placeholder='Digite sua idade' />

                        <input type="email" className={styles.input_text} placeholder='Digite seu email' />

                        <input className={styles.button} type="submit" value="Cadastrar" />
                    </div>
                </form>
            </div>
        </>
    )
}

export default Form
