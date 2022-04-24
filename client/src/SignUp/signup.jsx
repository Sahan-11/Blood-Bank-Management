

import React, { useState, useEffect, useContext } from 'react';
import { Box, makeStyles, TextareaAutosize, Button, FormControl, InputBase, TextField, MenuItem, Select, InputLabel } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

// import { createPost } from '../service/api.js';
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
        paddingBottom: 10,
        textAlign: 'center'
        // display: 'flex',
        // flexDirection: 'row',
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
    error_msg: {
        width: 370,
        padding: 15,
        margin: '5px 0',
        fontSize: '14px',
        backgroundColor: 'red',
        color: 'white',
        borderRadius: 5,
        textAlign: 'center'
    },

    centre : {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        border: 'none',
        outline: 'none',
        padding: '12px 0',
        borderRadius: 20,
        width: 180,
        fontWeight: 'bold',
        fontSize: 14,
        cursor: 'pointer',
        backgroundColor: '#0925A6',
        color: 'white',
        margin: 10
    }
}));

// const initialPost = {

//     picture: '',
//     createdDate: new Date(),
//     name : '',
//     age : '',
//     Imageurl : '',
//     phone : '',
//     disease: 'NIL',
//     bloodgroup: '',
//     location: '',
//     email: '',
//     password: ''

// }

const Signup = () => {
    
    const [data, setData] = useState({
		    
            createdDate: new Date(),
            name : '',
            age : '',
            Imageurl : 'user.png',
            phone : '',
            bloodgroup: '',
            location: '',
            email: '',
            password: ''
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();
    const url1 = data.Imageurl || 'user.png';
    
	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
            
			const url = "http://localhost:8000/Signup";
			const { data: res } = await axios.post(url, data);
			navigate("/login");
			console.log(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	const classes = useStyle();

    return (
        <form className={classes.container} onSubmit={handleSubmit}>
            <h1 className={classes.title}>Create New Account</h1>
            <img src={url1} alt="post" className={classes.image} />
            
            <TextField id="standard-basic" label="Name" variant="outlined" 
            	type="text"
                className={classes.fields}
                onChange = {(e) =>handleChange(e)}
                name = 'name'
                required
                autoComplete="off"
            />
            <TextField id="standard-basic" label="Email Id" variant="outlined"
                type="email"
                className={classes.fields}
                onChange = {(e) =>handleChange(e)}
                name = 'email'
                required
                autoComplete="off"
            />
            <TextField id="standard-basic" label="Password" variant="outlined"
                type="password"
                className={classes.fields}
                onChange = {(e) =>handleChange(e)}
                name = 'password'
                autoComplete="off"
                required
            />
            <TextField id="standard-basic" label="Age" variant="outlined"
                className={classes.fields}
                onChange = {(e) =>handleChange(e)}
                autoComplete="off"
                name = 'age'
                required
            />
            <TextField id="standard-basic" label="Phone Number" variant="outlined"
                className={classes.fields}
                onChange = {(e) =>handleChange(e)}
                name = 'phone'
                autoComplete="off"
                required
            />
            <TextField id="standard-basic" label="Blood Group" variant="outlined"
                className={classes.fields}
                onChange = {(e) =>handleChange(e)}
                name = 'bloodgroup'
                autoComplete="off"
                required
            />
            
            <TextField id="standard-basic" label="Address" variant="outlined"
                className={classes.fields}
                onChange = {(e) =>handleChange(e)}
                autoComplete="off"
                name = 'location'
                required
            />
            {/* <TextField id="standard-basic" label="Disease(If Any)" variant="outlined"
                className={classes.fields}
                onChange = {(e) =>handleChange(e)}
                autoComplete="off"
                name = 'disease'
            /> */}
            <TextField id="standard-basic" label="Image URL" variant="outlined"
                className={classes.fields}
                onChange = {(e) =>handleChange(e)}
                autoComplete="off"
                name = 'Imageurl'
            />
            <br/>
            {error && <div className={classes.error_msg}>{error}</div>}
            <div className={classes.centre} >
                    <button type="submit" className={classes.btn}>
						Create Account
					</button>
                {/* <Button onClick = {() => handleSubmit()} variant="contained" color="primary" >Create Account</Button> */}
            </div>
        </form>
    )
}

export default Signup;
