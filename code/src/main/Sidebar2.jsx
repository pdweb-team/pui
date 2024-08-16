import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import LockClockIcon from '@mui/icons-material/LockClock';
import {ListItem} from "@mui/material";
import AllInboxIcon from '@mui/icons-material/AllInbox';

export default function Sidebar2() {
    const [open, setOpen] = React.useState(false);
    const token = localStorage.getItem('token');

    const handleClick = () => {
        setOpen(!open);
    };
    if (token == null) {
        return null; // 如果没有token, 则不渲染组件
    }

    return (

        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    内容
                </ListSubheader>
            }
        >

            <ListItemButton>
                <ListItemIcon>
                    <LockClockIcon />
                </ListItemIcon>
                <ListItemText primary="本内容暂时不开放" />
            </ListItemButton>

            <ListItemButton>
                <ListItemIcon>
                    <LockClockIcon />
                </ListItemIcon>
                <ListItemText primary="本内容暂时不开放" />
            </ListItemButton>
            <ListItemButton component="a" href="/#/other/s" onClick={handleClick}>
                <ListItemIcon>
                    <LockPersonIcon />
                </ListItemIcon>
                <ListItemText primary="私密内容" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <LockClockIcon />
                        </ListItemIcon>
                        <ListItemText primary="超级学习资料" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <LockClockIcon />
                        </ListItemIcon>
                        <ListItemText primary="本内容对你账号当前地区不开放" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <LockClockIcon />
                        </ListItemIcon>
                        <ListItemText primary="本内容对你账号当前地区不开放" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <LockClockIcon />
                        </ListItemIcon>
                        <ListItemText primary="本内容对你账号当前地区不开放" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <LockClockIcon />
                        </ListItemIcon>
                        <ListItemText primary="本内容对你账号当前地区不开放" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <LockClockIcon />
                        </ListItemIcon>
                        <ListItemText primary="本内容对你账号当前地区不开放" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <LockClockIcon />
                        </ListItemIcon>
                        <ListItemText primary="本内容对你账号当前地区不开放" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <LockClockIcon />
                        </ListItemIcon>
                        <ListItemText primary="本内容对你账号当前地区不开放" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <LockClockIcon />
                        </ListItemIcon>
                        <ListItemText primary="本内容对你账号当前地区不开放" />
                    </ListItemButton>



                </List>
            </Collapse>




        </List>
    );
}
