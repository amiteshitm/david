import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import UserList from '../usersManage/userlist'
import PersonalInfo from '../usersManage/personal-info'
import AccessControl from '../usersManage/access-control'
import Alert from '@material-ui/lab/Alert';
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function ScrollableTabsButtonAuto() {
    const classes = useStyles();
    let validationError = []
    let [validationError1, setvalidationError1] = React.useState(validationError);

    const [value, setValue] = React.useState(0);
    const [personalUser, setPersonalUser] = useState({
        alias: '',
        email: '',
        firstName: '',
        mobile: '',
        lastName: ''

    })
    const [controlUser, setControlUser] = useState({
        userName: '',
        employeeNo: '',
        password: '',
        rfId: '',

    })

    const onChangeControlUserHandler = (e) => {
        setControlUser({ ...controlUser, [e.target.name]: e.target.value })
    }
    const onChangePersonalUserHandler = (e) => {
        setPersonalUser({ ...personalUser, [e.target.name]: e.target.value })
    }


    const submitHandler = (e) => {
        e.preventDefault()
        const { alias, email, firstName, mobile, lastName } = personalUser
        const { userName, employeeNo, password, rfId } = controlUser
        validationError = []

        if (alias === '') {
            validationError.push('Please fill in alias.')

        }
        if (email === '') {
            validationError.push('Please fill in email.')
        }
        if (firstName === '') {
            validationError.push('Please fill in firstname.')
        }
        if (mobile === '') {
            validationError.push('Please fill in mobile.')
        }
        if (lastName === '') {
            validationError.push('Please fill in LastName.')
        }
        if (userName === '') {
            validationError.push('Please fill in userName.')
        }
        if (employeeNo === '') {
            validationError.push('Please fill in employeeNo.')
        }

        if (password === '') {
            validationError.push('Please fill in password.')

        }
        if (rfId === '') {
            validationError.push('Please fill in rfId.')

        }

        setvalidationError1(validationError)
        console.log('vadi', validationError1)

        if (validationError.length === 0) {
            alert('submitted successfully')
        }
        // if (alias && email && firstName && mobile && lastName && userName && employeeNo && password && rfId) {
        //     alert('submitted successfully')
        // }
        // else {
        //     alert('field is not filled')
        // }
        // console.log('validtion', validationError)
    }
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const error = validationError1.map((error, index) => {
        return <li>{error}</li>
    })
    return (
        <div className={classes.root}>

            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <UserList />
                </Grid>
                <Grid item xs={8}>
                    {validationError1 ? <Alert severity="error">  {error}</Alert> : null}

                    <AppBar position="static" color="default">

                        <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            variant="scrollable"
                            scrollButtons="auto"
                            aria-label="scrollable auto tabs example"
                        >
                            <Tab label="Personal Information" {...a11yProps(0)} />
                            <Tab label="Access Control" {...a11yProps(1)} />

                        </Tabs>
                    </AppBar>
                    <TabPanel value={value} index={0}>
                        <PersonalInfo onSubmit={submitHandler} changeHandler={onChangePersonalUserHandler} personalUser={personalUser} />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <AccessControl onSubmit={submitHandler} changeHandler={onChangeControlUserHandler} controlUser={controlUser} />
                    </TabPanel>
                </Grid>
            </Grid>
        </div>
    );
}
