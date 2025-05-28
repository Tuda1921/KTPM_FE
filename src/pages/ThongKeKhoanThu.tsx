import React from "react";
import Layout from '../components/Layout';

const ThongKeKhoanThu: React.FC = () => (
  <Layout role="ketoan">
    <div className="p-4 flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">THỐNG KÊ thu phí</h1>
        <p className="text-gray-600 text-sm mt-1">Chào mừng đến với Hệ thống Quản lý Thu phí Chung cư</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center border border-gray-300 rounded-md shadow-sm overflow-hidden">
          <input
            type="text"
            placeholder="Chọn kiểu"
            className="flex-1 p-2 outline-none text-sm"
          />
          <button className="p-2 border-l border-gray-300 bg-gray-50 text-gray-600 hover:bg-gray-100">
            ...
          </button>
        </div>
        <div className="flex items-center border border-gray-300 rounded-md shadow-sm overflow-hidden flex-1">
          <div className="p-2 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search"
            className="flex-1 p-2 border-l border-gray-300 outline-none text-sm"
          />
        </div>

        <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-600">
          Áp dụng
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-md shadow-md overflow-hidden border border-gray-200 p-4 flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-gray-800">Theo khoản (triệu VND)</h2>
          <div className="bg-gray-100 h-48 flex items-center justify-center text-gray-500">
            [Chart/Visualization Placeholder]
          </div>
          <div className="text-sm text-gray-600">
            <p>Chung cư <span className="inline-block w-3 h-3 bg-yellow-400 ml-2"></span></p>
            <p>Học phí <span className="inline-block w-3 h-3 bg-green-400 ml-2"></span></p>
            <p>Gửi xe <span className="inline-block w-3 h-3 bg-pink-400 ml-2"></span></p>
            <p>Quản lý <span className="inline-block w-3 h-3 bg-blue-400 ml-2"></span></p>
          </div>
        </div>

        <div className="bg-white rounded-md shadow-md overflow-hidden border border-gray-200 p-4 flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-gray-800">Theo đợt thu</h2>
          <div className="bg-gray-100 h-48 flex items-center justify-center text-gray-500">
            [Chart/Visualization Placeholder]
          </div>
          <div className="text-sm text-gray-600">
            <p>Đợt tháng 05/2025 <span className="inline-block w-3 h-3 bg-blue-500 ml-2"></span></p>
            <p>Đợt tháng 04/2025 <span className="inline-block w-3 h-3 bg-white border border-gray-400 ml-2"></span></p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-md shadow-md overflow-hidden border border-gray-200 p-4 flex flex-col gap-4">
        <h2 className="text-lg font-semibold text-gray-800">Theo thời gian</h2>
        <div className="flex gap-2">
          <button className="px-4 py-1 text-sm rounded-full bg-blue-500 text-white">7 days</button>
          <button className="px-4 py-1 text-sm rounded-full border border-gray-300 text-gray-700">30 days</button>
          <button className="px-4 py-1 text-sm rounded-full border border-gray-300 text-gray-700">90 days</button>
        </div>
        <div className="bg-gray-100 h-64 flex items-center justify-center text-gray-500">
          [Line Chart Placeholder]
        </div>
      </div>
    </div>
  </Layout>
);

export default ThongKeKhoanThu; 