import { Box, makeStyles, Typography, Link, Grid } from "@material-ui/core";
import Categories from "../Categories";
import { useState, useEffect, useContext } from 'react';
import Post from "./Post";
import { getAllDonors } from "../service/api";

const useStyles = makeStyles({
  banner: {
    backgroundImage: `url(${"https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg"})`,
    width: "100%",
    height: "50vh",
    backgroundPosition: "left 0px bottom 0px",
    backgroundSize: "cover"
  },
  wrapper: {
    padding: 20,
    "& > *": {
      marginTop: 50
    }
  },
  text: {
    color: "#878787"
  },
  container: {
    border: "1px solid #d3cede",
    borderRadius: 10,
    margin: 20,
    display: "flex",
    //alignItems: 'center',
    flexDirection: "column",
    height: 150,
    maxWidth: 250,
    "& > *": {
      padding: "0 5px 5px 5px"
    }
  },
  heading: {
    fontSize: 18,
    fontWeight: 600,
    paddingLeft: 10,
    paddingTop: 30
  },
  detail: {
    paddingLeft: 20,
    paddingTop: 10,
    fontSize: 16,
    wordBreak: "break-word"
  }
});

const BloodGroup = () => {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    // console.log(id);
    const fetchData = async () => {
        let data = await getAllDonors();
        console.log(data);
        setPosts(data);
    }
    fetchData();
}, [])
  let req=0;let don=0;let total=24000,acc=0;
  posts.map((row) => {
    if(row.donate_units === 0) req  = req + 1;
    if(row.status===1 && row.donate_units === 0) acc  = acc + 1;
    if(row.status ===1 && row.request_units === 0) don  = don + 1;
    if(row.status ===1 && row.donate_units === 0) total  = total - row.request_units;
    if(row.status ===1 && row.donate_units === 0) total  = total + row.donate_units;
  })



  return (
    <Box className="classes.container" style={{ marginBottom: 50 }}>
      <Grid container>
        <Grid item lg={2} xs={12} sm={2}>
          <Categories />
        </Grid>
        <Grid container item xs={12} sm={10} lg={10} style={{ marginTop: 50 }}>
          <Post />

          <Grid item lg={3} sm={4} xs={12} >
            <Box className={classes.container}>
              <Typography className={classes.heading}>
                <span>Total Requests</span>
                <img
                  src="request.png"
                  align="right"
                  width="50"
                  height="50"
                  alt=""
                />
              </Typography>

              <Typography className={classes.detail}> {req}</Typography>
            </Box>
          </Grid>
          <Grid item lg={3} sm={4} xs={12} >
            <Box className={classes.container}>
              <Typography className={classes.heading}>
                <span>Approved Requests</span>
                <img
                  src="approved.png"
                  align="right"
                  width="50"
                  height="50"
                  alt=""
                />
              </Typography>

              <Typography className={classes.detail}> {acc}</Typography>
            </Box>
          </Grid>
          <Grid item lg={3} sm={4} xs={12} >
            <Box className={classes.container}>
              <Typography className={classes.heading}>
                <span>Total Donors</span>
                <img
                  src="donor.png"
                  align="right"
                  width="50"
                  height="50"
                  alt=""
                />
              </Typography>

              <Typography className={classes.detail}> {don}</Typography>
            </Box>
          </Grid>
          <Grid item lg={3} sm={4} xs={12} >
            <Box className={classes.container}>
              <Typography className={classes.heading}>
                <span>Total Blood Units(ml)</span>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1477/1477227.png"
                  align="right"
                  width="50"
                  height="50"
                  alt=""
                />
              </Typography>

              <Typography className={classes.detail}> {total}</Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BloodGroup;
