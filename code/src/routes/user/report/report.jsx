import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, Typography, MenuItem, Box, Alert, Dialog, DialogTitle, DialogContent, DialogActions, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const ReportPage = () => {
    const [formData, setFormData] = useState({
        reportType: '',
        reportDetails: '',
        contactInfo: '',
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [open, setOpen] = useState(true); // 初始状态为打开

    const reportTypes = [
        { value: 'spam', label: '垃圾信息' },
        { value: 'abuse', label: '滥用行为' },
        { value: 'other', label: '其他' },
    ];

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (!formData.reportType || !formData.reportDetails) {
            setError('请填写所有必填项。');
            return;
        }

        // 模拟提交逻辑
        setTimeout(() => {
            setSuccess('举报提交成功，我们会尽快处理。');
            setFormData({
                reportType: '',
                reportDetails: '',
                contactInfo: '',
            });
        }, 1000);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
            <DialogTitle>
                举报内容
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
            </DialogTitle>
            <DialogContent dividers>
                <Container>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        {error && (
                            <Alert severity="error" sx={{ mt: 2, width: '100%' }}>
                                {error}
                            </Alert>
                        )}

                        {success && (
                            <Alert severity="success" sx={{ mt: 2, width: '100%' }}>
                                {success}
                            </Alert>
                        )}

                        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3, width: '100%' }}>
                            <TextField
                                select
                                label="举报类型"
                                name="reportType"
                                value={formData.reportType}
                                onChange={handleChange}
                                fullWidth
                                required
                                margin="normal"
                            >
                                {reportTypes.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>

                            <TextField
                                label="举报详情"
                                name="reportDetails"
                                value={formData.reportDetails}
                                onChange={handleChange}
                                fullWidth
                                required
                                margin="normal"
                                multiline
                                rows={4}
                            />

                            <TextField
                                label="联系方式（可选）"
                                name="contactInfo"
                                value={formData.contactInfo}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                            />

                            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 3 }}>
                                提交举报
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    关闭
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ReportPage;
