import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import { useNavigate } from "react-router-dom"
const AdminLayout = () => {
  const user = JSON.parse(localStorage.getItem('user') as string)
  const navigate = useNavigate()
  useEffect(() => {
    if (user.user.role !== 'admin') {
      return navigate('/')
    }
  },[navigate])
  return (

    <div><Outlet/></div>
  )
}

export default AdminLayout