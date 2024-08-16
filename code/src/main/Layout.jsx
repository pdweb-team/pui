import React, { useState } from 'react';
import { Box, CssBaseline, Toolbar, Alert } from '@mui/material';
import Header from './Header';
import CustomDrawer from './CustomDrawer';
import {Outlet} from "react-router-dom";
import Ban from "../routes/Pop-ups/ban"


const drawerWidth = 240;

function Layout() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [error, setError] = useState(''); // 错误状态管理

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <Ban />
            <CssBaseline />

            {/* 使用 Header 组件 */}
            <Header handleDrawerToggle={handleDrawerToggle} setError={setError} />

            {/* 使用 CustomDrawer 组件 */}
            <CustomDrawer mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />

            {/* 在这里显示错误提示 */}
            {error && (
                <Alert
                    severity="error"
                    sx={{
                        width: { sm: `calc(100% - ${drawerWidth}px)`, xs: '100%' },
                        position: 'fixed',
                        top: '64px',
                        left: { sm: `${drawerWidth}px`, xs: 0 },
                        zIndex: (theme) => theme.zIndex.drawer + 1, // 确保错误提示显示在抽屉下面
                    }}
                >
                    {error}
                </Alert>
            )}

            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    bgcolor: 'background.default',
                    p: 3,
                    marginLeft: { sm: `${drawerWidth}px` },
                    mt: 8 // 确保内容在 AppBar 下方显示
                }}
            >
                <Toolbar />
                <Outlet />  {/* 渲染子路由 */}
            </Box>
        </Box>
    );
}

export default Layout;
