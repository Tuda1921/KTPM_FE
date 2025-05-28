import React, { type ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import Logo from '../assets/logo.svg';

interface LayoutProps {
  children: ReactNode;
  role: 'ketoan' | 'totruong';
}

const Layout: React.FC<LayoutProps> = ({ children, role }) => {
  const location = useLocation();

  const menuItems = role === 'ketoan' ? [
    { path: '/homepage-ketoan', label: 'Trang chủ' },
    { path: '/quan-ly-khoan-thu', label: 'Quản lý Khoản thu' },
    { path: '/quan-ly-dot-thu-phi', label: 'Quản lý Đợt thu phí' },
    { path: '/thong-ke-khoan-thu', label: 'Thống kê Thu phí' },
  ] : [
    { path: '/homepage-totruong', label: 'Trang chủ' },
    { path: '/quan-ly-ho-khau', label: 'Quản lý Hộ khẩu' },
    { path: '/quan-ly-nhan-khau', label: 'Quản lý Nhân khẩu' },
    { path: '/quan-ly-tam-tru', label: 'Quản lý Tạm trú/ Tạm vắng' },
    { path: '/lich-su-thay-doi-nhan-khau', label: 'Lịch sử thay đổi Nhân khẩu' },
    { path: '/thong-ke-nhan-khau', label: 'Thống kê Nhân khẩu' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#f3f4f6]">
      {/* Header */}
      <header className="bg-white shadow-sm p-4 flex items-center justify-between border-b border-gray-200">
        {/* Logo and System Name */}
        <div className="flex items-center gap-2">
          {/* Logo */}
          {/* <img src={Logo} alt="Bluemoon Logo" className="w-8 h-8" /> */}
          <span className="text-sm font-bold text-gray-800 uppercase">HỆ THỐNG QUẢN LÝ THU PHÍ CHUNG CƯ BLUEMOON</span>
        </div>
        {/* User/Role Display */}
        <span className="text-sm text-gray-600">{role === 'ketoan' ? 'Kế toán viên' : 'Tổ trưởng/Tổ phó'}</span>
      </header>

      {/* Content Area: Sidebar + Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-md flex flex-col">
          <nav className="mt-4 flex-1">
            <ul>
              {menuItems.map(item => {
                const isActive = location.pathname === item.path;
                return (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`block text-sm border-b`}
                      style={{
                         fontFamily: 'Roboto',
                         borderColor: 'rgba(0, 0, 0, 0.1)',
                         padding: '12px 16px',
                         color: '#1976D2',
                         fontWeight: '600',
                         backgroundColor: isActive ? 'rgba(0, 122, 255, 0.15)' : 'transparent',
                      }}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
              <li className="mt-4">
                <Link
                  to="/login"
                  className="block text-sm"
                  style={{
                     fontFamily: 'Roboto',
                     padding: '12px 16px',
                     backgroundColor: 'rgba(0, 122, 255, 0.15)',
                     color: '#1976D2',
                     fontWeight: '600',
                  }}
                >
                  Đăng xuất
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          <main className="flex-1 p-4 overflow-y-auto">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout; 