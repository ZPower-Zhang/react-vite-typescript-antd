import * as React from 'react'
import { Outlet } from 'react-router-dom'

// type Props = {
//   message: string
// }

const UserLayout: React.FC<any> = () => {
  return (
    <div className='user-layout-wrapper'>
      <Outlet />
    </div>
  )
}

export default UserLayout
