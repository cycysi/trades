import React from 'react'
import { Route, Switch } from 'react-router-dom'
import 'twin.macro'

import FAQ from 'pages/faq'
import Home from 'pages/home'

function App() {
  return (
    <div tw="min-h-screen bg-light-500 flex flex-col">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/faq" component={FAQ} />
      </Switch>
    </div>
  )
}

export default App
