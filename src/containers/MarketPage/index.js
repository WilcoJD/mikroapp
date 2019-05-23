import React, { Component } from 'react';
import Layout from '../Layout';
import { withRouter } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import Market from '../../components/Markets/Market';
import { fetchMarketOrderBook } from '../../actions/exchange';
import Typography from '@material-ui/core/Typography';


class MarketPage extends Component {
    componentDidMount() {
        const market = this.props.match.params.market;
        this.props.fetchMarketOrderBook(market);
    }

    render() {
        const {
            order_book
        } = this.props;

        const market = this.props.match.params.market;

        return (
            <Layout>
                <Switch>
                    <Route
                        path="/market/:market"
                        // component={Market}
                        render={() => (
                            <div style={{width: '100%', padding: '5%'}}>
                                <Market order_book={order_book} market={market} />
                            </div>
                        )}
                    />
                </Switch>

            </Layout>
        );
    }
}

function mapStateToProps(state, ownProps) {
    const market = ownProps.match.params.market;

    return {
        order_book: state.markets[market]
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        fetchMarketOrderBook: market => dispatch(fetchMarketOrderBook(market))
    };
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(MarketPage);
