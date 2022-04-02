import React, { useState, useEffect, useContext } from 'react';
import { Box, makeStyles, TextareaAutosize, Button, FormControl, InputBase, TextField, MenuItem, Select, InputLabel } from '@material-ui/core';
import { AddCircle} from '@material-ui/icons';
import { useNavigate, useHistory } from 'react-router-dom';

import { createPost } from '../service/api.js';
import { getPost } from '../service/api.js';

// import { LoginContext } from '../../context/ContextProvider';

const useStyle = makeStyles(theme => ({
    container: {
        margin: '50px 100px',
        [theme.breakpoints.down('md')]: {
            margin: 0
        },
    },
    image: {
        width: '100%',
        height: '50vh',
        objectFit: 'cover'
    },
    title: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        float : "right"
    },
    textfield: {
        flex: 1,
        margin: '0 30px',
        fontSize: 25,
        marginBottem : 5
    },
    textarea: {
        width: '100%',
        border: 'none',
        margin: 50,
        fontSize: 18,
        '&:focus-visible': {
            outline: 'none'
        }
    },
    image : {
        width : '20%',
        display: 'flex',
        margin : "auto"
    },
    fields : {
        margin : 50,
        width : '20%'
    },
    centre : {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}));

const initialPost = {
    title: '',
    description: '',
    picture: '',
    username: 'Sahan',
    createdDate: new Date(),
    NAME : '',
    AGE : '',
    Imageurl : '',
    PHONE : '',
    DISEASE: 'NIL',
    BLOODGROUP: '',
    LOCATION: '',
    EmailId: ''

}

const UpdateView = () => {
    const classes = useStyle();
    const navigate =   useNavigate();

    const [post, setPost] = useState(initialPost);
    // const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            let data = await getPost(match.params.id);
            setPost(data);
        }
        fetchData();
    }, []);

    const url = 'user.png';

    const savePost = async () => {
        await createPost(post);
        navigate('/');
    }

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    }

    return (
        <Box className={classes.container}>
            <img src={url} alt="post" className={classes.image} />
            
            <TextField id="standard-basic" label="Name" variant="outlined" 
                className={classes.fields}
                onChange = {(e) =>handleChange(e)}
                name = 'NAME'
            
            />
            <TextField id="standard-basic" label="Age" variant="outlined"
                className={classes.fields}
                onChange = {(e) =>handleChange(e)}
                name = 'AGE'
                
            />
            <TextField id="standard-basic" label="Phone Number" variant="outlined"
                className={classes.fields}
                onChange = {(e) =>handleChange(e)}
                name = 'PHONE'
            />
            <TextField id="standard-basic" label="Blood Group" variant="outlined"
                className={classes.fields}
                onChange = {(e) =>handleChange(e)}
                name = 'BLOODGROUP'
            />
            <TextField id="standard-basic" label="Email Id" variant="outlined"
                className={classes.fields}
                onChange = {(e) =>handleChange(e)}
                name = 'EmailId'
            />
            <TextField id="standard-basic" label="Location" variant="outlined"
                className={classes.fields}
                onChange = {(e) =>handleChange(e)}
                name = 'LOCATION'
            />
            <TextField id="standard-basic" label="Disease(If Any)" variant="outlined"
                className={classes.fields}
                onChange = {(e) =>handleChange(e)}
                name = 'DISEASE'
            />
            <TextField id="standard-basic" label="Image URL" variant="outlined"
                className={classes.fields}
                onChange = {(e) =>handleChange(e)}
                name = 'Imageurl'
            />
            <br/>
            <div className={classes.centre}>
                <Button onClick = {() => savePost()} variant="contained" color="primary" >Update</Button>
            </div>
        </Box>
    )
}

export default UpdateView;
