import { makeStyles, Box, Typography, Grid } from '@material-ui/core';

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
    const posts = [
        "A+",
        "B+",
        "O+",
        "AB+",
        "A-",
        "B-",
        "O-",
        "AB-",
    ];

    return (
        
        posts.map(post=>(
        <Grid item lg={3} sm={4} xs={12}>
        <Box className={classes.container}>
            {/* <img src={url} alt="post" className={classes.image} /> */}
            <Typography className={classes.heading}>
                {post}
                <img src="https://cdn-icons-png.flaticon.com/512/893/893529.png" align="right"width="40" height="40" alt=""/>

            </Typography>

            <Typography className={classes.detail}>Quantity: 5</Typography>
        </Box>    
        </Grid>
        ))
        
        
    )
}

export default Post;