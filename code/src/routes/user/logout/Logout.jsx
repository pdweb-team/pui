import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Logout = ({ handleClose }) => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [countdown, setCountdown] = useState(3);

    useEffect(() => {
        setOpen(true);
    }, []);

    useEffect(() => {
        if (open && countdown > 0) {
            const timer = setTimeout(() => {
                setCountdown(countdown - 1);
            }, 1000);
            return () => clearTimeout(timer);
        } else if (countdown === 0) {
            handleConfirmLogout();
        }
    }, [countdown, open]);

    const handleConfirmLogout = () => {
        // 删除本地存储中的 token
        localStorage.removeItem('token');

        // 刷新页面
        window.location.reload();

        // 重定向到主页
        navigate('/');
    };

    const handleCancel = () => {
        setOpen(false);
        setCountdown(3);
        if (handleClose) {
            handleClose();
        }
    };

    return (
        <Dialog
            open={open}
            onClose={handleCancel}
        >
            <DialogTitle>确认退出</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    你即将在 {countdown} 秒后退出账号。你可以选择取消。
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button component={Link} to="/" onClick={handleCancel} color="primary">
                    取消
                </Button>
                <Button onClick={handleConfirmLogout} color="primary">
                    退出账号
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default Logout;
