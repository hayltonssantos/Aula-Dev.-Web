import { Link, useNavigate } from 'react-router-dom'
import styles from './Login.module.css'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context/user'
import Input from '../../components/Input/Input'
import { GameContext } from '../../context/game'

const Login = () => {

    const { user, signIn, loading, err }: any = useContext(UserContext)
    const { getPoint}: any = useContext(GameContext)
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

    const handleSingIn = async (email: string, password: string) => {
        signIn(email, password)
        await getPoint()
    }

   const wrong = () =>{ if (err) {
        return <p>Wrong email or password</p>
        
    }}
    

    return (
        <>
            {/* <h1 onClick={() => signIn("2019100133@aluno.unicarioca.edu.br", "2019100133")}>Login Haylton</h1>
            <Link to="/dashboard">Ir para o Dashboard</Link>  */}
            <div className={styles.container}>
                <div className={styles.form}>
                    <h1 className={styles.title}>FlashCard Challenge</h1>
                    <p className={styles.title}>Login
                        <p className={styles.title}>{wrong()}</p>
                    </p>
                    
                    <Input type={'text'} onChange={setEmail} placeholder={'Email'} />
                    <Input type={'password'} onChange={setPassword} placeholder={'Password'} />
                    <div className={styles.buttons}>    
                        <button 
                            onClick={() => {handleSingIn(email as any, password as any)}}>
                            Login
                        </button>
                        <Link to={'/singup'}><button>Register</button></Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login