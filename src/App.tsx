import { App as AntdApp,ConfigProvider, theme } from 'antd'
import pt_BR from 'antd/lib/locale/pt_BR'
import React from 'react'

import { RouterIndex } from './router/RouterIndex'

function App() {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm,
        token: {
          colorPrimary: 'var(--primary-color)',
          colorBgLayout: 'var(--background-color)',
          colorText: 'var(--text-color)',
          colorTextPlaceholder: 'var(--text-color-opaque)',
          fontFamily: 'Poppins, sans-serif'
        }
      }}
      locale={pt_BR}
    >
      <AntdApp>
        <RouterIndex />
      </AntdApp>
    </ConfigProvider>
  )
}

export default App
