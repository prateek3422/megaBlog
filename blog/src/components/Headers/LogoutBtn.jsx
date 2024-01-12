import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../Appwrite/auth'
import {logout} from '../../feature/authSlice'

const LogoutBtn = () => {
    const dispatch = useDispatch()

    const logOutHandler =()=>{
        authService.logout().then(()=>{
            dispatch(logout())
        })
    }
    

  return (
    <div  className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full' onClick={logOutHandler}>LogoutBtn</div>
  )
}
export default LogoutBtn