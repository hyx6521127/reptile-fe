import React from "react"
import { HashRouter as Router, Route, Switch } from "react-router-dom"
import Layout from "Layout"

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Layout} />
      </Switch>
    </Router>
  )
}

export default Routes
