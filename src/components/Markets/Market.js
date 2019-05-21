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

        return (
            <Fragment>
                <Grid container>
                    <Grid item xs={11}>
                        <Typography variant="h4" classes={{h4: classes.allActionText}} gutterBottom>
                            {'Order Book for ' + market}
                        </Typography>
                    </Grid>
                </Grid>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell padding="none">Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell padding="none">Some</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Fragment>
            // {/*<Typography variant="h4" style={{padding: 40}}>{market + ' in process'}</Typography>*/}
        );
    }
}

export default withStyles(styles)(Market);