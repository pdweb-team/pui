import React, { useState } from 'react';
import { Box, Avatar, Menu, MenuItem, ListItemIcon } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

const UserAvatar = ({ username }) => {
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    if (!username) {
        return null; // 如果没有用户名，不渲染任何内容
    }

    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar
                sx={{
                    bgcolor: theme.palette.primary.main,
                    color: theme.palette.common.white,
                    border: `2px solid ${theme.palette.primary.contrastText}`, // 添加轮廓颜色
                    boxShadow: `0 0 10px ${theme.palette.primary.dark}`, // 添加阴影效果
                    cursor: 'pointer', // 鼠标指针样式
                }}
                onClick={handleClick} // 点击头像时打开菜单
            >
                {username.charAt(0).toUpperCase()}
            </Avatar>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <MenuItem component={Link} to="/account/profile" onClick={handleClose}>
                    <ListItemIcon>
                        <AccountCircleIcon fontSize="small" />
                    </ListItemIcon>
                    个人信息
                </MenuItem>
                <MenuItem component={Link} to="/account/my_acc" onClick={handleClose}>
                    <ListItemIcon>
                        <SettingsIcon fontSize="small" />
                    </ListItemIcon>
                    我的账号
                </MenuItem>
                <MenuItem component={Link} to="/account/logout" onClick={handleClose}>
                    <ListItemIcon>
                        <LogoutIcon fontSize="small" />
                    </ListItemIcon>
                    登出
                </MenuItem>
            </Menu>
        </Box>
    );
};

export default UserAvatar;
