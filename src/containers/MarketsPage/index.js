import React, { Component } from 'react';
import Layout from '../Layout';
import { withRouter } from 'react-router';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import MarketsList from '../../components/Markets/MarketsList';
import { fetchMarkets } from '../../actions/exchange';


class MarketsPage extends Component {
  componentDidMount() {
    this.props.fetchMarkets();
  }

  render() {
    const {
      marketsList
    } = this.props;

    return (
      <Layout>
        <div style={{width: '100%', padding: '5%'}}>
          <MarketsList markets={marketsList} />
        </div>
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
    marketsList: state.markets.data
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchMarkets: () => dispatch(fetchMarkets())
  };
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(MarketsPage);
