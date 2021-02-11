import axios from 'axios'


export const updateScheduleHours = businessHours => {
    return axios
        .post('businesshours', businessHours,
            {
                headers: { Authorization: localStorage.getItem('token') }
            }
        )
        .then(res => {
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
}