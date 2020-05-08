import React, { SFC, useState, useEffect } from "react"
import { Table, Select } from "antd"
import tableColumns from "./tableColumns"
import { getList } from "./api"
import { IApiData } from "../../utils/Axios"

import "./index.scss"

const { Option } = Select

type IReptileTableProp = {}

const index: SFC<IReptileTableProp> = (props) => {
  const [list, setList] = useState([])
  const [search, setSearch] = useState({ year: undefined })

  useEffect(() => {
    getList(search).then((data: IApiData) => {
      setList(data.data)
    })
  }, [search])

  function createYearOption() {
    const result = []
    for (let i = 2020; i > 1990; i--) {
      result.push(<Option key={i} value={i}>{`${i}年`}</Option>)
    }
    return result
  }

  function yearChange(value: number) {
    setSearch(Object.assign({}, search, { year: value }))
  }

  return (
    <div className="record">
      <div className="record_search">
        <span>
          年代：
          <Select
            style={{ width: 150 }}
            value={search.year}
            onChange={yearChange}
            allowClear={true}
          >
            {createYearOption()}
          </Select>
        </span>
      </div>

      <Table
        dataSource={list}
        columns={tableColumns()}
        bordered={true}
        rowKey="_id"
      />
    </div>
  )
}

export default index
