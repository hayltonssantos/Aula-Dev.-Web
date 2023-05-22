import { Link, useNavigate } from 'react-router-dom'
import styles from './SingUp.module.css'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context/user'
import Input from '../../components/Input/Input'

const SingUp = () => {

    const { user, loading, createUser, err }: any = useContext(UserContext)
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

    const handleCreateUser = async (email: string, password: string) => {
        await createUser(email, password)
        if (err) {
            navigate('/singup')
        }else{
            navigate('/dashboard')
        }
    }

    const wrong = () =>{ if (err) {
        return <p>Check your email, and type correctly</p>
        
    }}
    return (
        <>
            <div className={styles.container}>
                <div className={styles.form}>
                    <h1 className={styles.title}>FlashCard Challenge</h1>
                    <p className={styles.title}>Register
                        <p className={styles.title}>{wrong()}</p>
                    </p>
                    <Input type={'text'} onChange={setEmail} placeholder={'Email'} />
                    <Input type={'password'} onChange={setPassword} placeholder={'Password'} />
                    <div className={styles.buttons}>    
                        <button onClick={() => {handleCreateUser(email as any,password as any)}}>Register</button>
                        <Link to={'/login'}><button>Back</button></Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SingUp