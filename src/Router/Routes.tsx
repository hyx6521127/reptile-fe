import React, { Fragment } from "react"
import { Route } from 'react-router-dom'
import ReptileTable from '../page/ReptileTable'
import ReptileCircle from '../page/ReptileCircle'
import ReptileRecommend from '../page/ReptileRecommend';

const Routes = () => {
  return (
    <Fragment>
      <Route path="/table" component={ReptileTable} />
      <Route path="/circle" component={ReptileCircle} />
      <Route path="/recommend" component={ReptileRecommend} />
    </Fragment>
  )
}

export default Routes
