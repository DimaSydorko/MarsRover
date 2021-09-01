import React from 'react'
import { Layout, Menu } from 'antd'
import imgBG from './img/bg.jpg'
import 'antd/dist/antd.css'
import './App.less';
import SearchContainer from './components/search/search-Container'
import ImgHolderContainer from './components/imgHolder/imgHolder-Container'
const { Header, Footer, Content } = Layout

const App = () => {
  return <div>
    <img className='imgBG' src={imgBG} alt='BG' />
    <div className='App'>
      <Layout className='Layout'>
        <Header className='header'>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <SearchContainer/>
          </Menu>
          <h1 className='Title'>Mars Rover Photos</h1>
        </Header >
        <Content className='MainContent'>
          <ImgHolderContainer/>
        </Content>
        <Footer className='Footer'>Created at 31.08.2021</Footer>
      </Layout>
    </div>
  </div>
}

export default App
