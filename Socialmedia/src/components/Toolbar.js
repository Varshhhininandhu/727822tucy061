import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Social App
                </Typography>
                <Button color="inherit" component={Link} to="/">Home</Button>
                <Button color="inherit" component={Link} to="/top-users">Top Users</Button>
                <Button color="inherit" component={Link} to="/trending-posts">Trending Posts</Button>
                <Button color="inherit" component={Link} to="/feed">Feed</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
