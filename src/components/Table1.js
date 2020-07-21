import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

function createData(title, date, priority, status ) {
    return { title, date, priority, status,  };
}

const rows = [
    createData('Make a Wireframe', '7/2/2020', 'High', "Complete"),
    createData('Talk about Design', '7/11/2020', "Low", "Complete"),
    createData('Create User Stories', "7/15/2020", "Medium", "Complete"),
    createData('Create User Persona', "7/18/2020", "High", "Complete"),
    createData('Write Project Description', "7/20/20", "Low", "Complete"),
];

const useStyles = makeStyles({
    table: {
        width: 1575,
        height: 625


    },
});

export default function Table1() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Task</StyledTableCell>
                        <StyledTableCell >Due Date</StyledTableCell>
                        <StyledTableCell >Priority</StyledTableCell>
                        <StyledTableCell >Status</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.title}>

                            <StyledTableCell >{row.title}</StyledTableCell>
                            <StyledTableCell >{row.date}</StyledTableCell>
                            <StyledTableCell >{row.priority}</StyledTableCell>
                            <StyledTableCell >{row.status}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}