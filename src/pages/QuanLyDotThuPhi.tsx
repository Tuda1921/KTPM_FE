import React, { useState } from 'react';
import Layout from '../components/Layout'; // Import Layout component
import AddEditDotThuPhiPopup from '../components/AddEditDotThuPhiPopup'; // Import Add popup
import EditDotThuPhiPopup from '../components/EditDotThuPhiPopup'; // Import Edit popup

const QuanLyDotThuPhi: React.FC = () => {
  const [isAddPopupOpen, setIsAddPopupOpen] = useState(false); // State for Add popup
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false); // State for Edit popup

  const openAddPopup = () => setIsAddPopupOpen(true);
  const closeAddPopup = () => setIsAddPopupOpen(false);
  const openEditPopup = () => setIsEditPopupOpen(true); // Handler to open edit popup
  const closeEditPopup = () => setIsEditPopupOpen(false); // Handler to close edit popup

  return (
    <>
    <Layout role="ketoan"> {/* Wrap with Layout */} 
      <div className="p-4 flex flex-col gap-6">
        {/* Page Title and Welcome Text */}
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Quản lý Đợt thu phí</h1>
          <p className="text-gray-600 text-sm mt-1">Chào mừng đến với Hệ thống Quản lý Thu phí Chung cư</p>
        </div>

        {/* Search and Add Button Area */}
        <div className="flex items-center gap-4">
          {/* Search Input Container */}
          <div className="flex items-center border border-gray-300 rounded-md shadow-sm overflow-hidden flex-1">
            {/* Search Icon Placeholder */}
            <div className="p-2 text-gray-400">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
               </svg>
            </div>
            <input
              type="text"
              placeholder="Nhập tên đợt thu"
              className="flex-1 p-2 border-l border-gray-300 outline-none text-sm"
            />
             {/* Small Button Placeholder */}
             <button className="p-2 border-l border-gray-300 bg-gray-50 text-gray-600 hover:bg-gray-100">
              ...
             </button>
          </div>

          {/* Add New Batch Button */}
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-600 flex items-center gap-2"
                  onClick={openAddPopup} // Add onClick handler
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Tạo đợt thu mới
          </button>
        </div>

        {/* Main Content Area (Table and Details) */}
        <div className="flex gap-6">
          {/* Left Section: List of Payment Batches (Table) */}
          <div className="flex-1 bg-white rounded-md shadow-md overflow-hidden border border-gray-200">
             {/* Table Title */}
            <div className="p-4 bg-gray-100 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-800">Danh sách đợt thu</h2>
            </div>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-800 uppercase tracking-wider">Mã đợt</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-800 uppercase tracking-wider">Tên đợt</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-800 uppercase tracking-wider">Ngày tạo</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-800 uppercase tracking-wider">Hạn cuối</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-800 uppercase tracking-wider">Trạng thái</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-800 uppercase tracking-wider">Thao tác</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {/* Sample Row 1 */}
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">D001</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Tháng 05/2025</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">01/05/2025</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">31/05/2025</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-green-600">Đang mở</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 cursor-pointer">Chi tiết</td>
                </tr>
                 {/* Sample Row 2 */}
                 <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">D002</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Tháng 04/2025</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">01/04/2025</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">30/04/2025</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-red-600">Đã đóng</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 cursor-pointer">Chi tiết</td>
                </tr>
                {/* Sample Row 3 */}
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">D003</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Quý I /2025</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">01/01/2025</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">31/03/2025</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-red-600">Đã đóng</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 cursor-pointer">Chi tiết</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Right Section: Payment Batch Details */}
          <div className="w-1/3 bg-white rounded-md shadow-md overflow-hidden border border-gray-200 p-4 flex flex-col gap-4"> {/* Added padding and flex column */}
             {/* Details Title */}
             <h2 className="text-lg font-semibold text-gray-800">Chi tiết đợt thu</h2>

             {/* Sample Details - Based on Figma structure */}
             <div className="flex flex-col gap-2">
                <p className="text-sm text-gray-700 font-semibold">Tháng 05/2025</p>
                <div className="text-sm text-gray-600">
                    <p><strong>Mã đợt:</strong> D001</p>
                    <p><strong>Ngày tạo:</strong> 01/05/2025</p>
                    <p><strong>Hạn cuối:</strong> 31/05/2025</p>
                </div>
             </div>

             <hr className="border-gray-200"/> {/* Divider */}

             {/* List of Fees in the Batch */}
             <h3 className="text-md font-semibold text-gray-800">Danh sách khoản thu</h3>

             {/* Sample Fee Item - Based on Figma structure */}
             <div className="border border-gray-300 rounded-md p-3 flex flex-col gap-2">
                 <p className="text-sm text-gray-800 font-semibold">Phí dịch vụ</p>
                 <p className="text-sm text-gray-600">Phí dịch vụ hàng tháng</p>
                 <div className="flex items-center justify-between text-sm text-gray-700">
                    <p><strong>Thời hạn:</strong> 31/05/2025</p>
                    <p><strong>Số tiền:</strong> <span className="text-green-600 font-semibold">200,000 VND</span></p> {/* Example styling for amount */}
                 </div>
                 <div className="flex items-center justify-between text-sm text-gray-700">
                    <p><strong>Bắt buộc:</strong> <span className="text-red-600 font-semibold">Bắt buộc</span></p> {/* Example styling for required */}
                     {/* Placeholder for icon */}
                     <button className="text-indigo-600 hover:text-indigo-900" onClick={openEditPopup}>Sửa</button> {/* Replace placeholder with Edit button */}
                 </div>
             </div>
              {/* Add more sample fee items as needed */}

          </div>
    </div>
  </div>
    </Layout>
    <AddEditDotThuPhiPopup isOpen={isAddPopupOpen} onClose={closeAddPopup} />
    <EditDotThuPhiPopup isOpen={isEditPopupOpen} onClose={closeEditPopup} />
    </>
  );
};

export default QuanLyDotThuPhi; 