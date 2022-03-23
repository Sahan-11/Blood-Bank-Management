import { Box, makeStyles, Typography, Link, Grid } from "@material-ui/core";
import Categories from "../Categories";
import MTable from "./Table";




const useStyles = makeStyles({
    
    text: {
      color: "#878787"
    },
    
    heading: {
      fontSize: 18,
      fontWeight: 600,
      paddingLeft: 10,
      paddingTop: 30,
      align: 'center',
    },
    detail: {
      paddingLeft: 20,
      paddingTop: 10,
      fontSize: 16,
      wordBreak: "break-word"
    }
  });
  
  const Donation = () => {
    const classes = useStyles();
    return (
        
      <Box className="classes.container" style={{ marginBottom: 50 }}>
        <Grid container>
          <Grid item lg={2} xs={12} sm={2}>
            <Categories/>
          </Grid>
            
          <Grid xs={12} sm={10} lg={10} style={{ marginTop: 10, paddingLeft: 20}}>
            {/* <h4 class="text-center">BLOOD DONATION DETAILS</h4> */}
            <Typography className={classes.heading}>
            <p style={{textAlign: "center"}}>BLOOD DONATION DETAILS</p>
            </Typography>
            
            <MTable/>
            
            </Grid>
          </Grid>
      </Box>
    );
  };
  
  
  
  export default Donation;