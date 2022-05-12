import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { getAllDonors, deletePost} from '../service/api';
import { useState, useEffect, useContext } from 'react';
import { Link, useParams, useNavigate} from 'react-router-dom';

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
// import post from '../../../server/schema/post-schema';

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

let row = [], STATUSES = ['Approved', 'Pending', 'Rejected'];
// for(let i=0;i<14;i++) {
//     row[i] = {
//         name: "Shreyash",
//         email: "shreyash@gmail.com",
//         phone: "8431445678",
//         age: 21,
//         disease: "NIL",
//         bloodGroup: "A+",
//         units: 18,
//         location: "Apollo BloodBank, Pune",
//         date: "19 March 2022",
//         status: STATUSES[Math.floor(Math.random() * STATUSES.length)]
//     }
// }

const MTable = () => {
  const [posts, setPosts] = useState([]);
  const { id } = useParams();
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const user = JSON.parse(localStorage.getItem("token"))
  const admin = user.admin ? user.admin : "False";
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  let status = 'Pending';
  
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

      useEffect(() => {
        // console.log(id);
        const fetchData = async () => {
            let data = await getAllDonors(id);
            console.log(data);
            setPosts(data);
        }
        fetchData();
    }, [])
    let ct=0;
    posts.map((row) => {
      if(row.request_units === 0) ct  = ct + 1;
    })
    
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
        {/* <col width="15%" /> */}
      </colgroup>
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeaderCell} style={{textAlign: "center"}}>Donor Info</TableCell>
            <TableCell className={classes.tableHeaderCell} style={{textAlign: "center"}}>Age</TableCell>
            <TableCell className={classes.tableHeaderCell} style={{textAlign: "center"}}>Blood Group</TableCell>
            <TableCell className={classes.tableHeaderCell} style={{textAlign: "center"}}>Units (ml)</TableCell>
            <TableCell className={classes.tableHeaderCell} style={{textAlign: "center"}}>Disease</TableCell>
            <TableCell className={classes.tableHeaderCell} style={{textAlign: "center"}}>Location</TableCell>
            <TableCell className={classes.tableHeaderCell} style={{textAlign: "center"}}>Date</TableCell>
            <TableCell className={classes.tableHeaderCell} style={{textAlign: "center"}}>Status</TableCell>
            {admin === 'true' && <TableCell className={classes.tableHeaderCell} style={{textAlign: "center"}}>Action</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
        {posts.map((row) => {
            status='Pending'
            if(row.request_units === 0) ct  = ct + 1;
            // {console.log(rowsPerPage)}
            // let date = (row.createdDate).toDateString();
            if(row.status === 1){
              status = 'Approved'
            }
            else if(row.status === -1){
              status = 'Rejected'
            }
            if(row.request_units === 0)
            return <TableRow key={row.name}>
              <TableCell>
                  <Grid container>
                      <Grid item lg={4}>
                          <Avatar alt={row.name} src={row.Imageurl} className={classes.avatar}/>
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
              <TableCell style={{textAlign: "center"}}>{row.bloodgroup}</TableCell>
              <TableCell style={{textAlign: "center"}}>{row.donate_units}</TableCell>
              <TableCell style={{textAlign: "center"}}>{row.disease}</TableCell>
              <TableCell style={{textAlign: "center"}}>{row.location}</TableCell>
              <TableCell style={{textAlign: "center"}}>{new Date(row.createdDate).toDateString()}</TableCell>
              <TableCell>
                  <Typography 
                    className={classes.status}
                    style={{
                        backgroundColor: 
                        ((status === 'Approved' && 'green') ||
                        (status === 'Pending' && 'blue') ||
                        (status === 'Rejected' && 'red'))
                    }}
                  >{status}</Typography>
                </TableCell>
                {admin=== 'true' && <TableCell>
                {status === 'Pending' && <Grid container>
                      
                      <Grid item lg={7}>
                       <Typography 
                        onClick={()=>{window.location.reload();}}
                           className={classes.status}
                           style={{
                               backgroundColor: 'green'
                       }}
                       >
                         <Link to={`/Donations`} style={{ color: 'inherit', textDecoration: 'inherit'}}>Approve</Link></Typography>
                       </Grid>
                       <Grid item lg={5}>
                       <Typography 
                       onClick={()=>{window.location.reload();}}
                           className={classes.status}
                           style={{
                               backgroundColor: 'red'
                       }}
                       >
                         <Link to={`/Donations`} style={{ color: 'inherit', textDecoration: 'inherit'}}>Reject</Link></Typography>
                       </Grid>
                    </Grid> }
                    {status === 'Approved' && <Grid container style = {{textAlign: "center"}}>
                      
                      <Grid item lg={12}>
                       <Typography 
                           className={classes.status}
                           style={{
                               backgroundColor: 'green'
                       }}
                       >Approved</Typography>
                       </Grid>
                       
                    </Grid> }
                    {status === 'Rejected' && <Grid container style = {{textAlign: "center"}}>
                      <Grid item lg={12}>
                       <Typography 
                           className={classes.status}
                           style={{
                               backgroundColor: 'red'
                       }}
                       >Rejected</Typography>
                       </Grid>
                       
                    </Grid> }
 
                 </TableCell> }
            </TableRow>
          })}
        </TableBody>
        {/* <TableFooter>
        <TablePagination 
            rowsPerPageOptions={[5, 10, 15]}
            component="Table"
            colSpan={20} 
            // count={posts.length}
            count={ct}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
        />
        </TableFooter> */}
      </Table>
    </TableContainer>
    </Grid>
  );
}

export default MTable;