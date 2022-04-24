import React, { Suspense } from 'react'
import { Spin } from 'antd'

type Props = {
  Comp: React.ComponentType<any>;
}

const SuspenseCom = (props: Props) => {
  const { Comp } = props
  return (
    <Suspense fallback={<div><Spin /></div>}><Comp/></Suspense>
  )
}
export default SuspenseCom