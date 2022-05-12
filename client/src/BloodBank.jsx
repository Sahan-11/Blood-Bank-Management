import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useState, useEffect, useContext } from 'react';
import { Link, useParams, useNavigate} from 'react-router-dom';
import Categories from "./Categories";

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
import { getAllBloodbanks, getAllDonors } from './service/api';

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
    },
    heading: {
        fontSize: 18,
        fontWeight: 600,
        paddingLeft: 10,
        paddingTop: 30,
        align: 'center',
      }
  }));

let USERS = [], STATUSES = ['Active', 'Pending', 'Blocked'];
for(let i=0;i<14;i++) {
    USERS[i] = {
        name: "Government Medical College and hospital blood bank",
        A_plus: 100,
        B_plus: 100,
        AB_plus: 100,
        O_plus: 100,
        A_minus: 100,
        B_minus: 100,
        AB_minus: 100,
        O_minus: 100
    }
}

function Bloodbank() {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);

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
    // console.log(id);
    const fetchData = async () => {
        let data = await getAllDonors();
        console.log(data);
        setPosts(data);
    }
    fetchData();
}, [])

  
let ct=1;
let Aplus1=500,Bplus1=500,ABplus1=500,Oplus1=500,Aminus1=500,Bminus1=500,ABminus1=500,Ominus1=500;
let Aplus2=500,Bplus2=500,ABplus2=500,Oplus2=500,Aminus2=500,Bminus2=500,ABminus2=500,Ominus2=500;
let Aplus3=500,Bplus3=500,ABplus3=500,Oplus3=500,Aminus3=500,Bminus3=500,ABminus3=500,Ominus3=500;
let Aplus4=500,Bplus4=500,ABplus4=500,Oplus4=500,Aminus4=500,Bminus4=500,ABminus4=500,Ominus4=500;
let Aplus5=500,Bplus5=500,ABplus5=500,Oplus5=500,Aminus5=500,Bminus5=500,ABminus5=500,Ominus5=500;
let Aplus6=500,Bplus6=500,ABplus6=500,Oplus6=500,Aminus6=500,Bminus6=500,ABminus6=500,Ominus6=500;

posts.map((row) => {
  if(row.status ===1 && row.location==="Government Medical College and hospital blood bank" && row.bloodgroup === "A+") Aplus1  = Aplus1 - row.request_units + row.donate_units;
  if(row.status ===1 && row.location==="Government Medical College and hospital blood bank" && row.bloodgroup === "B+") Bplus1  = Bplus1 - row.request_units + row.donate_units;
  if(row.status ===1 && row.location==="Government Medical College and hospital blood bank" && row.bloodgroup === "AB+") ABplus1  = ABplus1 - row.request_units + row.donate_units;     
  if(row.status ===1 && row.location==="Government Medical College and hospital blood bank" && row.bloodgroup === "O+") Oplus1  = Oplus1 - row.request_units + row.donate_units;
  if(row.status ===1 && row.location==="Government Medical College and hospital blood bank" && row.bloodgroup === "A-") Aminus1  = Aminus1 - row.request_units + row.donate_units;
  if(row.status ===1 && row.location==="Government Medical College and hospital blood bank" && row.bloodgroup === "B-") Bminus1  = Bminus1 - row.request_units + row.donate_units;
  if(row.status ===1 && row.location==="Government Medical College and hospital blood bank" && row.bloodgroup === "AB-") ABminus1  = ABminus1 - row.request_units + row.donate_units;
  if(row.status ===1 && row.location==="Government Medical College and hospital blood bank" && row.bloodgroup === "O-") Ominus1  = Ominus1 - row.request_units + row.donate_units;
  //
  if(row.status ===1 && row.location==="Government multi-speciality hospital blood bank" && row.bloodgroup === "A+") Aplus2  = Aplus2 - row.request_units + row.donate_units;
  if(row.status ===1 && row.location==="Government multi-speciality hospital blood bank" && row.bloodgroup === "B+") Bplus2  = Bplus2 - row.request_units + row.donate_units;
  if(row.status ===1 && row.location==="Government multi-speciality hospital blood bank" && row.bloodgroup === "AB+") ABplus2  = ABplus2 - row.request_units + row.donate_units;     
  if(row.status ===1 && row.location==="Government multi-speciality hospital blood bank" && row.bloodgroup === "O+") Oplus2  = Oplus2 - row.request_units + row.donate_units;
  if(row.status ===1 && row.location==="Government multi-speciality hospital blood bank" && row.bloodgroup === "A-") Aminus2  = Aminus2 - row.request_units + row.donate_units;
  if(row.status ===1 && row.location==="Government multi-speciality hospital blood bank" && row.bloodgroup === "B-") Bminus2  = Bminus2 - row.request_units + row.donate_units;
  if(row.status ===1 && row.location==="Government multi-speciality hospital blood bank" && row.bloodgroup === "AB-") ABminus2  = ABminus2 - row.request_units + row.donate_units;
  if(row.status ===1 && row.location==="Government multi-speciality hospital blood bank" && row.bloodgroup === "O-") Ominus2  = Ominus2 - row.request_units + row.donate_units;
  //
  if(row.status ===1 && row.location==="Blood Bank, PGI Chandigarh" && row.bloodgroup === "A+") Aplus3  = Aplus3 - row.request_units + row.donate_units;
  if(row.status ===1 && row.location==="Blood Bank, PGI Chandigarh" && row.bloodgroup === "B+") Bplus3  = Bplus3 - row.request_units + row.donate_units;
  if(row.status ===1 && row.location==="Blood Bank, PGI Chandigarh" && row.bloodgroup === "AB+") ABplus3  = ABplus3 - row.request_units + row.donate_units;     
  if(row.status ===1 && row.location==="Blood Bank, PGI Chandigarh" && row.bloodgroup === "O+") Oplus3  = Oplus3 - row.request_units + row.donate_units;
  if(row.status ===1 && row.location==="Blood Bank, PGI Chandigarh" && row.bloodgroup === "A-") Aminus3  = Aminus3 - row.request_units + row.donate_units;
  if(row.status ===1 && row.location==="Blood Bank, PGI Chandigarh" && row.bloodgroup === "B-") Bminus3  = Bminus3 - row.request_units + row.donate_units;
  if(row.status ===1 && row.location==="Blood Bank, PGI Chandigarh" && row.bloodgroup === "AB-") ABminus3  = ABminus3 - row.request_units + row.donate_units;
  if(row.status ===1 && row.location==="Blood Bank, PGI Chandigarh" && row.bloodgroup === "O-") Ominus3  = Ominus3 - row.request_units + row.donate_units;
  //
  if(row.status ===1 && row.location==="Rotary and blood bank society" && row.bloodgroup === "A+") Aplus4  = Aplus4 - row.request_units + row.donate_units;
  if(row.status ===1 && row.location==="Rotary and blood bank society" && row.bloodgroup === "B+") Bplus4  = Bplus4 - row.request_units + row.donate_units;
  if(row.status ===1 && row.location==="Rotary and blood bank society" && row.bloodgroup === "AB+") ABplus4  = ABplus4 - row.request_units + row.donate_units;     
  if(row.status ===1 && row.location==="Rotary and blood bank society" && row.bloodgroup === "O+") Oplus4  = Oplus4 - row.request_units + row.donate_units;
  if(row.status ===1 && row.location==="Rotary and blood bank society" && row.bloodgroup === "A-") Aminus4  = Aminus4 - row.request_units + row.donate_units;
  if(row.status ===1 && row.location==="Rotary and blood bank society" && row.bloodgroup === "B-") Bminus4  = Bminus4 - row.request_units + row.donate_units;
  if(row.status ===1 && row.location==="Rotary and blood bank society" && row.bloodgroup === "AB-") ABminus4  = ABminus4 - row.request_units + row.donate_units;
  if(row.status ===1 && row.location==="Rotary and blood bank society" && row.bloodgroup === "O-") Ominus4  = Ominus4 - row.request_units + row.donate_units;
  //
  if(row.status ===1 && row.location==="Indian Red cross Society" && row.bloodgroup === "A+") Aplus5  = Aplus5 - row.request_units + row.donate_units;
  if(row.status ===1 && row.location==="Indian Red cross Society" && row.bloodgroup === "B+") Bplus5  = Bplus5 - row.request_units + row.donate_units;
  if(row.status ===1 && row.location==="Indian Red cross Society" && row.bloodgroup === "AB+") ABplus5  = ABplus5 - row.request_units + row.donate_units;     
  if(row.status ===1 && row.location==="Indian Red cross Society" && row.bloodgroup === "O+") Oplus5  = Oplus5 - row.request_units + row.donate_units;
  if(row.status ===1 && row.location==="Indian Red cross Society" && row.bloodgroup === "A-") Aminus5  = Aminus5 - row.request_units + row.donate_units;
  if(row.status ===1 && row.location==="Indian Red cross Society" && row.bloodgroup === "B-") Bminus5  = Bminus5 - row.request_units + row.donate_units;
  if(row.status ===1 && row.location==="Indian Red cross Society" && row.bloodgroup === "AB-") ABminus5  = ABminus5 - row.request_units + row.donate_units;
  if(row.status ===1 && row.location==="Indian Red cross Society" && row.bloodgroup === "O-") Ominus5  = Ominus5 - row.request_units + row.donate_units;
  //
  if(row.status ===1 && row.location==="Blood Bank Services Sec Sixteen" && row.bloodgroup === "A+") Aplus6  = Aplus6 - row.request_units + row.donate_units;
  if(row.status ===1 && row.location==="Blood Bank Services Sec Sixteen" && row.bloodgroup === "B+") Bplus6  = Bplus6 - row.request_units + row.donate_units;
  if(row.status ===1 && row.location==="Blood Bank Services Sec Sixteen" && row.bloodgroup === "AB+") ABplus6  = ABplus6 - row.request_units + row.donate_units;     
  if(row.status ===1 && row.location==="Blood Bank Services Sec Sixteen" && row.bloodgroup === "O+") Oplus6  = Oplus6 - row.request_units + row.donate_units;
  if(row.status ===1 && row.location==="Blood Bank Services Sec Sixteen" && row.bloodgroup === "A-") Aminus6  = Aminus6 - row.request_units + row.donate_units;
  if(row.status ===1 && row.location==="Blood Bank Services Sec Sixteen" && row.bloodgroup === "B-") Bminus6  = Bminus6 - row.request_units + row.donate_units;
  if(row.status ===1 && row.location==="Blood Bank Services Sec Sixteen" && row.bloodgroup === "AB-") ABminus6  = ABminus6 - row.request_units + row.donate_units;
  if(row.status ===1 && row.location==="Blood Bank Services Sec Sixteen" && row.bloodgroup === "O-") Ominus6  = Ominus6 - row.request_units + row.donate_units;
  
})

const users=[
  {
    name: "Government Medical College and hospital blood bank",
    Aplus: Aplus1,Bplus: Bplus1,ABplus: ABplus1,Oplus: Oplus1,Aminus: Aminus1,Bminus: Bminus1,ABminus: ABminus1,Ominus: Ominus1
  },
  {
    name: "Government multi-speciality hospital blood bank",
    Aplus: Aplus2,Bplus: Bplus2,ABplus: ABplus2,Oplus: Oplus2,Aminus: Aminus2,Bminus: Bminus2,ABminus: ABminus2,Ominus: Ominus2
  },
  {
    name: "Blood Bank, PGI Chandigarh",
    Aplus: Aplus3,Bplus: Bplus3,ABplus: ABplus3,Oplus: Oplus3,Aminus: Aminus3,Bminus: Bminus3,ABminus: ABminus3,Ominus: Ominus3
  },
  {
    name: "Rotary and blood bank society",
    Aplus: Aplus4,Bplus: Bplus4,ABplus: ABplus4,Oplus: Oplus4,Aminus: Aminus4,Bminus: Bminus4,ABminus: ABminus4,Ominus: Ominus4
  },
  {
    name: "Indian Red cross Society",
    Aplus: Aplus5,Bplus: Bplus5,ABplus: ABplus5,Oplus: Oplus5,Aminus: Aminus5,Bminus: Bminus5,ABminus: ABminus5,Ominus: Ominus5
  },
  {
    name: "Blood Bank Services Sec Sixteen",
    Aplus: Aplus6,Bplus: Bplus6,ABplus: ABplus6,Oplus: Oplus6,Aminus: Aminus6,Bminus: Bminus6,ABminus: ABminus6,Ominus: Ominus6
  },

]
  return (
    <Grid container>
    <Grid item lg={2} xs={12} sm={2}>
      <Categories/>
    </Grid>
    <Grid container item xs={12} sm={10} lg={10} style={{ marginTop: 10, paddingLeft: 20}}>
        <Typography className={classes.heading}>
            <p style={{textAlign: "center" ,paddingLeft: 100}}>BLOODBANK DETAILS</p>
        </Typography>
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} aria-label="simple table">
      <colgroup>
        <col width="35%" />
        <col width="7.5%" />
        <col width="7.5%" />
        <col width="10%" />
        <col width="7.5%" />
        <col width="7.5%" />  
        <col width="7.5%" />
        <col width="10%" />
        <col width="7.5%" />
      </colgroup>
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeaderCell} style={{textAlign: "center"}}>Blood Bank</TableCell>
            <TableCell className={classes.tableHeaderCell} style={{textAlign: "center"}}>A+ (in ml)</TableCell>
            <TableCell className={classes.tableHeaderCell} style={{textAlign: "center"}}>B+  (in ml)</TableCell>
            <TableCell className={classes.tableHeaderCell} style={{textAlign: "center"}}>AB+ (in ml)</TableCell>
            <TableCell className={classes.tableHeaderCell} style={{textAlign: "center"}}>O+ (in ml)</TableCell>
            <TableCell className={classes.tableHeaderCell} style={{textAlign: "center"}}>A- (in ml)</TableCell>
            <TableCell className={classes.tableHeaderCell} style={{textAlign: "center"}}>B- (in ml)</TableCell>
            <TableCell className={classes.tableHeaderCell} style={{textAlign: "center"}}>AB- (in ml)</TableCell>
            <TableCell className={classes.tableHeaderCell} style={{textAlign: "center"}}>O- (in ml)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            <TableRow key={row.name}>
              <TableCell>
                  <Grid container>
                    
                      <Grid item lg={12}>
                          <Typography className={classes.name}>{row.name}</Typography>
                      </Grid>
                  </Grid>
                </TableCell>
              <TableCell>
                  <Typography color="primary" variant="subtitle2" style={{textAlign: "center"}} >{row.Aplus}</Typography>
              </TableCell>
              <TableCell>
                  <Typography color="primary" variant="subtitle2" style={{textAlign: "center"}} >{row.Bplus}</Typography>
              </TableCell>
              <TableCell>
                  <Typography color="primary" variant="subtitle2" style={{textAlign: "center"}} >{row.ABplus}</Typography>
              </TableCell>
              <TableCell>
                  <Typography color="primary" variant="subtitle2" style={{textAlign: "center"}} >{row.Oplus}</Typography>
              </TableCell>
              <TableCell>
                  <Typography color="primary" variant="subtitle2" style={{textAlign: "center"}} >{row.Aminus}</Typography>
              </TableCell>
              <TableCell>
                  <Typography color="primary" variant="subtitle2" style={{textAlign: "center"}} >{row.Bminus}</Typography>
              </TableCell>
              <TableCell>
                  <Typography color="primary" variant="subtitle2" style={{textAlign: "center"}} >{row.ABminus}</Typography>
              </TableCell>
              <TableCell>
                  <Typography color="primary" variant="subtitle2" style={{textAlign: "center"}} >{row.Ominus}</Typography>
              </TableCell>
              
            </TableRow>
            // ct=ct+1;
            // console.log(ct);
            
))}
        </TableBody>
        {/* <TableFooter>
        <TablePagination
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={USERS.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
        />
        </TableFooter> */}
      </Table>
    </TableContainer>
    </Grid>
    </Grid>
  );
}


export default Bloodbank;