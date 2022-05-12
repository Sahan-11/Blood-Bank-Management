import { makeStyles, Box, Typography, Grid } from '@material-ui/core';
import { getAllDonors } from "../service/api";
import { useState, useEffect, useContext } from 'react';

//All blood grp components

const useStyle = makeStyles({
    container: {
        border: '1px solid #d3cede',
        borderRadius: 10,
        margin: 20,
        display: 'flex',
        //alignItems: 'center',
        flexDirection: 'column',
        height: 150,
        maxWidth: 250,
        '& > *': {
            padding: '0 5px 5px 5px'
        }
    },
    
    textColor: {
        color: '#878787',
        fontSize: 12,
        
    },
    heading: {
        fontSize: 25,
        fontWeight: 600,
        paddingLeft: 20,
        paddingTop: 10
    },
    detail: {
        paddingLeft: 20,
        paddingTop: 30,
        fontSize: 16,
        
        wordBreak: 'break-word'
    }
})

const Post = () => {
    const classes = useStyle();
    const url = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80';
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
    let Aplus=3000,Bplus=3000,ABplus=3000,Oplus=3000,Aminus=3000,Bminus=3000,ABminus=3000,Ominus=3000;
    posts.map((row) => {
        if(row.status ===1 && row.donate_units === 0 && row.bloodgroup === "A+") Aplus  = Aplus - row.request_units;
        if(row.status ===1 && row.donate_units === 0 && row.bloodgroup === "B+") Bplus  = Bplus - row.request_units;
        if(row.status ===1 && row.donate_units === 0 && row.bloodgroup === "AB+") ABplus  = ABplus - row.request_units;
        if(row.status ===1 && row.donate_units === 0 && row.bloodgroup === "O+") Oplus  = Oplus - row.request_units;
        if(row.status ===1 && row.donate_units === 0 && row.bloodgroup === "A-") Aminus  = Aminus - row.request_units;
        if(row.status ===1 && row.donate_units === 0 && row.bloodgroup === "B-") Bminus  = Bminus - row.request_units;
        if(row.status ===1 && row.donate_units === 0 && row.bloodgroup === "AB-") ABminus  = ABminus - row.request_units;
        if(row.status ===1 && row.donate_units === 0 && row.bloodgroup === "O-") Ominus  = Ominus - row.request_units;
        if(row.status ===1 && row.request_units === 0 && row.bloodgroup === "A+") Aplus  = Aplus + row.donate_units;
        if(row.status ===1 && row.request_units === 0 && row.bloodgroup === "B+") Bplus  = Bplus + row.donate_units;
        if(row.status ===1 && row.request_units === 0 && row.bloodgroup === "AB+") ABplus  = ABplus + row.donate_units;
        if(row.status ===1 && row.request_units === 0 && row.bloodgroup === "O+") Oplus  = Oplus + row.donate_units;
        if(row.status ===1 && row.request_units === 0 && row.bloodgroup === "A-") Aminus  = Aminus + row.donate_units;
        if(row.status ===1 && row.request_units === 0 && row.bloodgroup === "B-") Bminus  = Bminus + row.donate_units;
        if(row.status ===1 && row.request_units === 0 && row.bloodgroup === "AB-") ABminus  = ABminus + row.donate_units;
        if(row.status ===1 && row.request_units === 0 && row.bloodgroup === "O-") Ominus  = Ominus + row.donate_units;
      })
    const bloodgroup = [
        {
            bg: "A+",
            num: Aplus 
        },
        {
            bg: "B+",
            num: Bplus 
        }, 
        {
            bg: "AB+",
            num: ABplus 
        }, 
        {
            bg: "O+",
            num: Oplus 
        },
        {
            bg: "A-",
            num: Aminus 
        }, 
        {
            bg: "B-",
            num: Bminus 
        },
        {
            bg: "AB-",
            num: ABminus 
        },
        {
            bg: "O-",
            num: Ominus 
        }
        
    ];

    return (
        
        bloodgroup.map(post=>(
        <Grid item lg={3} sm={4} xs={12}>
        <Box className={classes.container}>
            {/* <img src={url} alt="post" className={classes.image} /> */}
            <Typography className={classes.heading}>
                {post.bg}
                <img src="https://cdn-icons-png.flaticon.com/512/893/893529.png" align="right"width="40" height="40" alt=""/>

            </Typography>

            <Typography className={classes.detail}>Quantity: {post.num}</Typography>
        </Box>    
        </Grid>
        ))
        
        
    )
}

export default Post;