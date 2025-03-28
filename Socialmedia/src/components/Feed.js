import axios from "axios";
import { useEffect, useState } from "react";

const Feed = () => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get("http://localhost:3003/posts"); // Check if this URL exists
                setPosts(response.data);
            } catch (err) {
                console.error("Error fetching posts:", err);
                setError("Failed to load posts. Please check the API URL.");
            }
        };

        fetchPosts();
    }, []);

    return (
        <div>
            <h2>Feed</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Feed;
