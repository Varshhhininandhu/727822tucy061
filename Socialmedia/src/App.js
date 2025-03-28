import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TopUsers from "./components/TopUsers";
import TrendingPosts from "./components/TrendingPosts";
import Feed from "./components/Feed";
import "./App.css"; // Updated path to point to the correct location

function App() {
  return (
    <Router>
      <div className="container">
        <nav>
          <Link to="/top-users">Top Users</Link> | 
          <Link to="/trending-posts">Trending Posts</Link> | 
          <Link to="/feed">Feed</Link>
        </nav>

        <Routes>
          <Route path="/top-users" element={<TopUsers />} />
          <Route path="/trending-posts" element={<TrendingPosts />} />
          <Route path="/feed" element={<Feed />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
