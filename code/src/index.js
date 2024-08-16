import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';

ReactDOM.render(
    <>
        <App />
    </>,
    document.getElementById('root') // 在这里需要一个逗号来分隔组件与目标节点
);
