import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid/Grid';
import Typography from '@material-ui/core/Typography/Typography';
import Table from '@material-ui/core/Table/Table';
import TableHead from '@material-ui/core/TableHead/TableHead';
import TableRow from '@material-ui/core/TableRow/TableRow';
import TableCell from '@material-ui/core/TableCell/TableCell';
import TableBody from '@material-ui/core/TableBody/TableBody';


const styles = theme => ({
    allActionText: {
        padding: 10
    }
});

class Market extends Component {
    render() {
        const { classes, order_book, market } = this.props;

        const market_fixed = market !== undefined ? market : 'unknown market';
        const order_book_fixed = order_book !== undefined ? order_book : {};

        return (
            <Fragment>
                <Grid container>
                    <Grid item xs={11}>
                        <Typography variant="h4" classes={{h4: classes.allActionText}} gutterBottom>{'Order Book for ' + market_fixed}</Typography>
                    </Grid>
                </Grid>
                {
                    Object.keys(order_book_fixed).map((key, ind) => (
                        <div key={ind}>
                            <Typography variant="h5" align="center">{key.toUpperCase()}</Typography>
                            <Table className={classes.table}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell padding="none">ID</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        order_book_fixed[key].map((data, index) => (
                                            <TableRow key={index}>
                                                <TableCell padding="none">{data.id}</TableCell>
                                            </TableRow>
                                        ))
                                    }
                                </TableBody>
                            </Table>
                            <br/>
                        </div>
                    ))
                }
                {!Object.keys(order_book_fixed).length && <Typography variant="h6" align="center">Order book not loaded</Typography>}
            </Fragment>
        );
    }
}

export default withStyles(styles)(Market);