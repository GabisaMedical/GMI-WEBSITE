import { Layout } from 'antd'
import React from 'react'

import LayoutHeader from './LayoutHeader'

interface IBaseLayout {
  children: React.ReactNode
}

function LayoutBase({ children }: IBaseLayout) {
  return (
    <Layout>
      <LayoutHeader />

      {children}
 
    </Layout>
  )
}

export default LayoutBase
