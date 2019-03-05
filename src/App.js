import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

// Ant Design Library
import 'antd/dist/antd.css'
import { Layout, Menu, Icon, Row, Col } from 'antd';

import Routes from './router';

import { connect } from 'react-redux';

import { AppActions } from './store/actions';

// Global Styles
import './App.scss';
import { bindActionCreators } from 'redux';

const { Header, Content, Footer, Sider } = Layout;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  }

  componentWillMount() {
    console.log(this);
    this.props.init();
  }

  render() {
    return (
      <Router>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            <div className='logo' />
            <Menu theme='dark' defaultSelectedKeys={['1']} mode='inline'>
              <Menu.Item key='1'>
                <Icon type='pie-chart' />
                <Link to='/'><span className='menuLabel'>Home</span></Link>
              </Menu.Item>
              <Menu.Item key='2'>
                <Icon type='desktop' />
                <Link to='/accounts'><span className='menuLabel'>Accounts</span></Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header>
              <Row className='header'>
                <Col span={16}><h1>Hyperledger Burrow Explorer</h1></Col>
                <Col span={8} className='headerInfo'>
                  <Row>
                    <Col span={8} className='label'>Chain Name: </Col>
                    <Col span={16} className='info'>{ this.props.chainInfo.ChainName }</Col>
                    
                    <Col span={8} className='label'>Chain Id: </Col>
                    <Col span={16} className='info'>{ this.props.chainInfo.ChainId }</Col>

                    <Col span={8} className='label'>Genesis Hash</Col>
                    <Col span={16} className='info'>{ this.props.chainInfo.GenesisHash }</Col>
                  </Row>
                </Col>
              </Row>
              
              
            </ Header>
            <Content>
              <Routes />
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('----- mapStateToProps()');
  console.log(state);
  return {
    chainInfo: state.App.info
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  init: AppActions.init
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
