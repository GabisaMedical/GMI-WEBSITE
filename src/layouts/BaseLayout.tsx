import { Layout } from 'antd'
import React from 'react'

import FooterLayout from './FooterLayout'
import LayoutHeader from './HeaderLayout'

interface IBaseLayout {
  children: React.ReactNode
}

function BaseLayout({ children }: IBaseLayout) {
  return (
    <Layout>
      <LayoutHeader />

      {children}

      <FooterLayout />
 
    </Layout>
  )
}

export default BaseLayout
