import React, { SFC, useEffect, useState } from "react"
import { Row, Col } from "antd"
import ReactEcharts from "echarts-for-react"
import getOptions from './const/getOptions'
import { getYearStatistics, getSaleStatistics } from "./api"

import "./index.scss"

type ReptileCircleProp = {}
type IStatisticsData = {
  name: string
  value: number
}

const ReptileCircle: SFC<ReptileCircleProp> = (props) => {
  let yearRef: any
  let cycleRef: any

  const [year, setYear] = useState([])
  const [sale, setSale] = useState([])

  useEffect(() => {
    Promise.all([getYearStatistics(), getSaleStatistics()]).then((data) => {
      const yearData = data[0]
      const saleData = data[1].data
      const filterYear = yearData.data.filter(
        (item: IStatisticsData) => item.name
      )

      setYear(filterYear)
      setSale(saleData)
  
    })  
  }, [])

  useEffect(() => {
    yearRef.getEchartsInstance().setOption(getOptions('交易房屋年代比例', year))
    cycleRef.getEchartsInstance().setOption(getOptions('交易周期比例', sale))
  }, [year, sale])


  return (
    <div className="circle">
      <Row>
        <Col className="circle_year" span={11}>
          <ReactEcharts
            ref={(e) => (yearRef = e)}
            option={{}}
            style={{ height: 400 }}
          />
        </Col>
        <Col className="circle_cycle" span={11}>
          <ReactEcharts
            ref={(e) => (cycleRef = e)}
            option={{}}
            style={{ height: 400 }}
          />
        </Col>
      </Row>
    </div>
  )
}

export default ReptileCircle
