import { FC } from 'react'
import { useRoutes } from 'react-router-dom'
import { Layout } from 'antd'
import { allRoutes } from '@/router/config'
import RouterAuthorized from '@/router/Authorized'

const App: FC = () => {
  const Element = useRoutes(allRoutes)
  return (
    <Layout className={'layout-container'}>
      <RouterAuthorized>{Element}</RouterAuthorized>
    </Layout>
  )
}

export default App
