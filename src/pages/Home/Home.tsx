import { Carousel } from 'antd'
import React from 'react'

import { bannerHome } from '../../assets'

function Home() {
 
  return (
    <Carousel className='home' effect='fade' autoplay dotPosition='bottom'>
      <div>
        <img src={bannerHome} className='home__banner' alt='Banner_Principal_GMI' />
      </div>

      <div>
        <h3>Testezao</h3>
      </div>
    </Carousel>
  )
}

export default Home
