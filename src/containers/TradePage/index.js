import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Layout from '../Layout';
import { withRouter } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import TradesHistory from '../../components/Trades/TradesHistory';
import { fetchHistory } from '../../actions/history';


class TradePage extends Component {
  componentDidMount() {
    this.props.fetchHistory();
  }

  render() {
    const {
      tradesHistory
    } = this.props;

    return (
      <Layout>
        <div style={{width: '100%', padding: '5%'}}>
          <TradesHistory history={tradesHistory} />
        </div>
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
    tradesHistory: state.history.trades
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchHistory: () => dispatch(fetchHistory())
  };
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(TradePage);
