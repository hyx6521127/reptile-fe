import React, { SFC } from "react"
import { Layout } from 'antd'
import Menu from './components/menu'
import Routes from '../Router/Routes'
import './index.scss'

const { Sider, Header, Content } = Layout

interface ILayoutProps {}

const MainLayout: SFC<ILayoutProps> = () => {
  return (
    <Layout className="layout">
      <Sider>
        <div className="layout_logo">
          成都房市统计系统
        </div>
          <Menu />
      </Sider>
      <Layout className="main">
        <Header className="header"></Header>
        <Content className="content">
            <Routes />
        </Content>
      </Layout>
    </Layout>
  )
}

export default MainLayout
