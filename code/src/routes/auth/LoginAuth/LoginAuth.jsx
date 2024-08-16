const LoginAuth = () => {
    const token = localStorage.getItem('token');

    // 使用双重否定简化返回值
    return !!token;
};

export default LoginAuth;
