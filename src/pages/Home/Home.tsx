import { Carousel } from 'antd'
import React from 'react'

function Home() {
 
  return (
    <Carousel effect='fade' autoplay dotPosition='bottom'>
      <div>
        <h3>Teste</h3>
      </div>

      <div>
        <h3>Testezao</h3>
      </div>
    </Carousel>
  )
}

export default Home
