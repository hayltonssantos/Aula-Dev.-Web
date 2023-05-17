import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { UserContext } from "../context/user"

const ProtectedRoutes = () => {

    const { user }: any = useContext(UserContext)

    return user ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoutes