import React, { Component } from 'react';
import Layout from '../Layout';
import { withRouter } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import MarketsList from '../../components/Markets/MarketsList';
import { fetchMarkets } from '../../actions/exchange';
import Typography from '@material-ui/core/Typography';
import Market from '../../components/Markets/Market';


class MarketsPage extends Component {
    componentDidMount() {
        this.props.fetchMarkets();
    }

    groupBy(xs, f) {
        return xs.reduce((r, v, i, a, k = f(v)) => ((r[k] || (r[k] = [])).push(v), r), {});
    }

  sortedMarkets = (markets) => this.groupBy(markets, (market) => market.bid_unit);

  render() {
      const {
          marketsList
      } = this.props;

      return (
          <Layout>
              <Switch>
                  <Route
                      exact path="/markets"
                      render={() => (
                          <div style={{width: '100%', padding: '5%'}}>
                              <MarketsList markets={this.sortedMarkets(marketsList)} />
                          </div>
                      )}
                  />
                  {/*<Route*/}
                  {/*path="/markets/:market"*/}
                  {/*render={(props) => (*/}
                  {/*<Typography variant="h4" style={{padding: 40}}>{props.match.params.market} in process</Typography>*/}
                  {/*)}*/}
                  {/*/>*/}
                  {/*<Route*/}
                      {/*path="/markets/:market"*/}
                      {/*component={Market}*/}
                  {/*/>*/}

              </Switch>

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
