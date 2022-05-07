import { FC, useEffect, useState } from 'react'
import { matchRoutes, useLocation, Link } from 'react-router-dom'
import { Breadcrumb } from 'antd'
import { routes } from '@/router/index'

type Props = {
  // msg: string
}

const { Item } = Breadcrumb

interface Crumb {
  path: string | undefined
  title: string
}

const Crumb: FC<Props> = () => {
  const location = useLocation()
  const [crumbs, setCrumbs] = useState<Crumb[]>([])

  const renderCrumb = () => {
    const matchings = matchRoutes(routes, location)
    let crumbsArr =
      matchings?.slice(1).map((crumb) => {
        return {
          path: crumb?.route.path,
          title: crumb?.route?.meta.title,
        }
      }) || []
    console.log('crumbsArr', crumbsArr)

    setCrumbs(crumbsArr)
  }

  useEffect(() => {
    renderCrumb()
  }, [location.pathname])

  return (
    <Breadcrumb separator='>'>
      {crumbs.map((crumb) => {
        return (
          <Item key={crumb.path}>
            <Link to={crumb.path}>{crumb.title}</Link>
          </Item>
        )
      })}
    </Breadcrumb>
  )
}

export default Crumb
