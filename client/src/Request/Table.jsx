// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import { getAllDonors, deletePost} from '../service/api';
// import { useState, useEffect, useContext } from 'react';
// import { Link, useParams, useNavigate} from 'react-router-dom';

// import { 
//     Table,
//     TableBody,
//     TableCell,
//     TableContainer,
//     TableHead,
//     TableRow,
//     Paper,
//     Avatar,
//     Grid,
//     Typography,
//     TablePagination,
//     TableFooter
//  } from '@material-ui/core';

// const useStyles = makeStyles((theme) => ({
//     table: {
//       minWidth: 650,
//     },
//     tableContainer: {
//         borderRadius: 15,
//         margin: '15px 15px',
//         // maxWidth: 2000
//     },
//     tableHeaderCell: {
//         fontWeight: 'bold',
        
//         backgroundColor: theme.palette.primary.dark,
//         color: theme.palette.getContrastText(theme.palette.primary.dark)
//     },
//     avatar: {
//         backgroundColor: theme.palette.primary.light,
//         color: theme.palette.getContrastText(theme.palette.primary.light)
//     },
//     name: {
//         fontWeight: 'bold',
//         color: theme.palette.secondary.dark
//     },
//     status: {
//         fontWeight: 'bold',
//         fontSize: '0.75rem',
//         color: 'white',
//         backgroundColor: 'grey',
//         borderRadius: 8,
//         padding: '3px 10px',
//         display: 'inline-block'
//     }
//   }));

// let USERS = [], STATUSES = ['Approved', 'Pending', 'Rejected'];
// let row = [];


// function MTable() {
//   const [posts, setPosts] = useState([]);
//   const classes = useStyles();
//   const { id } = useParams();
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(5);
//   let status="Pending";
//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };
//   useEffect(() => {
//     // console.log(id);
//     const fetchData = async () => {
//         let data = await getAllDonors(id);
//         // console.log(data);
//         setPosts(data);
//     }
//     fetchData();
//   });

//   return (
//     <Grid container item xs={12} sm={12} lg={12} >
   
//     <TableContainer component={Paper} className={classes.tableContainer}>
//       <Table className={classes.table} aria-label="simple table">
//       <colgroup>
//         <col width="20%" />
//         <col width="5%" />
//         <col width="5%" />
//         <col width="5%" />
//         <col width="10%" />
//         <col width="20%" />
//         <col width="15%" />
//         <col width="5%" />
//         <col width="15%" />
//       </colgroup>
//         <TableHead>
//           <TableRow>
//             <TableCell className={classes.tableHeaderCell} style={{textAlign: "center"}}>Patient Info</TableCell>
//             <TableCell className={classes.tableHeaderCell} style={{textAlign: "center"}}>Age</TableCell>
//             <TableCell className={classes.tableHeaderCell} style={{textAlign: "center"}}>Blood Group</TableCell>
//             <TableCell className={classes.tableHeaderCell} style={{textAlign: "center"}}>Units Required (in ml)</TableCell>
//             <TableCell className={classes.tableHeaderCell} style={{textAlign: "center"}}>Reason</TableCell>
//             <TableCell className={classes.tableHeaderCell} style={{textAlign: "center"}}>Location</TableCell>
//             <TableCell className={classes.tableHeaderCell} style={{textAlign: "center"}}>Date</TableCell>
//             <TableCell className={classes.tableHeaderCell} style={{textAlign: "center"}}>Status</TableCell>
//             <TableCell className={classes.tableHeaderCell} style={{textAlign: "center"}}>Action</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {posts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
//             !row.request_units && <TableRow key={row.name}>
//               <TableCell>
//                   <Grid container>
//                       <Grid item lg={4}>
//                           <Avatar alt={row.name} src={row.Imageurl} className={classes.avatar}/>
//                       </Grid>
//                       <Grid item lg={8}>
//                           <Typography className={classes.name}>Name: {row.name}</Typography>
//                           <Typography color="textSecondary" variant="body2">{row.email}</Typography>
//                           <Typography color="textSecondary" variant="body2">Phone: {row.phone}</Typography>
//                       </Grid>
//                   </Grid>
//                 </TableCell>
//               <TableCell>
//                   <Typography color="primary" variant="subtitle2" style={{textAlign: "center"}}>{row.age}</Typography>
//               </TableCell>
//               <TableCell style={{textAlign: "center"}}>{row.bloodgroup}</TableCell>
//               <TableCell style={{textAlign: "center"}}>{row.request_units}</TableCell>
//               <TableCell style={{textAlign: "center"}}>{row.disease}</TableCell>
//               <TableCell style={{textAlign: "center"}}>{row.location}</TableCell>
//               <TableCell style={{textAlign: "center"}}>{row.createdDate}</TableCell>
//               <TableCell>
//                   <Typography 
//                     className={classes.status}
//                     style={{
//                         backgroundColor: 
//                         ((status === 'Approved' && 'green') ||
//                         (status === 'Pending' && 'blue') ||
//                         (status === 'Rejected' && 'red'))
//                     }}
//                   >{status}</Typography>
//                 </TableCell>
//                 <TableCell>
//                   <Grid container>
                      
//                     <Grid item lg={7}>
//                     <Typography 
//                         className={classes.status}
//                         style={{
//                             backgroundColor: 'green'
//                     }}
//                     >Approve</Typography>
//                     </Grid>
//                     <Grid item lg={5}>
//                     <Typography 
//                         className={classes.status}
//                         style={{
//                             backgroundColor: 'red'
//                     }}
//                     >Reject</Typography>
//                     </Grid>
//                  </Grid>
 
//                  </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//         <TableFooter>
//         <TablePagination 
//             rowsPerPageOptions={[5, 10, 15]}
//             component="Table"
//             colSpan={20} 
//             count={row.length}
//             rowsPerPage={rowsPerPage}
//             page={page}
//             onChangePage={handleChangePage}
//             onChangeRowsPerPage={handleChangeRowsPerPage}
//         />
//         </TableFooter>
//       </Table>
//     </TableContainer>
//     </Grid>
//   );
// }

// export default MTable;
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

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  let status = 'Pending';
  
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };

      useEffect(() => {
        // console.log(id);
        const fetchData = async () => {
            let data = await getAllDonors();
            console.log(data);
            setPosts(data);
        }
        fetchData();
    }, [])
    let ct = 0;
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
            <TableCell className={classes.tableHeaderCell} style={{textAlign: "center"}}>Reason</TableCell>
            <TableCell className={classes.tableHeaderCell} style={{textAlign: "center"}}>Location</TableCell>
            <TableCell className={classes.tableHeaderCell} style={{textAlign: "center"}}>Date</TableCell>
            <TableCell className={classes.tableHeaderCell} style={{textAlign: "center"}}>Status</TableCell>
            {/* <TableCell className={classes.tableHeaderCell} style={{textAlign: "center"}}>Action</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
        {posts.map((row) => {
            if(row.request_units !== 0) ct  = ct + 1;
            if(row.status === 1){
              status = 'Approved'
            }
            else if(row.status === -1){
              status = 'Rejected'
            }
            if(row.request_units)
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
              <TableCell style={{textAlign: "center"}}>{row.request_units}</TableCell>
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
                {/* <TableCell>
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
 
                 </TableCell> */}
            </TableRow>
            })}
        </TableBody>
        {/* <TableFooter>
        <TablePagination 
            rowsPerPageOptions={[5, 10, 15]}
            component="Table"
            colSpan={20} 
            count={ct}
            // count={ct}
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