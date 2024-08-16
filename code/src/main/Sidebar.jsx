import React from 'react';
import {List, ListItem, ListItemIcon, ListItemText, Divider, Box, ListItemButton, Collapse} from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import Sidebar2 from "./Sidebar2";
import AllInboxIcon from "@mui/icons-material/AllInbox";



const Sidebar = ({ handleDrawerToggle }) => {
    const token = localStorage.getItem('token');

    return (
        <Box sx={{ overflow: 'auto', mt: 8 }}>
            <List>
                {!token && (
                    <>
                        <ListItem button component="a" href="/#/login" onClick={handleDrawerToggle}>
                            <ListItemIcon>
                                <LoginIcon />
                            </ListItemIcon>
                            <ListItemText primary="登录" />
                        </ListItem>
                        <ListItem button component="a" href="/#/register" onClick={handleDrawerToggle}>
                            <ListItemIcon>
                                <PersonAddAltIcon />
                            </ListItemIcon>
                            <ListItemText primary="注册" />
                        </ListItem>
                    </>
                )}
                <ListItem button component="a" href="/#/announcement" onClick={handleDrawerToggle}>
                    <ListItemIcon>
                        <AnnouncementIcon />
                    </ListItemIcon>
                    <ListItemText primary="公告" />
                </ListItem>
                <ListItem button component="a" href="/#/posts/" onClick={handleDrawerToggle}>
                    <ListItemIcon>
                        <AllInboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="帖子" />
                </ListItem>

                <Sidebar2 />
            </List>
            <Divider />
            <List>
                {/* 其他菜单项 */}
            </List>
        </Box>
    );
};

export default Sidebar;
