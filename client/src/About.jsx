import { Box, makeStyles, Typography, Link } from '@material-ui/core';
import { GitHub, Instagram, Email } from '@material-ui/icons';

const useStyles = makeStyles({
    banner: {
        backgroundImage: `url(${'https://www.bbh.org.in/wp-content/uploads/2019/12/Blood-Bank-1.jpg'})`,
        width: '100%',
        height: '70vh',
        // backgroundSize: '100% 100%',
        backgroundPosition: 'left 0px bottom 0px',
        backgroundSize: 'cover'
    },
    wrapper: {
        padding: 20,
        '& > *': {
            marginTop: 30
        }
    },
    text: {
        color: '#878787'
    }
})

const About = () => {
    const classes = useStyles();
    return (
        <Box>
            <Box className={classes.banner}></Box>
            <Box className={classes.wrapper}>
                <Typography variant="h3">Blood Management System</Typography>
                <Typography variant="h5" className={classes.text}>
                   The Blood Bank Management System website is a part of our Development Engineering project. 
                   <br />
                   This project is being mentored by Dr. Ranjana Sodhi. The Group Members of the project are:
                <ol>
                    <li>Aman Battan</li>
                    <li>Amritanshu Rai</li>
                    <li>Andhale Shreyash Kishor</li>
                    <li>Anurag</li>
                    <li>D V Sahan</li>
                </ol>
                </Typography>
                <Typography variant="h5" className={classes.text}>
                    This Blood Bank Management System allows for better allocation of resources and minimise the waiting time for patients in need. The website will track the amount of different types of blood groups in different facilities and provide data to patients.
                <br />
                The main objectives of this web based system are:
                <ol>
                    <li>Maintain record of available blood types.</li>
                    <li>Monitor the quality and quantity of donated blood.</li>
                    <li>Prevent wastage of blood.</li>
                    <li>Secure Login and Dashboard</li>
                </ol>
                </Typography>
                
            </Box>
        </Box>
        
    )
}

export default About;