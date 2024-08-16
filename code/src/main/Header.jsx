import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useUserInfo from '../routes/user/useUserInfo'; // 导入自定义 hook
import UserAvatar from '../routes/user/UserAvatar/UserAvatar'; // 引入 UserAvatar 组件

const Header = ({ handleDrawerToggle, setError }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const username = useUserInfo(setError); // 使用自定义 hook 获取用户名

    return (
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar>
                {isMobile && (
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                )}
                <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                    PUI
                </Typography>

                {/* 使用拆分出来的 UserAvatar 组件 */}
                <UserAvatar username={username} />
            </Toolbar>
        </AppBar>
    );
};

export default Header;
