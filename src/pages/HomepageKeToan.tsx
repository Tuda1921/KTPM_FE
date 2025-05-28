import React from "react";
import Layout from "../components/Layout";

const HomepageKeToan: React.FC = () => (
  <Layout role="ketoan">
    <div className="flex flex-col gap-8">
      {/* Header Section */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">TRANG CHỦ</h1>
        <p className="text-base text-gray-600 mt-2">Chào mừng đến với Hệ thống Quản lý Thu phí Chung cư</p>
      </div>

      {/* Info Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Tổng số hộ gia đình */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-gray-700">Tổng số hộ gia đình</h2>
          <div className="flex items-baseline gap-2">
            <span className="text-5xl font-bold text-blue-600">125</span>
            <span className="text-xl text-gray-700">hộ</span>
          </div>
        </div>

        {/* Khoản thu đang mở */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-gray-700">Khoản thu đang mở</h2>
          <div className="flex items-baseline gap-2">
            <span className="text-5xl font-bold text-blue-600">3</span>
            <span className="text-xl text-gray-700">khoản thu</span>
          </div>
        </div>

        {/* Biểu đồ tỷ lệ nộp/chưa nộp */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 flex flex-col gap-4 col-span-1 md:col-span-3">
           <h2 className="text-xl font-semibold text-gray-700">Tỷ lệ (%) hộ đã nộp / chưa nộp trong đợt thu tháng 5</h2>
           {/* Placeholder cho biểu đồ */}
           <div className="w-full h-64 bg-gray-200 flex items-center justify-center text-gray-500">Placeholder Biểu đồ</div>
            <div className="flex gap-4">
                <div className="flex items-center gap-1">
                    <span className="w-4 h-4 bg-blue-500 rounded-full"></span>
                    <span className="text-sm text-gray-700">Số hộ đã nộp</span>
                </div>
                 <div className="flex items-center gap-1">
                    <span className="w-4 h-4 bg-white border border-gray-400 rounded-full"></span>
                    <span className="text-sm text-gray-700">Số hộ chưa nộp</span>
                </div>
            </div>
        </div>
      </div>
       {/* Doanh thu table */}
      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 flex flex-col gap-4">
         <h2 className="text-xl font-semibold text-gray-700">Doanh thu của đợt thu tháng 5</h2>
         {/* Placeholder cho bảng */}
         <div className="w-full overflow-x-auto">
             <table className="min-w-full divide-y divide-gray-200">
                 <thead>
                     <tr>
                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tên khoản thu</th>
                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Thời gian</th>
                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Đã thu</th>
                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tỷ lệ</th>
                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trạng thái</th>
                     </tr>
                 </thead>
                 <tbody className="bg-white divide-y divide-gray-200">
                     <tr>
                         <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Phí chung cư tháng 5/2025</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">01/05 - 31/05/2025</td>
                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">102,650,234 VND</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">89,6%</td>
                             <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-green-600">Đang thu</td>
                     </tr>
                     <tr>
                         <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Phí chung cư tháng 4/2025</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">01/04 - 30/04/2025</td>
                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">123,654,259 VND</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">100%</td>
                             <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-red-600">Đã thu xong</td>
                     </tr>
                      <tr>
                         <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Phí chung cư tháng 3/2025</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">01/03 - 31/03/2025</td>
                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">113,276,093 VND</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">100%</td>
                             <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-red-600">Đã thu xong</td>
                     </tr>
                 </tbody>
             </table>
         </div>
      </div>
    </div>
  </Layout>
);

export default HomepageKeToan; 