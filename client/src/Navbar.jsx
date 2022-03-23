import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, makeStyles, Button } from '@material-ui/core'; 

const useStyle = makeStyles({
   
    container: {
        justifyContent: 'center',
        '&  >*': {
            padding: 20,
            color: 'black',
            textDecoration: 'none'
        }
    }
})

const Navbar = () => {
    const classes = useStyle();
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-danger ">
                <a className="navbar-brand text-white font-weight-bold" href="#">  
                    <img src="https://www.nicepng.com/png/detail/364-3647802_blood-symbol-png-blood-donation-app-logo.png" width="50" height="50" alt=""/>
                    Blood Management System </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                    <a className="nav-link font-weight-bold" href="#" >
                        <img src="https://cdn-icons-png.flaticon.com/512/25/25694.png" width="25" height="25" alt=""/>
                        
                        <Link to='/' style={{ color: 'inherit', textDecoration: 'inherit'}}>Home </Link>
                        
                        <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link font-weight-bold" href="#">
                        <Link to="/About" style={{ color: 'inherit', textDecoration: 'inherit'}} >About Us</Link>
                        <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link font-weight-bold" href="#">Want to Donate <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link font-weight-bold" href="#">
                        <Link to='/Lookingforblood' style={{ color: 'inherit', textDecoration: 'inherit'}}>Looking for Blood </Link>? 
                        <span className="sr-only">(current)</span></a>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <button type="button" className="btn btn-light  btn-lg">Sign In</button>
                </form>
                </div>
            </nav>
        </>
    )
}
 export default Navbar;