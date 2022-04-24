import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { getAllPosts, deletePost} from '../service/api';
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
        margin: '20px 40px',
        maxWidth: 2000
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
  const Posts=() =>{
    const [posts, setPosts] = useState([]);
    const { id } = useParams();
    const classes = useStyles();
    const history = useNavigate();
      const [page, setPage] = React.useState(0);
      const [rowsPerPage, setRowsPerPage] = React.useState(5);
    
      const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
      };
    useEffect(() => {
        const fetchData = async () => {
            let data = await getAllPosts(id);
            // console.log(data);
            setPosts(data);
        }
        fetchData();
    }, [])

    const deleteBlog = async (id) => {    
      
      await deletePost(id);
		  window.location.reload();
      window.alert("User deleted");
      //history('/');
      console.log("check");
    }

    return(
      <Grid container item xs={12} sm={12} lg={12} >
   
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} aria-label="simple table">
      {/* <colgroup>
        <col width="35%" />
        <col width="5%" />
        <col width="10%" />
        <col width="20%" />
        <col width="20%" />
        <col width="10%" />
      </colgroup> */}
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeaderCell} style={{textAlign: "center"}}>User Info</TableCell>
            <TableCell className={classes.tableHeaderCell} style={{textAlign: "center"}}>Age</TableCell>
            <TableCell className={classes.tableHeaderCell} style={{textAlign: "center"}}>Blood Group</TableCell>
            {/* <TableCell className={classes.tableHeaderCell} style={{textAlign: "center"}}>Disease</TableCell> */}
            <TableCell className={classes.tableHeaderCell} style={{textAlign: "center"}}>Address</TableCell>
            <TableCell className={classes.tableHeaderCell} style={{textAlign: "center"}}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {posts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
            <TableRow key={row.NAME}>
              <TableCell>
                  <Grid container>
                      <Grid item lg={3}>
                          <Avatar alt={row.NAME} src={row.Imageurl} className={classes.avatar}/>
                      </Grid>
                      <Grid item lg={9}>
                          <Typography className={classes.name}>Name: {row.name}</Typography>
                          <Typography color="textSecondary" variant="body2">Email Id: {row.email}</Typography>
                          <Typography color="textSecondary" variant="body2">Phone: {row.phone}</Typography>
                      </Grid>
                  </Grid>
                </TableCell>
              <TableCell>
                  <Typography color="primary" variant="subtitle2" style={{textAlign: "center"}}>{row.age}</Typography>
              </TableCell>
              <TableCell style={{textAlign: "center"}}>{row.bloodgroup}</TableCell>
              {/* <TableCell style={{textAlign: "center"}}>{row.disease}</TableCell> */}
              <TableCell style={{textAlign: "center"}}>{row.location}</TableCell>
              <TableCell>
              <Grid container>
                  <Grid item lg={6}>
                  <Typography 
                  
                    className={classes.status}
                    style={{
                        backgroundColor: 'green'
                  }}
                  >
                    <Link to={`/update/${row._id}`}  style={{ color: 'inherit', textDecoration: 'inherit'}}>Edit</Link>
                   
                    </Typography>
                  </Grid>
                  <Grid item lg={6}>
                  <Typography 
                    className={classes.status}
                    // onClick={()=>{console.log("Hi");}}
                    style={{
                        backgroundColor: 'red'
                  }}>
                  <Link to={`/User`}  onClick={()=>deleteBlog(row._id)} style={{ color: 'inherit', textDecoration: 'inherit'}}>Delete</Link>
                  </Typography>
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
            count={posts.length}
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

export default Posts;
/******* */
// let USERS = [], STATUSES = ['Active', 'Pending', 'Blocked'];
// for(let i=0;i<14;i++) {
//     USERS[i] = {
//         name: "Sahan",
//         email: "sahandarisi@gmail.com",
//         phone: "8431444313",
//         age: 19,
//         disease: "NIL",
//         bloodGroup: "A+",
//         location: "ABCDEFGH Hospital, Bangalore",
//     }
// }

// function MTable() {
//   const classes = useStyles();
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(5);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };

//   return (
//     <Grid container item xs={12} sm={10} lg={10} >
   
//     <TableContainer component={Paper} className={classes.tableContainer}>
//       <Table className={classes.table} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell className={classes.tableHeaderCell} style={{textAlign: "center"}}>User Info</TableCell>
//             <TableCell className={classes.tableHeaderCell} style={{textAlign: "center"}}>Age</TableCell>
//             <TableCell className={classes.tableHeaderCell} style={{textAlign: "center"}}>Blood Group</TableCell>
//             <TableCell className={classes.tableHeaderCell} style={{textAlign: "center"}}>Disease</TableCell>
//             <TableCell className={classes.tableHeaderCell} style={{textAlign: "center"}}>Location</TableCell>
//             <TableCell className={classes.tableHeaderCell} style={{textAlign: "center"}}>Action</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {posts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
//             <TableRow key={row.name}>
//               <TableCell>
//                   <Grid container>
//                       <Grid item lg={4}>
//                           <Avatar alt={row.name} src='.' className={classes.avatar}/>
//                       </Grid>
//                       <Grid item lg={8}>
//                           <Typography className={classes.name}>Name: {row.name}</Typography>
//                           <Typography color="textSecondary" variant="body2">Email Id: {row.email}</Typography>
//                           <Typography color="textSecondary" variant="body2">Phone: {row.phone}</Typography>
//                       </Grid>
//                   </Grid>
//                 </TableCell>
//               <TableCell>
//                   <Typography color="primary" variant="subtitle2">{row.age}</Typography>
//               </TableCell>
//               <TableCell style={{textAlign: "center"}}>{row.bloodGroup}</TableCell>
//               <TableCell style={{textAlign: "center"}}>{row.disease}</TableCell>
//               <TableCell style={{textAlign: "center"}}>{row.location}</TableCell>
//               <TableCell>
//               <Grid container>
//                   <Grid item lg={6}>
//                   <Typography 
//                     className={classes.status}
//                     style={{
//                         backgroundColor: 'green'
//                   }}
//                   >Edit</Typography>
//                   </Grid>
//                   <Grid item lg={6}>
//                   <Typography 
//                     className={classes.status}
//                     style={{
//                         backgroundColor: 'red'
//                   }}
//                   >Delete</Typography>
//                   </Grid>
//               </Grid>
 
//                 </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//         <TableFooter>
//         <TablePagination
//             rowsPerPageOptions={[5, 10, 15]}
//             component="div"
//             count={USERS.length}
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