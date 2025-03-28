import axios from "axios";
import { useEffect, useState } from "react";

const TopUsers = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTopUsers = async () => {
            try {
                const response = await axios.get("http://localhost:3003/top-users"); // Check correct URL
                setUsers(response.data);
            } catch (err) {
                console.error("Error fetching top users:", err);
                setError("Failed to load top users. Please check the API URL.");
            }
        };

        fetchTopUsers();
    }, []);

    return (
        <div>
            <h2>Top Users</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name} - {user.postCount} posts</li>
                ))}
            </ul>
        </div>
    );
};

export default TopUsers;
