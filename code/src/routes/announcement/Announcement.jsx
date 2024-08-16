import React from 'react';
import { Typography, Box } from '@mui/material';

function Announcement() {
    return (
        <Box>
            <Typography variant="h4" gutterBottom>
                公告内容
            </Typography>
            <Typography variant="body1">
                这里是公告页面。在这里，你可以展示最新的通知和更新。
            </Typography>
            <Typography variant="body2" color="textSecondary">
                本站正在更新中……ing<br />
                更新日志：
                <ul>
                    <li>8.15 公布网站</li>
                    <li>8.16 响应式</li>
                    <li>8.16 公告更新</li>
                    <li><a href="/#/announcement/log">更多……</a></li>
                </ul>
            </Typography>
        </Box>
    );
}

export default Announcement;
