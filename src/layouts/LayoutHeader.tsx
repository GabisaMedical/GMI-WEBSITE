import { SearchOutlined } from '@ant-design/icons'
import { Button, Col, Input, Row } from 'antd'
import React from 'react'

import { EmpresaSvg } from '../assets'

function LayoutHeader() {
  return (
    <Row gutter={30} className='layout-header'>
      <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
        <img src="/img-logo.png" alt="Logo da GMI" />
      </Col>

      <Col xxl={10} xl={10} lg={10} md={24} sm={24} xs={24}>
        <Input addonAfter={<SearchOutlined />} />
      </Col>

      <Col xxl={6} xl={6} lg={6} md={24} sm={24} xs={24}>
        Portugês | Inglês | Espanhol
      </Col>

      <section className='pt-4 w-100'>
        <Button className='layout-header__button'>
          <EmpresaSvg />
          EMPRESA
        </Button>
      </section>
    </Row>
  )
}

export default LayoutHeader
