import React, { useEffect, useState } from 'react'
import { updateScheduleHours } from '../../services/schedule'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import data from './data.json'
toast.configure()
function Dashboard() {
    const [scheduleHours, setScheduleHours] = useState([])
    const [time, setTime] = useState({
        day: '',
        open: '',
        close: ''
    })

    useEffect(() => {
        const response = [
            {
                day: 'Monday',
                open: '1 AM',
                close: '2 AM',
            },
            {
                day: 'Tuesday',
                open: '1 AM',
                close: '2 AM',
            },
        ];
        setScheduleHours(response);
    }, []);
    const onChangehandler = (e, item) => {
        const day = item.day;
        const name = e.target.name;
        const value = e.target.value;

        const updatedScheduleHours = scheduleHours.map(scheduleHour => {
            if (scheduleHour.day === day) {
                let open = scheduleHour.open;
                let close = scheduleHour.close;
                if (name == 'open') {
                    open = value;
                }
                if (name == 'close') {
                    close = value;
                }
                return {
                    day,
                    open,
                    close,
                };
            }
            return scheduleHour;

        });
        //  console.log('time', { ...time, [e.target.name]: e.target.value })
        // setTime({ ...time, [e.target.name]: e.target.value })
        setScheduleHours(updatedScheduleHours);
    }
    console.log('schedule', scheduleHours)
    const handleSubmit = (e) => {
        e.preventDefault()
        //  console.log('newtime', newTime)
        updateScheduleHours(scheduleHours).then(res => {
            if (res) {
                toast.success('this information was succeessfully saved', { autoClose: 1500 })
            }
            else {
                toast.error('this information is fallied', { autoClose: 1500 })
            }
        })
    }
    const { day, open, close } = time
    return (<div style={{ textAlign: 'center', marginTop: 40 }}>
        <span style={{ marginLeft: 50 }}>Open</span>
        <span style={{ marginLeft: 50 }}>Close</span>
        {data.map((item, index) => {
            return (<div>
                <span onChange={(e) => onChangehandler(e)} name='day'>{item.day}</span>
                <span>
                    <select name='open' style={{ marginLeft: 30 }} onChange={(e) => onChangehandler(e, item)}>
                        {item.open.map((open, index) => {
                            return (<option value={open}>{open}</option>)
                        })}
                    </select>
                </span>
                <span>
                    <select name='close' style={{ marginLeft: 30 }} onChange={(e) => onChangehandler(e, item)} >
                        {item.close.map((close, index) => {
                            return (<option value={close}>{close}</option>)
                        })}
                    </select>
                </span>
            </div>
            )
        })}
        <button onClick={(e) => handleSubmit(e)} style={{ marginTop: 30 }}>Save</button>
    </div>)
}

export default Dashboard