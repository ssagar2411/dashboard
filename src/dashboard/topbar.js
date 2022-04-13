import { AppBar, Box, Button, IconButton, Link, Toolbar, Typography } from "@mui/material";
import React from "react";

export default function TopBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    <Link href="/"   color="inherit">Login</Link>
                </Toolbar>
            </AppBar>
        </Box>
    )
}