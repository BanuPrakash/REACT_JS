import { useInfiniteQuery } from "@tanstack/react-query"

type Comment = {
    "id": number,
    "name": string,
    "email": string,
    "body": string
}

type Props = {
    pageParam: number
}

export default function Comments() {
    const fetchComments = async ({pageParam}: Props) => {
        const res = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10&_start=' + pageParam)
        return res.json() as Promise<Comment[]>
    }

    const {data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status} = useInfiniteQuery({
        queryKey: ['comments'],
        queryFn: fetchComments,
        initialPageParam: 0,
        getNextPageParam: (lastPage, pages) => {
            console.log(lastPage.length, pages.length);
            return lastPage.length === 0 ? undefined : pages.length
        }
    });

    return status === 'pending' ? (<div>Loading...</div>) : <div>
        {data?.pages.map((page, i) => (
            <div>
            <div>
                {page.map(comment => <p key={comment.id}> {comment.email}<br /> {comment.body} </p>)}
            </div>
                <button onClick={() => fetchNextPage()} disabled={!hasNextPage || isFetching}>
                    {isFetchingNextPage? 'Loading more...' : hasNextPage ? 'Load More' : 'Nothing more'}
                </button>
            </div>
        ))}
    </div>
   
}