import React, { SFC, useEffect, useState } from "react"
import { Button } from "antd"
import ReactEcharts from "echarts-for-react"
import moment from "moment"
import { getRecommendStatic } from "./api"
import getOptions from "./const/getOptions"
import { IRecommend } from "./interface"

import "./index.scss"

type Prop = {}

const ReptileRecommend: SFC<Prop> = (props) => {
  let unitPriceRef: any
  let sellNumRef: any
  let ninetyRef: any
  let thirtyRef: any

  const [YunLiFang, setYunLiFang] = useState<IRecommend[]>([])
  const [HeNengZhenBao, setHeNengZhenBao] = useState<IRecommend[]>([])
  const [YunLiFangUrl, setYunLiFangUrl] = useState("")
  const [HeNengZhenBaoUrl, setHeNengZhenBaoUrl] = useState("")

  useEffect(() => {
    getRecommendStatic().then((data) => {
      if (data.code === 10000) {
        const YunLiFang = data.data.YunLiFang
        const HeNengZhenBao = data.data.HeNengZhenBao
        setYunLiFang(YunLiFang)
        setHeNengZhenBao(HeNengZhenBao)
        setYunLiFangUrl(YunLiFang[0].url)
        setHeNengZhenBaoUrl(HeNengZhenBao[0].url)
      }
    })
  }, [])

  useEffect(() => {
    const time = YunLiFang.map((item) => moment(item.time).format("YYYY-MM-DD"))
    const YunUnitPrice = YunLiFang.map((item) => item.unitPrice)
    const HeUnitPrice = HeNengZhenBao.map((item) => item.unitPrice)
    const YunSellNum = YunLiFang.map((item) => item.sellNum)
    const HeSellNum = HeNengZhenBao.map((item) => item.sellNum)
    const YunNinety = YunLiFang.map((item) => Number(item.ninetySaleCount))
    const HeNinety = HeNengZhenBao.map((item) => Number(item.ninetySaleCount))
    const YunThirty = YunLiFang.map((item) => Number(item.dayThirtySee))
    const HeThirty = HeNengZhenBao.map((item) => Number(item.dayThirtySee))
    unitPriceRef
      .getEchartsInstance()
      .setOption(getOptions("推荐楼盘单价", time, YunUnitPrice, HeUnitPrice))
    sellNumRef
      .getEchartsInstance()
      .setOption(
        getOptions("推荐楼盘正在出售套数", time, YunSellNum, HeSellNum)
      )
    ninetyRef
      .getEchartsInstance()
      .setOption(getOptions("近90天成交套数", time, YunNinety, HeNinety))
    thirtyRef
      .getEchartsInstance()
      .setOption(getOptions("近30天带看数", time, YunThirty, HeThirty))
  }, [YunLiFang, HeNengZhenBao])

  useEffect(() => {}, [HeNengZhenBao])

  return (
    <div className="recommend">
      <div className="recommend_url">
        <span>推荐楼盘:</span>
        <Button
          className="recommend_url_btn"
          type="primary"
          disabled={!YunLiFangUrl}
          onClick={() => window.open(YunLiFangUrl)}
        >
          电建地产云立方
        </Button>
        <Button
          className="recommend_url_btn"
          type="primary"
          disabled={!HeNengZhenBaoUrl}
          onClick={() => window.open(HeNengZhenBaoUrl)}
        >
          合能珍宝琥珀
        </Button>
      </div>
      <div className="recommend_untiPrice">
        <ReactEcharts
          ref={(e) => (unitPriceRef = e)}
          option={{}}
          style={{ height: 400 }}
        />
      </div>
      <div className="recommend_sellNum">
        <ReactEcharts
          ref={(e) => (sellNumRef = e)}
          option={{}}
          style={{ height: 400 }}
        />
      </div>
      <div className="recommend_ninetySaleCount">
        <ReactEcharts
          ref={(e) => (ninetyRef = e)}
          option={{}}
          style={{ height: 400 }}
        />
      </div>
      <div className="recommend_dayThirtySee">
        <ReactEcharts
          ref={(e) => (thirtyRef = e)}
          option={{}}
          style={{ height: 400 }}
        />
      </div>
    </div>
  )
}

export default ReptileRecommend
