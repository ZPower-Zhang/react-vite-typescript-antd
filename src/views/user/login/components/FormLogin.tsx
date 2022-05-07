import React, { FC, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Select, Input, Button, FormInstance } from 'antd'
import { getRedirectUrl } from '@/utils/index'

type Props = {
  curKey: string
}

type Values = {
  active: string
  username: string
  password: string
}

type Options = {
  id: string
  name: string
}[]

const FormLogin: FC<Props> = ({ curKey }) => {
  const navigate = useNavigate()
  const [form] = Form.useForm()
  const formRef = React.createRef<FormInstance>()
  const [optionList] = useState<Options>([
    {
      id: '12',
      name: 'dsd',
    },
  ])
  const [initialValues, setInitialValues] = useState({
    active: undefined,
    username: '',
    password: '',
  })
  const redirectUrl = getRedirectUrl()

  const onFinish = (values: Values) => {
    const userInfo = {
      name: values.username,
    }
    window.localStorage.setItem('userInfo', JSON.stringify(userInfo))
    navigate(redirectUrl)
  }
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  // const handleKeyUp: React.KeyboardEventHandler<HTMLInputElement> = (evt) => {
  //   console.info('evt', evt)
  //   console.info('formRef value', formRef?.current)
  // }

  useEffect(() => {
    setInitialValues({
      active: undefined,
      username: '',
      password: '',
    })
  }, [curKey])

  return (
    <Form
      form={form}
      ref={formRef}
      name='normal_login'
      className='login-form'
      initialValues={initialValues}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      scrollToFirstError>
      <Form.Item name='active' rules={[{ required: true, message: '请选择组织!' }]}>
        <Select placeholder='请选择组织'>
          {optionList &&
            optionList.map((ele) => {
              return (
                <Select.Option key={ele.id} value={ele.id}>
                  {ele.name}
                </Select.Option>
              )
            })}
        </Select>
      </Form.Item>
      <Form.Item name='username' rules={[{ required: true, message: '请输入用户名!' }]}>
        <Input placeholder='请输入用户名' type='text' />
      </Form.Item>
      <Form.Item name='password' rules={[{ required: true, message: '请输入密码!' }]}>
        <Input type='password' placeholder='请输入密码' />
      </Form.Item>

      <Form.Item>
        <Button type='primary' htmlType='submit' className='login-form-button'>
          登 录
        </Button>
      </Form.Item>
    </Form>
  )
}

export default FormLogin
