import { Link, useNavigate } from 'react-router-dom'
import styles from './SingUp.module.css'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context/user'
import Input from '../../components/Input/Input'

const SingUp = () => {

    const { user, signIn, loading, createUser } = useContext(UserContext)
    const navigate = useNavigate();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    useEffect(() => {
        if (user) navigate("/dashboard")
    }, [user])

    if (loading) {
        return (
            <div className={styles.container}>
                <div className={styles.form}>
                    <h1 className={styles.title}>FlashCard Challenge</h1>
                    <h2 className={styles.loading}>Loading...</h2>
                </div>
            </div>
        )
    }

    const handleCreateUser = (email: string, password: string) => {
        createUser(email, password)
    }

    return (
        <>
            {/* <h1 onClick={() => signIn("2019100133@aluno.unicarioca.edu.br", "2019100133")}>Login Haylton</h1>
            <Link to="/dashboard">Ir para o Dashboard</Link>  */}
            <div className={styles.container}>
                <div className={styles.form}>
                    <h2 className={styles.title}>FlashCard Challenge</h2>
                    <p className={styles.title}>Sing in</p>
                    <Input type={'text'} onChange={setEmail} placeholder={'Email'} />
                    <Input type={'password'} onChange={setPassword} placeholder={'Password'} />
                    <div className={styles.buttons}>    
                        <button onClick={() => {handleCreateUser(email,password)}}>Sing Up</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SingUp