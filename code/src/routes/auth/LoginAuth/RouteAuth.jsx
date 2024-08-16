import { Navigate } from 'react-router-dom';

const RouteAuth = ({ children }) => {
    const token = localStorage.getItem('token');

    // 如果未认证，重定向到登录页面
    if (!token) {
        return <Navigate to="/login" />;
    }

    // 如果已认证，渲染子组件
    return children;
};

export default RouteAuth;
