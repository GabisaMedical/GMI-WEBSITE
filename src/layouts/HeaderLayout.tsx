import { SearchOutlined } from '@ant-design/icons'
import { Button, Col, Divider, Input, Row, Typography } from 'antd'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { ContatoSvg, DiferenciaisSvg, EmpresaSvg, NovidadesSvg, ProdutosSvg } from '../assets'

interface IHeaderNav {
  svg: React.ReactNode
  title: string
}

function LayoutHeader() {
  const { t, i18n: { changeLanguage, language } } = useTranslation()
  const [currentLanguage, setCurrentLanguage] = useState(language)

  const handleChangeLanguage = (newLanguage: string) => {
    setCurrentLanguage(newLanguage)
    changeLanguage(newLanguage)
  }

  const headerNav: IHeaderNav[] = [
    {
      svg: <EmpresaSvg />,
      title: t('menu.company')
    },
    {
      svg: <ProdutosSvg />,
      title: t('menu.products')
    },
    {
      svg: <DiferenciaisSvg />,
      title: t('menu.differentials')
    },
    {
      svg: <ContatoSvg />,
      title: t('menu.contact')
    }
  ]

  return (
    <Row gutter={30} className='layout-header'>
      <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
        <img src="/img-logo.png" alt="Logo da GMI" />
      </Col>

      <Col xxl={10} xl={10} lg={10} md={24} sm={24} xs={24}>
        <Input 
          placeholder='O que deseja procurar?' 
          addonAfter={<SearchOutlined />} 
        />
      </Col>

      <Col xxl={6} xl={6} lg={6} md={24} sm={24} xs={24}>
        <Button type='link' onClick={() => handleChangeLanguage('pt')}>
          {t('languages.portuguese')}
        </Button>
        <Button type='link' onClick={() => handleChangeLanguage('en')}>
          {t('languages.english')}
        </Button>
        <Button type='link' onClick={() => handleChangeLanguage('es')}>
          {t('languages.spanish')}
        </Button>
      </Col>

      <Col span={24}>
        <Row justify='space-between' className='pt-4 w-100 h-100'>
          {headerNav.map((item, index) => (
            <Col
              className='flex flex-space-between'
              key={item.title}
              xl={6}
              lg={6}
              md={12}
              xs={24}
            >
              <Divider className='h-75 layout-header__divider' type='vertical' />
              <div className='flex flex-column flex-align-center w-100'>
                <Button className='layout-header__button w-100'>
                  {item.svg}
                </Button>
                <Typography.Paragraph className='capitalize'>
                  {item.title}
                </Typography.Paragraph>
              </div>
              {index === 3 &&
                <Divider className='h-75 layout-header__divider' type='vertical' />
              }
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  )
}

export default LayoutHeader
