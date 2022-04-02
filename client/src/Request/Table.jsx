import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { getAllPosts } from '../service/api';
import { useState, useEffect  } from 'react';

import { 
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Avatar,
    Grid,
    Typography,
    TablePagination,
    TableFooter
 } from '@material-ui/core';
import UpdateView from '../post/UpdateView';

const useStyles = makeStyles((theme) => ({
    table: {
      minWidth: 650,
    },
    tableContainer: {
        borderRadius: 15,
        margin: '15px 15px',
        // maxWidth: 2000
    },
    tableHeaderCell: {
        fontWeight: 'bold',
        
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.getContrastText(theme.palette.primary.dark)
    },
    avatar: {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.getContrastText(theme.palette.primary.light)
    },
    name: {
        fontWeight: 'bold',
        color: theme.palette.secondary.dark
    },
    status: {
        fontWeight: 'bold',
        fontSize: '0.75rem',
        color: 'white',
        backgroundColor: 'grey',
        borderRadius: 8,
        padding: '3px 10px',
        display: 'inline-block'
    }
  }));

let USERS = [], STATUSES = ['Approved', 'Pending', 'Rejected'];
for(let i=0;i<14;i++) {
    if(i%2===0){
    USERS[i] = {
        name: "Nitish",
        email: "nitish@gmail.com",
        phone: "5342134123",
        age: 26,
        reason: "Dengue",
        bloodGroup: "O+",
        units: 18,
        location: "Apollo BloodBank, Chandigarh",
        date: `${i+1} March 2022`,
        status: STATUSES[Math.floor(Math.random() * STATUSES.length)]
    }
}
else{
    USERS[i] = {
        name: "Rajesh",
        email: "rajesh@gmail.com",
        phone: "4132134123",
        age: 40,
        reason: "Fever",
        bloodGroup: "B+",
        units: 10,
        location: "Apollo BloodBank, Ropar",
        date: `${i+1} March 2022`,
        status: STATUSES[Math.floor(Math.random() * STATUSES.length)]
    }
}

}

function MTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Grid container item xs={12} sm={12} lg={12} >
   
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} aria-label="simple table">
      <colgroup>
        <col width="20%" />
        <col width="5%" />
        <col width="5%" />
        <col width="5%" />
        <col width="10%" />
        <col width="20%" />
        <col width="15%" />
        <col width="5%" />
        <col width="15%" />
      </colgroup>
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeaderCell} style={{textAlign: "center"}}>Patient Info</TableCell>
            <TableCell className={classes.tableHeaderCell} style={{textAlign: "center"}}>Age</TableCell>
            <TableCell className={classes.tableHeaderCell} style={{textAlign: "center"}}>Blood Group</TableCell>
            <TableCell className={classes.tableHeaderCell} style={{textAlign: "center"}}>Units Required (in ml)</TableCell>
            <TableCell className={classes.tableHeaderCell} style={{textAlign: "center"}}>Reason</TableCell>
            <TableCell className={classes.tableHeaderCell} style={{textAlign: "center"}}>Location</TableCell>
            <TableCell className={classes.tableHeaderCell} style={{textAlign: "center"}}>Date</TableCell>
            <TableCell className={classes.tableHeaderCell} style={{textAlign: "center"}}>Status</TableCell>
            <TableCell className={classes.tableHeaderCell} style={{textAlign: "center"}}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {USERS.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
            <TableRow key={row.name}>
              <TableCell>
                  <Grid container>
                      <Grid item lg={4}>
                          <Avatar alt={row.name} src='.' className={classes.avatar}/>
                      </Grid>
                      <Grid item lg={8}>
                          <Typography className={classes.name}>Name: {row.name}</Typography>
                          <Typography color="textSecondary" variant="body2">{row.email}</Typography>
                          <Typography color="textSecondary" variant="body2">Phone: {row.phone}</Typography>
                      </Grid>
                  </Grid>
                </TableCell>
              <TableCell>
                  <Typography color="primary" variant="subtitle2" style={{textAlign: "center"}}>{row.age}</Typography>
              </TableCell>
              <TableCell style={{textAlign: "center"}}>{row.bloodGroup}</TableCell>
              <TableCell style={{textAlign: "center"}}>{row.units}</TableCell>
              <TableCell style={{textAlign: "center"}}>{row.reason}</TableCell>
              <TableCell style={{textAlign: "center"}}>{row.location}</TableCell>
              <TableCell style={{textAlign: "center"}}>{row.date}</TableCell>
              <TableCell>
                  <Typography 
                    className={classes.status}
                    style={{
                        backgroundColor: 
                        ((row.status === 'Approved' && 'green') ||
                        (row.status === 'Pending' && 'blue') ||
                        (row.status === 'Rejected' && 'red'))
                    }}
                  >{row.status}</Typography>
                </TableCell>
                <TableCell>
                  <Grid container>
                      
                    <Grid item lg={7}>
                    <Typography 
                        className={classes.status}
                        style={{
                            backgroundColor: 'green'
                    }}
                    >Approve</Typography>
                    </Grid>
                    <Grid item lg={5}>
                    <Typography 
                        className={classes.status}
                        style={{
                            backgroundColor: 'red'
                    }}
                    >Reject</Typography>
                    </Grid>
                 </Grid>
 
                 </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
        <TablePagination 
            rowsPerPageOptions={[5, 10, 15]}
            component="Table"
            colSpan={20} 
            count={USERS.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
        />
        </TableFooter>
      </Table>
    </TableContainer>
    </Grid>
  );
}

export default MTable;