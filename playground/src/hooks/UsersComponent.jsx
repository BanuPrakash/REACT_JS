import { useEffect, useState } from "react";

export default function UsersComponent({setUserID}) {
    let [users, setUsers] = useState();

    // componentDidMount: empty dependency
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => setUsers(data));
    },[])

    return(
        <div>
            <h1>Users List</h1>
            {
                users &&  users.map(user => <div onMouseOver={() => setUserID(user.id)}>
                    {user.name}, {user.email}
                </div>)
            }
        </div>
    )
}