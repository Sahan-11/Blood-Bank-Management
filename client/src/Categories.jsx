import { Button, Table, TableHead, TableRow, TableCell, TableBody, makeStyles, Grid } from '@material-ui/core';

// import { categories } from '../../constants/data';
import { Link} from 'react-router-dom';

//  let categories=[];
 
const categories = [
    {
        name: "User",
        url: "User"
    },
    {
        name: "Donations",
        url: "Donations"
    },
    {
        name: "Blood Requests",
        url: "BloodRequests"
    },
    {
        name: "Stock Inquiry",
        url: "StockInquiry"
    },
    {
        name: "History",
        url: "History"
    },
    
    
];

const useStyle = makeStyles({
    table: {
        border: '1px solid rgba(224, 224, 224, 1)'
    },
    write: {
        margin: 20,
        width: '85%',
        background: '#0925A6',
        // background: theme.palette.primary.dark,
        color: '#fff',
        textDecoration: 'none'
    },
    link: {
        textDecoration: 'none',
        color: 'inherit'
    }
})

const Categories = ({ match }) => {
    const classes = useStyle();
    //const location = useLocation();
    //let params = new URLSearchParams(location.search);
    return (
        <>
        <Link to='/create' className={classes.link}> 
            <Button variant="contained" className={classes.write} >New User</Button>
        </Link>
            
            <Table className={classes.table}>
                <TableHead>
                    <TableCell>
                    <Link to='/' style={{ color: 'inherit', textDecoration: 'inherit'}}>Home </Link>  
                    </TableCell>
                 
                </TableHead>
                <TableBody>
                    {
                        categories.map(category => (
                            <TableRow>
                                <TableCell>    
                                <Link to={`/${category.url}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>{category.name} </Link>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </>
    )
}

export default Categories;