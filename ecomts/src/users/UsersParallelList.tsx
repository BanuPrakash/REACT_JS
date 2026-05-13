import { useQueries } from "@tanstack/react-query";

type AppProps = {
    userIds: number[]
}

const fetchUserDetails = async (id: number) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if(!response.ok) {
        throw new Error("Network issue / Entity Not foound")
    }
    return response.json();
}


export default function UsersParallelList({userIds}: AppProps) {
    // useQueries instead of useQuery for parallel queuries
    const userQueries = useQueries({
        queries: userIds.map(id => {
            return {
                queryKey: ['userDetails', id],
                queryFn: () => fetchUserDetails(id)
            }
        })
    })

    const isLoading = userQueries.some(query => query.isLoading);
    const isError = userQueries.some(query => query.isError);

    if(isLoading) return <div>Loading Users...</div>
    if(isError) return <div>Boom :-( </div>

    return <div>
        <ul>
           {
            userQueries.map( query => (
                <li key={query.data.id}>{query.data.email}</li>
            ))
           }
        </ul>
    </div>
}