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

class MarketsList extends Component {
  render() {
    const { classes, markets } = this.props;

    return (
      <Fragment>
        <Grid container>
          <Grid item xs={11}>
            <Typography variant="h4" classes={{h4: classes.allActionText}} gutterBottom>
                            Markets
            </Typography>
          </Grid>
        </Grid>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell padding="none">Name</TableCell>
              <TableCell padding="none">ID</TableCell>
              <TableCell padding="none">Base</TableCell>
              <TableCell padding="none">Quote</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              markets.map((data, index) => (
                <TableRow key={index}>
                  <TableCell padding="none">{data.name}</TableCell>
                  <TableCell padding="none">{data.id}</TableCell>
                  <TableCell padding="none">{data.ask_unit}</TableCell>
                  <TableCell padding="none">{data.bid_unit}</TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
        { !markets.length && <Typography variant="h6" align="center">No markets</Typography> }
      </Fragment>
    );
  }
}

export default withStyles(styles)(MarketsList);
