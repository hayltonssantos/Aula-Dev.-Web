import { Link, useNavigate } from 'react-router-dom'
import styles from './Login.module.css'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context/user'
import Input from '../../components/Input/Input'

const Login = () => {

    const { user, signIn, loading } = useContext(UserContext)
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

    const handleSingIn = (email: string, password: string) => {
        signIn(email, password)
    }

    return (
        <>
            {/* <h1 onClick={() => signIn("2019100133@aluno.unicarioca.edu.br", "2019100133")}>Login Haylton</h1>
            <Link to="/dashboard">Ir para o Dashboard</Link>  */}
            <div className={styles.container}>
                <div className={styles.form}>
                    <h1 className={styles.title}>FlashCard Challenge</h1>
                    <Input type={'text'} onChange={setEmail} placeholder={'Email'} />
                    <Input type={'password'} onChange={setPassword} placeholder={'Password'} />
                    <div className={styles.buttons}>    
                        <button 
                            onClick={() => {handleSingIn(email, password)}}>
                            Sing In
                        </button>
                        <button onClick={() => {<Link to={'/singup'}/>}}>Sing Up</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login