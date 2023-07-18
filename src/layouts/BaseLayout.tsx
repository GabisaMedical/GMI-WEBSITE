import { Layout } from 'antd'
import React from 'react'

import FooterLayout from './FooterLayout'
import LayoutHeader from './HeaderLayout'

interface IBaseLayout {
  children: React.ReactNode
}

function BaseLayout({ children }: IBaseLayout) {
  return (
    <Layout className='base-layout'>
      <LayoutHeader />

      <section className='base-layout__main-content'>

        <main className='base-layout__content'>
          {children}
        </main>
      </section>

      <FooterLayout />
 
    </Layout>
  )
}

export default BaseLayout
