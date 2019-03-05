import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Card, Icon, Avatar, Row, Col } from 'antd';

import { AccountActions } from '../../store/actions';

const { Meta } = Card;

class Accounts extends Component {

    componentWillMount() {
        this.props.init();
    }

    render() {
        return (
            <Row>
                <h1>Accounts</h1>
                { 
                    this.props.accounts.map((account) => {
                        return (
                            <Col span={8}>
                                <Card
                                    style={{ width: 300 }}
                                    cover={<img alt='example' src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png' />}
                                    actions={[<Icon type='setting' />, <Icon type='edit' />, <Icon type='ellipsis' />]}
                                >
                                    <Meta
                                        avatar={<Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />}
                                        title={ account.Address }
                                        description={ `Balance: ${account.Balance}` }
                                    />
                                </Card>
                            </Col>
                        );
                    })
                }
            </Row>
        );
    }
};

const mapStateToProps = (state) => {
    console.log('----- mapStateToProps()');
    console.log(state);
    return {
      accounts: state.Account.list
    }
  }
  
  const mapDispatchToProps = dispatch => bindActionCreators({
    init: AccountActions.init
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Accounts);