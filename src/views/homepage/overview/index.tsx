import { FC, useState, useLayoutEffect } from 'react'
import { Button, Descriptions, Carousel } from 'antd'
// import './overview.module.less'

const Overview: FC = () => {
  const [count, setCount] = useState(0)
  const onHandleBtn = () => {
    console.log('count1', new Date().getTime())
    // setTimeout(() => {
    setCount(count + 1)
    // }, 2000)
  }
  useLayoutEffect(() => {
    console.log('count2', new Date().getTime())
  }, [count])
  return (
    <div>
      <Descriptions size='small' column={2}>
        <Descriptions.Item label='创建人'>张三</Descriptions.Item>
        <Descriptions.Item label='联系方式'>
          <a>421421</a>
        </Descriptions.Item>
        <Descriptions.Item label='创建时间'>2017-01-10</Descriptions.Item>
        <Descriptions.Item label='更新时间'>2017-10-10</Descriptions.Item>
        <Descriptions.Item label='备注'>中国浙江省杭州市西湖区古翠路</Descriptions.Item>
      </Descriptions>
      <Carousel>
        <div>
          <h3 className='carousel'>1</h3>
        </div>
        <div>
          <h3 className='carousel'>2</h3>
        </div>
        <div>
          <h3 className='carousel'>3</h3>
        </div>
        <div>
          <h3 className='carousel'>4</h3>
        </div>
      </Carousel>
      <h1>{count}</h1>
      <h2>{new Date().getTime()}</h2>
      <Button onClick={onHandleBtn}>My Button</Button>
    </div>
  )
}

export default Overview
