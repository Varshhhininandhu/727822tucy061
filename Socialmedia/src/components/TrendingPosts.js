import axios from 'axios';
import { useEffect, useState } from 'react';

const TrendingPosts = () => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTrendingPosts = async () => {
            try {
                const response = await axios.get("http://localhost:3003/api/trending-posts");
                setPosts(response.data);
            } catch (err) {
                console.error("Error fetching trending posts:", err);
                setError("Failed to load trending posts. Please check the API URL.");
            }
        };

        fetchTrendingPosts();
    }, []);

    return (
        <div>
            <h2>Trending Posts</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title} - {post.commentsCount} comments</li>
                ))}
            </ul>
        </div>
    );
};

export default TrendingPosts;
