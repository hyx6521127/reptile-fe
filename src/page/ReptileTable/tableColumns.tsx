import React from 'react'

interface ITableData {
  name: string
  area: number
  room: string
  price: number
  unitPrice: number
  cycle: number
  year: number
  url: string
}

export default () => {
  return [
    {
      title: '名称',
      dataIndex: 'name',
      width:200,
      render:(text:string,row:ITableData) => {
      return <a  href={row.url} target="_blank">{text}</a>
      }
    },
    {
      title: '面积(平米)',
      dataIndex: 'area',
      sorter: {
        compare: (a:ITableData, b:ITableData) => {
          return a.area - b.area
        },
        multiple: 3,
      },
      width: 120,
    },
    {
      title: '厅室',
      dataIndex: 'room',
      width:120
    },
    {
      title: '总价(万元)',
      dataIndex: 'price',
      sorter: {
        compare: (a:ITableData, b:ITableData) => a.price - b.price,
        multiple: 3,
      },
      width: 120,
    },
    {
      title: '单价(元)',
      dataIndex: 'unitPrice',
      sorter: {
        compare: (a:ITableData, b:ITableData) => a.unitPrice - b.unitPrice,
        multiple: 3,
      },
      width: 150
    },
    {
      title: '年代',
      dataIndex: 'year',
      sorter: {
        compare: (a:ITableData, b:ITableData) => a.year - b.year,
        multiple: 3,
      },
      width:120
    },
    {
      title: '成交周期(天)',
      dataIndex: 'cycle',
      sorter: {
        compare: (a:ITableData, b:ITableData) => a.cycle - b.cycle,
        multiple: 3,
      },
      width:120
    }
  ];
};
