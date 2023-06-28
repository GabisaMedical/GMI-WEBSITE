import { App as AntdApp,ConfigProvider } from 'antd'
import React from 'react'

function App() {
  return (
    <ConfigProvider>
      <AntdApp />
    </ConfigProvider>
  )
}

export default App
