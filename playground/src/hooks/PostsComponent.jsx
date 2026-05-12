import { useEffect, useState } from "react";

export default function PostsComponent({uid}) {
    let [posts, setPosts] = useState();

    // componentDidUpdate
    // called whenever uid changes
    useEffect(() => {
          fetch("https://jsonplaceholder.typicode.com/posts?userId=" + uid)
        .then(response => response.json())
        .then(data => setPosts(data));
    }, [uid]);

    return <div>
        <h1> Posts by User {uid}</h1>
        {
            posts && posts.map(post => <div>
                    Title: {post.title} <br />
                    Body : {post.body}
            </div>)
        }
    </div>
}