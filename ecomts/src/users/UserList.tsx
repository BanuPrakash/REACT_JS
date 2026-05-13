import {useQuery} from '@tanstack/react-query'
import type { User } from '../model/types'

export default function UserList() {
    const usersQuery = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/users')
            return res.json()
        }
    })

    if(usersQuery.isLoading) {
        return <div>Loading Users....</div>
    }
    if(usersQuery.isError) {
        return <div> Something went Wrong :-( </div>
    }

    return <div className='container'>
        {
            usersQuery.data.map( (user: User) => (
                <div key={user.id}>
                   UserName: {user.username} <br />
                   Email : {user.email}
                </div>
            ))
        }
    </div>
}

