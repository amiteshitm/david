import React from 'react'
import User from './user.json'

function UserList() {
    return (<div>
        {User.map(user =>
            <ul>
                <li>{user.firstName}</li>
            </ul>

        )}
    </div>)
}


export default UserList