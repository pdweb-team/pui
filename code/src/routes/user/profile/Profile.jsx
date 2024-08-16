import React from 'react';
import { Container, Typography, Box } from '@mui/material';

function Profile() {
    // 假设用户名和邮箱已存储在 localStorage 中
    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h5">
                    用户资料
                </Typography>
                <Box sx={{ mt: 3 }}>
                    <Typography variant="h6">用户名:</Typography>
                    <Typography variant="body1">{username}</Typography>
                    <br />
                    <Typography variant="h6">邮箱:</Typography>
                    <Typography variant="body1">{email}</Typography>
                </Box>
            </Box>
        </Container>
    );
}

export default Profile;
