import { makeStyles, Typography} from '@material-ui/core';
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const useStyles = makeStyles({
    login_container: {
        //minHeight: '110vh',
        //backgroundImage: 'url("https://4kwallpapers.com/images/wallpapers/waves-blue-gradient-background-stock-3200x2560-1166.jpg")',
        display: 'flex',
        // alignItems: 'center',
        padding: 50,
        justifyContent: 'center'
    },
    
    login_form_container: {
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
        width: 370,
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
        backgroundColor: 'red',
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
    
    // right_h1: {
    //     marginTop: 0,
    //     color: 'white',
    //     fontSize: 40,
    //     alignSelf: 'center'
    // },
    
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


const AdminDetails = () => {
    
    const [data, setData] = useState({
		name: "",
		email: "",
		password: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

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

	const classes = useStyles();
    return (
		<div className={classes.login_container}>
			<div className={classes.login_form_container}>
				<div className={classes.left}>
					<form className={classes.form_container} onSubmit={handleSubmit}>
						<h1 style={{fontSize: 40, marginTop: 0, marginBottom: 50}}>Create New Account </h1>
                        <input
							type="text"
							placeholder="Name"
							name="name"
							onChange={handleChange}
							value={data.name}
							required
							className={classes.input}
                            style={{marginBottom: 20}}
						/>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={classes.input}
                            style={{marginBottom: 20}}
						/>
                        
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={classes.input}
                            style={{marginBottom: 20}}
						/>
                        {/* <input
							type="password"
							placeholder="Confirm Password"
							name="confirm password"
							// onChange={handleChange}
							// value={data.password}
							// required
							className={classes.input}
                            style={{marginBottom: 20}}
						/> */}
						{error && <div className={classes.error_msg}>{error}</div>}
                        <button type="submit" className={classes.btn}>
                                Create Account
                        </button>
                        {/* <Link to='/Userdetails' className={classes.link}> 
                            <button type="submit" className={classes.btn}>
                                Create Account
                            </button>
                        </Link> */}
                        <br/>
                        
					</form>
                    
                    
				</div>
				
			</div>
		</div>
	);
};

export default AdminDetails;