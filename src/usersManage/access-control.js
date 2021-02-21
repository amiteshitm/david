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

function AccessControl(props) {
    // const [controlUser, setControlUser] = useState({
    //     userName: '',
    //     employeeNo: '',
    //     password: '',
    //     rfId: '',

    // })

    // const onChangeHandler = (e) => {
    //     setControlUser({ ...controlUser, [e.target.name]: e.target.value })
    // }
    // const submitHandler = () => {
    //     alert('submitted successfully')
    // }
    const { userName, employeeNo, password, rfId } = props.controlUser

    const classes = useStyles();

    return (<div>
        {/* <div>{props.error.map(error => {
            return <li>{error}</li>
        })}</div> */}
        <form noValidate className={classes.root} onSubmit={props.onSubmit}>
            <div>
                <TextField label="Username" required id="standard-size-small"
                    size="small" variant='outlined'
                    onChange={props.changeHandler}
                    name='userName'
                    value={userName}
                />
                <TextField label="Employee No" required id="standard-size-small"
                    size="small" variant='outlined'
                    onChange={props.changeHandler}
                    name='employeeNo'
                    value={employeeNo}
                />
            </div>
            <div>
                <TextField label="Password" required id="standard-size-small"
                    size="small" variant='outlined'
                    onChange={props.changeHandler}
                    name='password'
                    value={password}
                />
                <TextField label="RF Id" required id="standard-size-small"
                    size="small" variant='outlined'
                    onChange={props.changeHandler}
                    name='rfId'
                    value={rfId}
                />
            </div>
            <Button type='submit' variant="contained" color="primary">
                Save
           </Button>
        </form>
    </div>)
}

export default AccessControl