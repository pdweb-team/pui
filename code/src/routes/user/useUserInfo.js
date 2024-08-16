import { useState, useEffect } from 'react';

const useUserInfo = (setError) => {
    const [username, setUsername] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            fetch('https://api.pui.icu/user-info', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            })
                .then((response) => {
                    if (response.status === 401) {
                        // 如果返回 401，说明 token 无效或已过期
                        setError('未登录或登录已过期');
                        localStorage.removeItem('token');  // 移除无效的 token
                        return null;
                    }
                    return response.json();
                })
                .then((data) => {
                    if (data && data.username) {
                        setUsername(data.username);
                    }
                })
                .catch((error) => {
                    setError('无法连接服务器');
                    console.error('获取用户信息失败:', error);
                });
        }
    }, [setError]);


    return username;
};

export default useUserInfo;
