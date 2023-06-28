import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import LayoutBase from '../layouts/BaseLayout'
import routes from './routes'


function RouterIndex () {
  
  return (
    <Router>
      <Routes>
        {routes.map((route) => (
          <Route 
            key={route.name} 
            path={route.path} 
            element={
              <LayoutBase>
                <route.element />
              </LayoutBase>
            }
          />
        ))}
      </Routes>
    </Router>
  )
}

export {
  RouterIndex
}
