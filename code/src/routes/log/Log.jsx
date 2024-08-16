import React from 'react';
import { Typography, Box } from '@mui/material';

function Log() {
    return (
        <Box>
            <Typography variant="h4" gutterBottom>
                更新日志
            </Typography>
            <Typography variant="body1">
                更新日志，最新：8.16
            </Typography>
            <Typography variant="body2" color="textSecondary">
                本站正在更新中……ing<br />
                更新日志：
                <ul>
                    <li>8.15 公布网站</li>
                    <li>8.16 响应式</li>
                    <li>8.16 公告更新</li>
                    <li>8.16 增加注册选项</li>
                </ul>
            </Typography>
        </Box>
    );
}

export default Log;
