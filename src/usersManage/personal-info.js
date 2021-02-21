import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
}));

function PersonalInfo(props) {
    // const [personalUser, setPersonalUser] = useState({
    //     alias: '',
    //     email: '',
    //     firstName: '',
    //     mobile: '',
    //     lastName: ''

    // })

    // const onChangeHandler = (e) => {
    //     setPersonalUser({ ...personalUser, [e.target.name]: e.target.value })
    // }
    // const submitHandler = () => {
    //     alert('submitted successfully')
    // }
    const { alias, firstName, lastName, email, mobile } = props.personalUser
    const classes = useStyles();
    console.log('props', props.error)
    // const error = props.error.map((error, index) => {
    //     return <li>{error}</li>
    // })
    return (<div>

        <form className={classes.root} onSubmit={props.onSubmit} noValidate>
            {/* {error} */}
            <div>
                <TextField label="Alias" required id="standard-size-small"
                    size="small" variant='outlined'
                    onChange={props.changeHandler}
                    name='alias'
                    value={alias}
                />
                <TextField label="Email" required id="standard-size-small"
                    size="small" variant='outlined'
                    onChange={props.changeHandler}
                    name='email'
                    value={email}
                />
            </div>
            <div>
                <TextField label="First Name" required id="standard-size-small"
                    size="small" variant='outlined'
                    onChange={props.changeHandler}
                    name='firstName'
                    value={firstName}
                />
                <TextField label="Mobile" required id="standard-size-small"
                    size="small" variant='outlined'
                    onChange={props.changeHandler}
                    name='mobile'
                    value={mobile}
                />
            </div>
            <div>
                <TextField label="Last Name" required id="standard-size-small"
                    size="small" variant='outlined'
                    onChange={props.changeHandler}
                    name='lastName'
                    value={lastName}
                />
            </div>
            <Button type='submit' variant="contained" color="primary">
                Save
           </Button>
        </form>
    </div>)
}

export default PersonalInfo