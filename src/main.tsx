import React from 'react'
import { createRoot } from 'react-dom/client'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'
// import reportWebVitals from './reportWebVitals'
import App from './App'
// import 'antd/dist/antd.less'
import '@/assets/less/index.less'

moment.locale('zh-cn')

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <ConfigProvider
      locale={zhCN}
      csp={{ nonce: 'YourNonceCode' }}
      getPopupContainer={(node: any) => {
        if (node) {
          return node.parentNode
        }
        return document.body
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
)

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )
// reportWebVitals()
