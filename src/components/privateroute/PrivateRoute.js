import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStatus } from '../../hooks/useAuthStatus'
//import './PrivateRoute.scss'
import Spinner from '../spinner/Spinner'

const PrivateRoute = () => {
  const { loggedIn, checkingStatus } = useAuthStatus()

  if (checkingStatus) {
    return <Spinner />
  }

  return loggedIn ? <Outlet /> : <Navigate to="/sign-in" />
}

export default PrivateRoute
