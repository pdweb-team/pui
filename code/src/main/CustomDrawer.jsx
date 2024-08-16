import React from 'react';
import { Drawer } from '@mui/material';
import Sidebar from './Sidebar';

const drawerWidth = 240;

const CustomDrawer = ({ mobileOpen, handleDrawerToggle }) => {
    return (
        <>
            {/* 临时抽屉，用于移动设备 */}
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: drawerWidth,
                        zIndex: (theme) => theme.zIndex.drawer + 2, // 增加抽屉的优先级
                    },
                }}
            >
                <Sidebar handleDrawerToggle={handleDrawerToggle} />
            </Drawer>

            {/* 永久抽屉，用于桌面设备 */}
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box'
                    },
                }}
                open
            >
                <Sidebar handleDrawerToggle={handleDrawerToggle} />
            </Drawer>
        </>
    );
};

export default CustomDrawer;
