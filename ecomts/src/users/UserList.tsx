import {useQuery, useQueryClient} from '@tanstack/react-query'
import type { User } from '../model/types'
import { Button } from 'react-bootstrap'

export default function UserList() {
    const queryClient = useQueryClient();

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

    function reload() {
        // invalidate the cache
        queryClient.invalidateQueries({queryKey: ['users']})
    }

    return <div className='container'>
        <Button onClick={reload}>Reload</Button>
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

