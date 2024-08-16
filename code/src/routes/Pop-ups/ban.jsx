import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import Report from '../user/report/report'; // 确保这个路径正确

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export default function CustomizedDialogs() {
    const [open, setOpen] = useState(true); // 初始化为 true 直接打开对话框
    const [showReport, setShowReport] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleBan = () => {
        setOpen(false);
        setShowReport(true);
    };

    return (
        <React.Fragment>
            {showReport ? (
                <Report />
            ) : (
                <BootstrapDialog
                    onClose={handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={open}
                >
                    <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                        禁止用户
                    </DialogTitle>
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <DialogContent dividers>
                        <Typography gutterBottom>
                            本网站有一些禁止用户，这些用户通常不能注册/登录。
                        </Typography>
                        <Typography gutterBottom>
                            如果你发现在此列表的用户，请立即举报！
                        </Typography>
                        <Typography gutterBottom>
                            被拒绝的用户：
                            <ul>
                                <li>
                                    xc <br />
                                    微信号：Xc**2023<br />
                                    Ban时间：2024.8.16
                                </li>
                            </ul>
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={handleBan}>
                            举报用户
                        </Button>
                        <Button autoFocus onClick={handleClose}>
                            知道了
                        </Button>
                    </DialogActions>
                </BootstrapDialog>
            )}
        </React.Fragment>
    );
}
