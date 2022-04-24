import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { getAllPosts, deletePost} from '../service/api';
import { useState, useEffect, useContext } from 'react';
import { Link, useParams, useNavigate} from 'react-router-dom';
import { createPost } from '../service/api.js';
import { Button, FormControl, MenuItem, Select, InputLabel } from '@material-ui/core';

const useStyles = makeStyles({
    donor_container: {
        //minHeight: '110vh',
        //backgroundImage: 'url("https://4kwallpapers.com/images/wallpapers/waves-blue-gradient-background-stock-3200x2560-1166.jpg")',
        display: 'flex',
        // alignItems: 'center',
        padding: 50,
        justifyContent: 'center'
    },
    
    donor_form_container: {
        width: 500,
        height: 600,
        display: 'flex',
        borderRadius: 10,
        boxShadow: '0 3px 3px -2px rgb(0 0 0 / 20%),0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)',
        // opacity: 8
    },
    
    left: {
        flex: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#edf5f3',
        border: 'black',
        borderRadius: 10,
    },
    
    form_container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    
    input: {
        // outline: 'none',
        border: 'none',
        width: 200,
        padding: 15,
        borderRadius: 10,
        backgroundColor: 'white',
        margin: '5px 0',
        fontSize: 14
    },
    
    error_msg: {
        width: 370,
        padding: 15,
        margin: '5px 0',
        fontSize: '14px',
        backgroundColor: '#f34646',
        color: 'white',
        borderRadius: 5,
        textAlign: 'center'
    },
    
    right: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        
    },
    
    label: {
        
        textAlign: 'left',
        fontSize: 20,
        paddingRight: 10,
        paddingTop: 15
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
    },

    btn1: {
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
})


const RequestBlood = () => {
    const user= JSON.parse(localStorage.getItem('token'));
    const [data, setData] = useState({
		    
        createdDate: new Date(),
        name : user.name,
        age : user.age,
        Imageurl : user.Imageurl,
        phone : user.phone,
        // disease: user.disease,
        bloodgroup: user.bloodgroup,
        location: user.location,

        email: user.email,
        // password: user.name,
        donate_units: 0,
        request_units: 0
    });
    const [category, setCategory] = useState('General');
	const [error, setError] = useState("");
    const navigate =  useNavigate();
	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};
    
    const savePost = async (e) => {
		// e.preventDefault();
        const x=data.request_units;
        data.request_units=parseInt(x);
        await createPost(data);
        // console.log(data);
        navigate('/BloodRequests');
    }
    const handleMenu = (e) => {
         setCategory(e.target.value);
         setData({ ...data, [e.target.name]: e.target.value });
     }

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8000/Donate";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			window.location = "/BloodRequests";
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

    const classes = useStyles();
    return (
		<div className={classes.donor_container}>
			<div className={classes.donor_form_container}>
				<div className={classes.left}>
					<form className={classes.form_container} onSubmit={handleSubmit}>
						<h1 style={{fontSize: 40, marginTop: 0, marginBottom: 50}}>Request Blood </h1>
						
                        {/* <div className="form-row" style={{width: 350}}>
                        <label className={classes.label} style={{paddingRight: 40}}>Blood Group: </label>
                            <div className="value">
                                <div className="input-group">
                                    <div className="rs-select2 js-select-simple select--no-search" style={{paddingTop:15}}>
                                        <select name="bloodgroup">
                                            <option disabled="disabled" selected="selected">Choose option</option>
                                            <option>O+</option>
                                            <option>O-</option>
                                            <option>A+</option>
                                            <option>A-</option>
                                            <option>B+</option>
                                            <option>B-</option>
                                            <option>AB+</option>
                                            <option>AB-</option>
                                        </select>
                                        <div className="select-dropdown"></div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <FormControl className={classes.fields}>
                        {/* <InputLabel id="demo-simple-select-label">BloodBank</InputLabel> */}
                        <div className="form-row" style={{width: 350}}>
                        <div className={classes.label} style={{paddingRight: 40}}>BloodBank: </div>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value = {category}
                                name = "location"
                                onChange = {handleMenu}
                                // width = '100'
                            >
                            <MenuItem   value = {'Blood Bank, PGI Chandigarh'}>Blood Bank, PGI Chandigarh</MenuItem>
                            <MenuItem   value = {'Rotary and blood bank society'}>Rotary and blood bank society</MenuItem>
                            <MenuItem   value = {'Indian Red cross Society'} >Indian Red cross Society</MenuItem>
                            <MenuItem   value = {'Blood Bank Services Sec Sixteen'}>Blood Bank Services Sec Sixteen</MenuItem>
                            <MenuItem   value = {'Government Medical College and hospital blood bank'}>Government Medical College and hospital blood bank</MenuItem>
                            <MenuItem   value = {'Government multi-speciality hospital blood bank'}>Government multi-speciality hospital blood bank</MenuItem>
                            </Select>
                        </div>
                    </FormControl>

                        <div className="form-row" style={{width: 350}}>
                          
                            <div className={classes.label} style={{paddingRight: 35}}>Units (in ml): </div>
                            
                            <div className="value">
                                <div className="input-group">
                                <input
                                    type="text"
                                    placeholder="0"
                                    name="request_units"
                                    onChange={handleChange}
                                    // value={data.name}
                                    value={data.request_units}
                                    required
                                    className={classes.input}
                                    style={{marginBottom: 20}}
                                />
                                </div>
                            </div>
                        </div>

                        <div className="form-row" style={{width: 350}}>
                        <div className={classes.label} style={{paddingRight: 80}}>Reason:</div>
                            <div className="value">
                            <div className="input-group">
                                <input
                                    type="text"
                                    placeholder=""
                                    name="disease"
                                    onChange={handleChange}
                                    value={data.disease}
                                    required
                                    className={classes.input}
                                    style={{marginBottom: 20}}
                                />
                            </div>
                            </div>
                        </div>
						{/* {error && <div className={classes.error_msg}>{error}</div>} */}
                        <button type="submit" className={classes.btn} onClick = {() => savePost()}>
                            Request Blood
						</button>
						
                        <br/>
                       
					</form>
                    
                    
				</div>
				
			</div>
		</div>
	);
};

export default RequestBlood;