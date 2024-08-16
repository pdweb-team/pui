import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './main/Layout'; // 引入 Layout 组件
import Dashboard from './routes/dashboard/Dashboard'; // 引入 Dashboard 组件
import Announcement from './routes/announcement/Announcement'; // 引入 Announcement 组件
import Login from './routes/login/Login'; // 引入 Login 组件
import Log from './routes/log/Log'; // 引入 Log 组件
import Register from './routes/register/Register';
import OtherS from './routes/other/otherS/OtherS';
import RouteAuth from './routes/auth/LoginAuth/RouteAuth';
import Profile from "./routes/user/profile/Profile";
import Logout from "./routes/user/logout/Logout";
import WarningGoForum from "./routes/Pop-ups/WarningGoForum";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />  {/* 默认展示 Dashboard */}
                    <Route path="announcement" element={<Announcement />} />
                    <Route path="announcement/log" element={<Log />} />  {/* 在访问 /announcement/log 时只渲染 Login 组件 */}
                    <Route path="login" element={<Login />} />  {/* 单独的登录页面 */}
                    <Route path="register" element={<Register />} />  {/* 单独的注册页面 */}
                    <Route path="other/s" element={<OtherS />} />  {}
                    <Route
                        path="account/profile"
                        element={
                            <RouteAuth>
                                <Profile />
                            </RouteAuth>
                        }
                    />
                    <Route
                        path="account/logout"
                        element={
                            <RouteAuth>
                                <Logout />
                            </RouteAuth>
                        }
                    />
                    <Route
                        path="account/my_acc"
                        element={
                            <RouteAuth>
                                {/*<My_acc />*/}
                            </RouteAuth>
                        }
                    />
                    <Route
                        path="posts/"
                        element={
                            <RouteAuth>
                                <WarningGoForum />
                            </RouteAuth>
                        }
                    />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
