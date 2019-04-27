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

class TradesHistoryTable extends Component {
  render() {
    const { classes, history } = this.props;

    return (
      <Fragment>
        <Grid container>
          <Grid item xs={11}>
            <Typography variant="h4" classes={{h4: classes.allActionText}} gutterBottom>
              Trades History
            </Typography>
          </Grid>
        </Grid>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell padding="none">Date</TableCell>
              <TableCell padding="none">Market</TableCell>
              <TableCell padding="none">ID</TableCell>
              <TableCell padding="none">Side</TableCell>
              <TableCell padding="none" numeric>Volume</TableCell>
              <TableCell padding="none" numeric>Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              history.map((data, index) => (
                <TableRow key={index}>
                  <TableCell padding="none">{data.created_at}</TableCell>
                  <TableCell padding="none">{data.market}</TableCell>
                  <TableCell padding="none">{data.id}</TableCell>
                  <TableCell padding="none">{data.side}</TableCell>
                  <TableCell padding="none" numeric>{data.volume}</TableCell>
                  <TableCell padding="none" numeric>{data.price}</TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
        { !history.length && <Typography variant="h6" align="center">Empty history</Typography> }
      </Fragment>
    );
  }
}

export default withStyles(styles)(TradesHistoryTable);
