
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { SlideProps } from '../types';
import { Monitor, Smartphone, RotateCcw, ShieldCheck, Users } from 'lucide-react';

const PAGES = {
  'login.html': `
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Đăng nhập - Garden Care</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet">
    <style>body { font-family: 'Nunito', sans-serif; background-color: #f3f4f6; }</style>
</head>
<body class="flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-100">
        <div class="flex justify-center mb-6">
            <svg width="150" height="175" viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(0, 10)">
                    <circle cx="100" cy="100" r="90" fill="#f0fdf4" stroke="#2E8B57" stroke-width="4"/>
                    <path d="M100 160 Q 40 100 100 40 Q 160 100 100 160 Z" fill="#4CAF50" />
                    <circle cx="100" cy="160" r="6" fill="#008B8B" />
                    <circle cx="100" cy="100" r="5" fill="#ffffff" />
                    <circle cx="100" cy="70" r="4" fill="#ffffff" />
                    <path d="M100 160 L 100 70" stroke="#008B8B" stroke-width="3" />
                    <path d="M100 120 L 130 110" stroke="#008B8B" stroke-width="2" />
                    <path d="M100 100 L 70 90" stroke="#008B8B" stroke-width="2" />
                </g>
                <text x="50%" y="225" text-anchor="middle" font-family="'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="24" letter-spacing="1">
                    <tspan fill="#2E8B57" font-weight="800">Garden</tspan>
                    <tspan fill="#008B8B" font-weight="500">Care</tspan>
                </text>
            </svg>
        </div>
        <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">Đăng nhập hệ thống</h2>
        <form onsubmit="handleLogin(event)" class="space-y-4">
            <div>
                <label class="block text-sm font-bold text-gray-700 mb-1">Tên đăng nhập / Email</label>
                <input type="text" id="username" placeholder="Nhập tên đăng nhập" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required>
            </div>
            <div>
                <label class="block text-sm font-bold text-gray-700 mb-1">Mật khẩu</label>
                <input type="password" id="password" placeholder="Nhập mật khẩu" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required>
            </div>
            <button type="submit" class="w-full bg-[#2E8B57] text-white py-3 rounded-lg font-bold hover:bg-green-700 transition">Đăng nhập</button>
        </form>
        <p class="text-center text-sm text-gray-600 mt-4">
            Chưa có tài khoản? <a href="javascript:parent.postMessage({type:'NAV',page:'register.html'},'*')" class="text-[#2E8B57] font-bold hover:underline">Đăng ký ngay</a>
        </p>
    </div>
    <script>
        function handleLogin(e) {
            e.preventDefault();
            const usernameInput = document.getElementById('username').value.trim();
            const passwordInput = document.getElementById('password').value.trim();
            if (usernameInput === 'admin' && passwordInput === '123') {
                const adminUser = { name: "Quản trị viên", email: "admin@gardencare.com", role: "admin" };
                localStorage.setItem('gardencare_user', JSON.stringify(adminUser));
                parent.postMessage({type:'NAV', page: 'admindash.html'}, '*');
            } else {
                const regularUser = { name: usernameInput || "Khách hàng Mẫu", email: usernameInput.includes('@') ? usernameInput : usernameInput + "@gmail.com", role: "user" };
                localStorage.setItem('gardencare_user', JSON.stringify(regularUser));
                parent.postMessage({type:'NAV', page: 'dashboard.html'}, '*');
            }
        }
    </script>
</body>
</html>`,

  'register.html': `
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Đăng ký - Garden Care</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet">
    <style>body { font-family: 'Nunito', sans-serif; background-color: #f3f4f6; }</style>
</head>
<body class="flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-100">
        <div class="flex justify-center mb-6">
            <svg width="120" height="140" viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(0, 10)">
                    <circle cx="100" cy="100" r="90" fill="#f0fdf4" stroke="#2E8B57" stroke-width="4"/>
                    <path d="M100 160 Q 40 100 100 40 Q 160 100 100 160 Z" fill="#4CAF50" />
                    <circle cx="100" cy="160" r="6" fill="#008B8B" />
                    <path d="M100 160 L 100 70" stroke="#008B8B" stroke-width="3" />
                </g>
                <text x="50%" y="225" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" letter-spacing="1">
                    <tspan fill="#2E8B57" font-weight="800">Garden</tspan>
                    <tspan fill="#008B8B" font-weight="500">Care</tspan>
                </text>
            </svg>
        </div>
        <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">Tạo tài khoản mới</h2>
        <form onsubmit="handleRegister(event)" class="space-y-4">
            <div>
                <label class="block text-sm font-bold text-gray-700 mb-1">Họ tên</label>
                <input type="text" id="name" placeholder="Nguyễn Văn A" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required>
            </div>
            <div>
                <label class="block text-sm font-bold text-gray-700 mb-1">Email</label>
                <input type="email" id="email" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required>
            </div>
            <div>
                <label class="block text-sm font-bold text-gray-700 mb-1">Mật khẩu</label>
                <input type="password" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required>
            </div>
            <button type="submit" class="w-full bg-[#2E8B57] text-white py-3 rounded-lg font-bold hover:bg-green-700 transition">Đăng ký</button>
        </form>
        <p class="text-center text-sm text-gray-600 mt-4">
            Đã có tài khoản? <a href="javascript:parent.postMessage({type:'NAV',page:'login.html'},'*')" class="text-[#2E8B57] font-bold hover:underline">Đăng nhập</a>
        </p>
    </div>
    <script>
        function handleRegister(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const user = { name: name, email: email, role: 'user' };
            localStorage.setItem('gardencare_user', JSON.stringify(user));
            parent.postMessage({type:'NAV', page: 'dashboard.html'}, '*');
        }
    </script>
</body>
</html>`,

  'dashboard.html': `
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quản lý - Garden Care</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Nunito', sans-serif; background-color: #f3f4f6; }
        .nav-item.active { background-color: #f0fdf4; color: #2E8B57; border-left: 4px solid #2E8B57; font-weight: 700; }
        .tab-content { display: none; }
        .tab-content.active { display: block; }
        .hidden { display: none !important; }
    </style>
</head>
<body>
    <nav class="bg-white shadow sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-4 flex justify-between h-16">
            <div class="flex items-center">
                <svg width="40" height="50" viewBox="0 0 200 240" class="mr-2">
                    <g transform="translate(0, 10)">
                        <circle cx="100" cy="100" r="90" fill="#f0fdf4" stroke="#2E8B57" stroke-width="4"/>
                        <path d="M100 160 Q 40 100 100 40 Q 160 100 100 160 Z" fill="#4CAF50" />
                        <path d="M100 160 L 100 70" stroke="#008B8B" stroke-width="3" />
                    </g>
                </svg>
                <span class="font-bold text-xl text-[#2E8B57]">Garden<span class="text-[#008B8B]">Care</span></span>
            </div>
            <div class="flex items-center gap-4">
                <div class="text-right hidden sm:block">
                    <div id="user-display" class="font-bold text-gray-700 text-sm">Khách</div>
                    <div id="email-display" class="text-xs text-gray-500">Chưa đăng nhập</div>
                </div>
                <button onclick="parent.postMessage({type:'NAV',page:'login.html'},'*')" class="text-red-500 text-sm hover:bg-red-50 px-3 py-1 rounded border border-red-200">
                    <i class="fa-solid fa-right-from-bracket"></i> Đổi tài khoản
                </button>
            </div>
        </div>
    </nav>
    <div class="max-w-7xl mx-auto px-4 pt-8 flex flex-col md:flex-row gap-6">
        <div class="w-full md:w-64 bg-white rounded-lg shadow h-fit pb-4">
            <div class="p-4 border-b font-bold text-gray-500 text-sm uppercase">Menu Quản lý</div>
            <nav class="flex flex-col mt-2">
                <button onclick="switchTab('my-trees')" id="btn-my-trees" class="nav-item active px-6 py-3 text-left text-gray-600 hover:bg-gray-50 flex items-center gap-2">
                    <i class="fa-solid fa-leaf"></i> Cây của tôi
                </button>
                <button onclick="switchTab('post-new')" id="btn-post-new" class="nav-item px-6 py-3 text-left text-gray-600 hover:bg-gray-50 flex items-center gap-2">
                    <i class="fa-solid fa-plus-circle"></i> Gửi yêu cầu mới
                </button>
                <button onclick="switchTab('messages')" id="btn-messages" class="nav-item px-6 py-3 text-left text-gray-600 hover:bg-gray-50 flex items-center gap-2">
                    <i class="fa-solid fa-envelope"></i> Tin nhắn
                </button>
                <button onclick="switchTab('account')" id="btn-account" class="nav-item px-6 py-3 text-left text-gray-600 hover:bg-gray-50 flex items-center gap-2">
                    <i class="fa-solid fa-user"></i> Tài khoản
                </button>
            </nav>
        </div>
        <div class="flex-grow bg-white rounded-lg shadow p-6 min-h-[500px]">
            <div id="tab-my-trees" class="tab-content active">
                <div class="flex justify-between items-center mb-6">
                    <h2 class="text-2xl font-bold text-[#2E8B57]">Danh sách yêu cầu của tôi</h2>
                    <span class="text-xs bg-gray-100 px-2 py-1 rounded text-gray-500">Chỉ hiện đơn của bạn</span>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full text-left">
                        <thead class="bg-gray-50 border-b">
                            <tr>
                                <th class="p-3">Tên cây / Tiêu đề</th>
                                <th class="p-3">Dịch vụ</th>
                                <th class="p-3">Trạng thái</th>
                                <th class="p-3 text-right">Ngày gửi</th>
                            </tr>
                        </thead>
                        <tbody id="tree-list-body"></tbody>
                    </table>
                    <div id="empty-msg" class="hidden text-center py-10 text-gray-500">
                        <i class="fa-solid fa-basket-shopping text-4xl mb-3 text-gray-300"></i><br>
                        Bạn chưa gửi yêu cầu nào.
                    </div>
                </div>
            </div>
            <div id="tab-post-new" class="tab-content">
                <h2 class="text-2xl font-bold text-[#2E8B57] mb-6">Đăng ký dịch vụ mới</h2>
                <form onsubmit="submitRequest(event)" class="max-w-xl space-y-4">
                    <div>
                        <label class="block font-bold mb-1">Tiêu đề yêu cầu</label>
                        <input type="text" id="req-title" placeholder="Ví dụ: Cây Bàng Sing bị vàng lá" class="w-full border p-2 rounded focus:border-[#2E8B57] outline-none" required>
                    </div>
                    <div>
                        <label class="block font-bold mb-1">Chọn loại dịch vụ</label>
                        <select id="req-type" class="w-full border p-2 rounded bg-white">
                            <option>Gửi Khách sạn (Lưu trú)</option>
                            <option>Bệnh viện (Chữa bệnh)</option>
                            <option>Tư vấn tại nhà</option>
                        </select>
                    </div>
                    <div class="bg-blue-50 p-3 rounded text-sm text-blue-700">
                        <i class="fa-solid fa-info-circle"></i> Đơn hàng này sẽ được đăng ký dưới tên: <b id="form-owner-display">...</b>
                    </div>
                    <button type="submit" class="bg-[#2E8B57] text-white px-6 py-2 rounded font-bold hover:bg-green-700">Gửi ngay</button>
                </form>
            </div>
            <div id="tab-messages" class="tab-content">
                <h2 class="text-2xl font-bold text-[#2E8B57] mb-6">Hộp thư đến</h2>
                <div class="space-y-4">
                    <div class="flex items-start gap-4 p-4 border rounded hover:bg-gray-50 cursor-pointer">
                        <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-700"><i class="fa-solid fa-user-doctor"></i></div>
                        <div>
                            <div class="font-bold">Bác sĩ Nông nghiệp</div>
                            <p class="text-sm text-gray-600">Chào bạn, cây của bạn đã hồi phục tốt...</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="tab-account" class="tab-content">
                <h2 class="text-2xl font-bold text-[#2E8B57] mb-6">Thông tin cá nhân</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
                    <div>
                        <label class="font-bold text-sm block mb-1 text-gray-700">Họ tên hiển thị:</label>
                        <input type="text" id="acc-name" class="border w-full p-3 rounded bg-gray-100 text-gray-600 font-bold" readonly>
                    </div>
                    <div>
                        <label class="font-bold text-sm block mb-1 text-gray-700">Email đăng nhập:</label>
                        <input type="text" id="acc-email" class="border w-full p-3 rounded bg-gray-100 text-gray-600 font-bold" readonly>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script>
        let currentUser = JSON.parse(localStorage.getItem('gardencare_user') || '{}');
        if (!currentUser.email) parent.postMessage({type:'NAV', page:'login.html'}, '*');
        
        document.getElementById('user-display').innerText = currentUser.name;
        document.getElementById('email-display').innerText = currentUser.email;
        document.getElementById('acc-name').value = currentUser.name;
        document.getElementById('acc-email').value = currentUser.email;
        document.getElementById('form-owner-display').innerText = currentUser.name;

        function switchTab(tabId) {
            document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
            document.getElementById('tab-' + tabId).classList.add('active');
            document.querySelectorAll('.nav-item').forEach(el => {
                el.classList.remove('active');
                el.classList.add('text-gray-600');
            });
            document.getElementById('btn-' + tabId).classList.add('active');
            if(tabId === 'my-trees') renderList();
        }

        function submitRequest(e) {
            e.preventDefault();
            const title = document.getElementById('req-title').value;
            const type = document.getElementById('req-type').value;
            let list = JSON.parse(localStorage.getItem('gardencare_data') || '[]');
            const newReq = {
                id: 'GC-' + (1000 + list.length + 1),
                title: title,
                type: type,
                status: 'Chờ xử lý',
                date: new Date().toLocaleDateString('vi-VN'),
                owner: currentUser.email,
                ownerName: currentUser.name
            };
            list.unshift(newReq);
            localStorage.setItem('gardencare_data', JSON.stringify(list));
            alert("Gửi thành công!");
            document.getElementById('req-title').value = '';
            switchTab('my-trees');
        }

        function renderList() {
            const fullList = JSON.parse(localStorage.getItem('gardencare_data') || '[]');
            const myList = fullList.filter(item => item.owner === currentUser.email);
            const tbody = document.getElementById('tree-list-body');
            tbody.innerHTML = '';
            if (myList.length === 0) {
                document.getElementById('empty-msg').classList.remove('hidden');
                return;
            }
            document.getElementById('empty-msg').classList.add('hidden');
            myList.forEach(item => {
                let statusColor = 'bg-yellow-100 text-yellow-800';
                if(item.status === 'Đang chăm sóc') statusColor = 'bg-blue-100 text-blue-800';
                if(item.status === 'Hoàn thành') statusColor = 'bg-green-100 text-green-800';
                tbody.innerHTML += '<tr class="border-b hover:bg-gray-50">' +
                    '<td class="p-3"><div class="font-bold text-gray-700">' + item.title + '</div><div class="text-xs text-gray-400">Mã: ' + item.id + '</div></td>' +
                    '<td class="p-3 text-sm">' + item.type + '</td>' +
                    '<td class="p-3"><span class="' + statusColor + ' px-2 py-1 rounded text-xs font-bold">' + item.status + '</span></td>' +
                    '<td class="p-3 text-right text-gray-500 text-sm">' + item.date + '</td>' +
                '</tr>';
            });
        }
        renderList();
    </script>
</body>
</html>`,

  'admindash.html': `
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hệ thống quản trị trung tâm Garden Care</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Nunito', sans-serif; background-color: #f3f4f6; margin: 0; }
        .sidebar-link { display: flex; align-items: center; padding: 12px 20px; color: #9ca3af; font-weight: 600; transition: all 0.3s; border-radius: 8px; margin-bottom: 4px; }
        .sidebar-link:hover { color: white; background-color: #374151; }
        .sidebar-link.active { background-color: #2E8B57; color: white; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); }
        .sidebar-link i { width: 24px; text-align: center; margin-right: 12px; }
        .stat-card { transition: transform 0.2s; }
        .stat-card:hover { transform: translateY(-5px); }
        .fade-in { animation: fadeIn 0.4s ease-in-out; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #f1f1f1; }
        ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
        .view-content { display: none; }
        .view-content.active { display: block; }
    </style>
</head>
<body class="flex h-screen overflow-hidden text-gray-800">
    <aside class="w-64 bg-[#111827] flex flex-col shadow-2xl z-20 flex-shrink-0">
        <div class="h-24 bg-white flex items-center justify-center border-b border-gray-200">
            <div class="flex flex-col items-center cursor-pointer" onclick="location.reload()">
                <svg width="45" height="50" viewBox="0 0 200 240" class="mb-1">
                    <g transform="translate(0, 10)"> 
                        <circle cx="100" cy="100" r="90" fill="#f0fdf4" stroke="#2E8B57" stroke-width="4"/>
                        <path d="M100 160 Q 40 100 100 40 Q 160 100 100 160 Z" fill="#4CAF50" />
                        <circle cx="100" cy="160" r="6" fill="#008B8B" />
                        <path d="M100 160 L 100 70" stroke="#008B8B" stroke-width="3" />
                    </g>
                </svg>
                <span class="font-bold text-[#2E8B57] text-sm tracking-widest uppercase">Garden Care</span>
            </div>
        </div>
        <nav class="flex-grow p-4 mt-2 space-y-1">
            <div onclick="switchView('dashboard')" id="nav-dashboard" class="sidebar-link active cursor-pointer"><i class="fa-solid fa-chart-pie"></i> Tổng quan</div>
            <div onclick="switchView('orders')" id="nav-orders" class="sidebar-link cursor-pointer"><i class="fa-solid fa-clipboard-list"></i> Quản lý Đơn hàng</div>
            <div onclick="switchView('customers')" id="nav-customers" class="sidebar-link cursor-pointer"><i class="fa-solid fa-users"></i> Khách hàng</div>
            <div onclick="switchView('plants')" id="nav-plants" class="sidebar-link cursor-pointer"><i class="fa-solid fa-book-open"></i> Kho Kiến thức Cây</div>
            <div onclick="switchView('iot')" id="nav-iot" class="sidebar-link cursor-pointer"><i class="fa-solid fa-microchip"></i> Thiết bị IoT</div>
        </nav>
        <div class="p-4 border-t border-gray-800">
            <button onclick="parent.postMessage({type:'NAV',page:'login.html'},'*')" class="flex items-center gap-3 text-red-400 hover:text-red-300 w-full font-bold px-4 py-2 transition rounded hover:bg-gray-800">
                <i class="fa-solid fa-power-off"></i> Đăng xuất
            </button>
        </div>
    </aside>
    <main class="flex-1 flex flex-col overflow-y-auto bg-[#f3f4f6]">
        <header class="h-20 bg-white shadow-sm flex items-center justify-between px-8 sticky top-0 z-30">
            <div>
                <h1 class="text-2xl font-extrabold text-gray-800" id="page-title">Tổng quan hệ thống</h1>
                <p class="text-xs text-gray-500 mt-1">Chào mừng quay trở lại, Admin!</p>
            </div>
            <div class="flex items-center gap-6">
                <div class="flex items-center gap-3 border-l pl-6 border-gray-200">
                    <div class="text-right">
                        <div class="font-bold text-sm text-gray-800 uppercase italic">Quản trị viên</div>
                        <div class="text-[9px] text-[#2E8B57] font-black tracking-widest uppercase">Super Admin</div>
                    </div>
                    <div class="w-10 h-10 rounded-full bg-[#2E8B57] text-white flex items-center justify-center font-bold text-lg shadow-md cursor-pointer">AD</div>
                </div>
            </div>
        </header>
        <div class="p-8">
            <!-- VIEW: DASHBOARD -->
            <div id="view-dashboard" class="view-content active fade-in">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div class="stat-card bg-white p-6 rounded-xl shadow-sm border-b-4 border-[#2E8B57] relative">
                        <div><p class="text-gray-500 text-xs font-bold uppercase tracking-wide">TỔNG ĐƠN HÀNG</p><h3 class="text-3xl font-extrabold text-gray-800 mt-2" id="stat-orders">0</h3></div>
                        <div class="absolute top-4 right-4 p-2 bg-green-50 rounded-lg text-[#2E8B57]"><i class="fa-solid fa-box-open text-xl"></i></div>
                    </div>
                    <div class="stat-card bg-white p-6 rounded-xl shadow-sm border-b-4 border-blue-500 relative">
                        <div><p class="text-gray-500 text-xs font-bold uppercase">DOANH THU THÁNG</p><h3 class="text-3xl font-extrabold text-gray-800 mt-2">12.5M</h3></div>
                        <div class="absolute top-4 right-4 p-2 bg-blue-50 rounded-lg text-blue-500"><i class="fa-solid fa-money-bill-wave text-xl"></i></div>
                    </div>
                    <div class="stat-card bg-white p-6 rounded-xl shadow-sm border-b-4 border-yellow-400 relative">
                        <div><p class="text-gray-500 text-xs font-bold uppercase">ĐANG LƯU TRÚ</p><h3 class="text-3xl font-extrabold text-gray-800 mt-2">24</h3></div>
                        <div class="absolute top-4 right-4 p-2 bg-yellow-50 rounded-lg text-yellow-500"><i class="fa-solid fa-hotel text-xl"></i></div>
                    </div>
                    <div class="stat-card bg-white p-6 rounded-xl shadow-sm border-b-4 border-red-500 relative">
                        <div><p class="text-gray-500 text-xs font-bold uppercase">CÂY CẦN CHỮA</p><h3 class="text-3xl font-extrabold text-gray-800 mt-2">5</h3></div>
                        <div class="absolute top-4 right-4 p-2 bg-red-50 rounded-lg text-red-500"><i class="fa-solid fa-notes-medical text-xl"></i></div>
                    </div>
                </div>
                <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <div class="px-6 py-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/30">
                        <div><h3 class="font-bold text-lg text-gray-800">Yêu cầu mới nhất</h3><p class="text-xs text-gray-500">Tất cả yêu cầu vừa cập nhật</p></div>
                        <button onclick="loadOrders()" class="px-3 py-1.5 bg-[#2E8B57] text-white rounded text-xs font-bold hover:bg-green-700 transition flex items-center"><i class="fa-solid fa-rotate-right mr-2"></i> Làm mới</button>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="w-full text-left">
                            <thead class="bg-gray-50 text-xs uppercase text-gray-500 font-bold tracking-wider">
                                <tr>
                                    <th class="p-4 pl-6">Thông tin Yêu cầu</th>
                                    <th class="p-4">Khách hàng</th>
                                    <th class="p-4">Dịch vụ</th>
                                    <th class="p-4">Trạng thái</th>
                                    <th class="p-4 text-center">Hành động</th>
                                </tr>
                            </thead>
                            <tbody id="order-table-body" class="divide-y divide-gray-100 text-sm"></tbody>
                        </table>
                    </div>
                </div>
            </div>

            <!-- VIEW: ORDERS -->
            <div id="view-orders" class="view-content fade-in">
                <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                    <div class="p-6 border-b font-bold text-gray-700 bg-gray-50">Tất cả đơn hàng của hệ thống</div>
                    <div class="overflow-x-auto">
                        <table class="w-full text-left">
                            <thead class="bg-white text-xs uppercase text-gray-500 font-bold">
                                <tr>
                                    <th class="p-4 pl-6">Mã đơn / Cây</th>
                                    <th class="p-4">Khách hàng</th>
                                    <th class="p-4">Ngày tạo</th>
                                    <th class="p-4">Trạng thái</th>
                                    <th class="p-4 text-center">Hành động</th>
                                </tr>
                            </thead>
                            <tbody id="full-order-table-body" class="divide-y divide-gray-100 text-sm"></tbody>
                        </table>
                    </div>
                </div>
            </div>

            <!-- VIEW: CUSTOMERS -->
            <div id="view-customers" class="view-content fade-in">
                <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <div class="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/30">
                        <div>
                            <h3 class="font-bold text-lg text-gray-800">Danh sách Khách hàng</h3>
                            <p class="text-xs text-gray-500">Tự động tổng hợp từ đơn hàng đã gửi</p>
                        </div>
                        <div class="relative">
                            <input type="text" placeholder="Tìm tên, email..." class="border border-gray-200 rounded-lg pl-3 pr-8 py-1.5 text-sm focus:outline-none focus:border-[#2E8B57]">
                            <i class="fa-solid fa-magnifying-glass absolute right-3 top-2.5 text-gray-400 text-xs"></i>
                        </div>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="w-full text-left">
                            <thead class="bg-gray-50 text-xs uppercase text-gray-500 font-bold tracking-wider">
                                <tr>
                                    <th class="p-4 pl-6">Thông tin Khách hàng</th>
                                    <th class="p-4">Liên hệ</th>
                                    <th class="p-4">Hạng thành viên</th>
                                    <th class="p-4 text-center">Hành động</th>
                                </tr>
                            </thead>
                            <tbody id="customer-table-body" class="divide-y divide-gray-100 text-sm"></tbody>
                        </table>
                    </div>
                </div>
            </div>

            <!-- VIEW: PLANTS -->
            <div id="view-plants" class="view-content fade-in">
                <div class="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
                    <div>
                        <h2 class="text-2xl font-bold text-gray-800 border-l-4 border-[#2E8B57] pl-3">Kho Kiến thức & Dữ liệu Cây</h2>
                        <p class="text-sm text-gray-500 mt-2 pl-4">Quản lý bài viết chia sẻ kinh nghiệm và thông tin giống cây</p>
                    </div>
                    <div class="flex gap-3 w-full md:w-auto">
                        <div class="relative flex-grow md:flex-grow-0">
                            <input type="text" id="plant-search" onkeyup="filterPlants()" placeholder="Tìm kiếm bài viết..." 
                                   class="w-full md:w-64 bg-white border border-gray-300 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-[#2E8B57] shadow-sm transition">
                            <i class="fa-solid fa-magnifying-glass absolute left-3 top-2.5 text-gray-400 text-xs"></i>
                        </div>
                        <button class="bg-[#2E8B57] text-white px-5 py-2 rounded-lg shadow hover:bg-green-700 transition font-bold flex items-center gap-2">
                            <i class="fa-solid fa-plus"></i> Thêm bài mới
                        </button>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="plant-grid"></div>
            </div>

            <!-- VIEW: IOT -->
            <div id="view-iot" class="view-content fade-in">
                <div class="flex justify-between items-center mb-6">
                    <h2 class="text-2xl font-bold text-gray-800 border-l-4 border-[#2E8B57] pl-3">Giám sát Thiết bị IoT</h2>
                    <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold flex items-center gap-2">
                        <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> Hệ thống Online
                    </span>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div class="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                        <div><p class="text-gray-500 text-[10px] font-bold uppercase tracking-wider">Tổng thiết bị</p><h3 class="text-2xl font-extrabold text-gray-800 mt-1">12</h3></div>
                        <div class="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-lg"><i class="fa-solid fa-server"></i></div>
                    </div>
                    <div class="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                        <div><p class="text-gray-500 text-[10px] font-bold uppercase tracking-wider">Hoạt động</p><h3 class="text-2xl font-extrabold text-green-600 mt-1">10</h3></div>
                        <div class="w-10 h-10 bg-green-50 text-green-600 rounded-lg flex items-center justify-center text-lg"><i class="fa-solid fa-wifi"></i></div>
                    </div>
                    <div class="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                        <div><p class="text-gray-500 text-[10px] font-bold uppercase tracking-wider">Mất kết nối</p><h3 class="text-2xl font-extrabold text-gray-400 mt-1">1</h3></div>
                        <div class="w-10 h-10 bg-gray-100 text-gray-500 rounded-lg flex items-center justify-center text-lg"><i class="fa-solid fa-ban"></i></div>
                    </div>
                    <div class="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                        <div><p class="text-gray-500 text-[10px] font-bold uppercase tracking-wider">Cảnh báo Pin</p><h3 class="text-2xl font-extrabold text-red-500 mt-1">1</h3></div>
                        <div class="w-10 h-10 bg-red-50 text-red-500 rounded-lg flex items-center justify-center text-lg"><i class="fa-solid fa-battery-quarter"></i></div>
                    </div>
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div class="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                        <div class="px-6 py-4 border-b border-gray-100 bg-gray-50/50 flex justify-between items-center">
                            <h3 class="font-bold text-gray-800">Danh sách Sensor & Hub</h3>
                            <input type="text" placeholder="Tìm ID..." class="border border-gray-200 rounded-lg px-3 py-1 text-xs focus:outline-none focus:border-[#2E8B57]">
                        </div>
                        <div class="overflow-x-auto">
                            <table class="w-full text-left">
                                <thead class="bg-white text-[10px] uppercase text-gray-500 font-bold border-b">
                                    <tr>
                                        <th class="p-4 pl-6">Thiết bị</th>
                                        <th class="p-4">Chủ sở hữu</th>
                                        <th class="p-4">Pin</th>
                                        <th class="p-4">Tình trạng</th>
                                        <th class="p-4 text-right">Cập nhật</th>
                                    </tr>
                                </thead>
                                <tbody id="iot-device-list" class="divide-y divide-gray-50 text-sm"></tbody>
                            </table>
                        </div>
                    </div>
                    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
                        <h3 class="font-bold text-gray-800 mb-4 flex items-center gap-2"><i class="fa-solid fa-bolt text-yellow-500"></i> Nhật ký hoạt động</h3>
                        <div class="space-y-6">
                            <div class="relative pl-6 border-l-2 border-green-200">
                                <div class="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                                <p class="text-[10px] font-bold text-gray-400 uppercase">Vừa xong</p>
                                <p class="text-sm text-gray-700">Thiết bị <b class="text-[#2E8B57]">#IOT-A01</b> kích hoạt tưới.</p>
                            </div>
                            <div class="relative pl-6 border-l-2 border-red-200">
                                <div class="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-red-500 rounded-full"></div>
                                <p class="text-[10px] font-bold text-gray-400 uppercase">15 phút trước</p>
                                <p class="text-sm text-gray-700">Cảnh báo: <b class="text-gray-800">#IOT-B02</b> pin yếu.</p>
                            </div>
                            <div class="relative pl-6 border-l-2 border-blue-200">
                                <div class="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-blue-500 rounded-full"></div>
                                <p class="text-[10px] font-bold text-gray-400 uppercase">30 phút trước</p>
                                <p class="text-sm text-gray-700">Hub trung tâm <b class="text-gray-800">#HUB-01</b> đồng bộ.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <script>
        // --- DỮ LIỆU GIẢ ---
        const initialOrders = [
            { id: 'GC-1000', title: 'Cây Bàng Singapore (Vàng lá)', owner: 'khachvip@gmail.com', ownerName: 'Khách Vip', type: 'Bệnh viện (Chữa bệnh)', date: '09/12/2025', status: 'Đã tiếp nhận', icon: 'fa-notes-medical', color: 'red' },
            { id: 'GC-1001', title: 'Gửi cây Lan Ý (5 ngày)', owner: 'userA@gmail.com', ownerName: 'Nguyễn Văn A', type: 'Gửi Khách sạn (Lưu trú)', date: '08/12/2025', status: 'Đã tiếp nhận', icon: 'fa-hotel', color: 'blue' },
            { id: 'GC-1002', title: 'Lắp đặt IoT cho vườn ban công', owner: 'userB@gmail.com', ownerName: 'Trần Thị B', type: 'Tư vấn tại nhà', date: '07/12/2025', status: 'Đã tiếp nhận', icon: 'fa-leaf', color: 'green' }
        ];

        const initialPlants = [
            { id: 1, title: "Monstera Variegata - Đột biến đắt đỏ", desc: "Tìm hiểu về dòng trầu bà lá xẻ đột biến (Albo).", views: 1250, tag: "Cây quý hiếm", image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&q=80&w=800" },
            { id: 2, title: "Kỹ thuật trộn giá thể Aroids chuẩn", desc: "Công thức đất trồng thoát nước tốt, giàu dinh dưỡng.", views: 890, tag: "Kỹ thuật", image: "https://images.unsplash.com/photo-1611689342806-0863700ce1e4?auto=format&fit=crop&q=80&w=800" },
            { id: 3, title: "Cấp cứu cây bị úng rễ, vàng lá", desc: "Hướng dẫn sơ cứu khẩn cấp khi lỡ tưới quá nhiều.", views: 3400, tag: "Bệnh học", image: "https://images.unsplash.com/photo-1599598425947-52026d7bb38d?auto=format&fit=crop&q=80&w=800" }
        ];

        const mockIoTDevices = [
            { id: 'IOT-A01', name: 'Smart Stick A1', owner: 'Nguyễn Văn A', type: 'Cảm biến đất', battery: 92, status: 'Online', lastUpdate: 'Vừa xong' },
            { id: 'IOT-B02', name: 'Sensor Độ ẩm', owner: 'Trần Thị B', type: 'Cảm biến không khí', battery: 12, status: 'Low Batt', lastUpdate: '15 phút trước' },
            { id: 'HUB-01', name: 'Hub Trung tâm', owner: 'Admin Hub', type: 'Gateway', battery: 100, status: 'Online', lastUpdate: 'Vừa xong' }
        ];

        function switchView(viewId) {
            document.querySelectorAll('.view-content').forEach(v => v.classList.remove('active'));
            document.getElementById('view-' + viewId).classList.add('active');
            document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));
            document.getElementById('nav-' + viewId).classList.add('active');
            const titles = { 'dashboard': 'Tổng quan hệ thống', 'orders': 'Quản lý Đơn hàng', 'customers': 'Khách hàng', 'plants': 'Kiến thức Cây', 'iot': 'Thiết bị IoT' };
            document.getElementById('page-title').innerText = titles[viewId];
            if(viewId === 'plants') renderPlants();
            if(viewId === 'customers') renderCustomers();
            if(viewId === 'iot') renderIoT();
            if(viewId === 'dashboard' || viewId === 'orders') loadOrders();
        }

        function loadOrders() {
            let orders = JSON.parse(localStorage.getItem('gardencare_data') || '[]');
            if (orders.length === 0) {
                orders = initialOrders;
                localStorage.setItem('gardencare_data', JSON.stringify(orders));
            }
            document.getElementById('stat-orders').innerText = orders.length;
            ['order-table-body', 'full-order-table-body'].forEach(tableId => {
                const tbody = document.getElementById(tableId);
                if (!tbody) return;
                tbody.innerHTML = '';
                orders.forEach((order, index) => {
                    let badgeClass = 'bg-blue-100 text-blue-700';
                    if (order.status === 'Đang chăm sóc') badgeClass = 'bg-yellow-100 text-yellow-700';
                    if (order.status === 'Hoàn thành') badgeClass = 'bg-green-100 text-green-700';
                    tbody.innerHTML += '<tr class="border-b border-gray-50">' +
                        '<td class="p-4 pl-6"><div class="font-bold">' + order.title + '</div><div class="text-xs text-gray-400">#' + order.id + '</div></td>' +
                        '<td class="p-4"><div class="font-bold text-xs">' + (order.ownerName || 'Khách') + '</div><div class="text-[10px] text-gray-400">' + order.owner + '</div></td>' +
                        '<td class="p-4 text-xs italic">' + (order.type || order.date) + '</td>' +
                        '<td class="p-4"><span class="' + badgeClass + ' px-2 py-1 rounded text-[10px] font-black uppercase">' + order.status + '</span></td>' +
                        '<td class="p-4 text-center"><div class="flex justify-center gap-2">' +
                            '<button onclick="updateStatus(' + index + ', \\'Đang chăm sóc\\')" class="w-8 h-8 rounded-lg bg-yellow-50 text-yellow-600 hover:bg-yellow-500 hover:text-white transition flex items-center justify-center"><i class="fa-solid fa-leaf text-xs"></i></button>' +
                            '<button onclick="updateStatus(' + index + ', \\'Hoàn thành\\')" class="w-8 h-8 rounded-lg bg-green-50 text-green-600 hover:bg-green-500 hover:text-white transition flex items-center justify-center"><i class="fa-solid fa-check text-xs"></i></button>' +
                            '<button onclick="deleteOrder(' + index + ')" class="w-8 h-8 rounded-lg bg-red-50 text-red-600 hover:bg-red-500 hover:text-white transition flex items-center justify-center"><i class="fa-solid fa-trash text-xs"></i></button>' +
                        '</div></td>' +
                    '</tr>';
                });
            });
        }

        function renderCustomers() {
            const orders = JSON.parse(localStorage.getItem('gardencare_data') || '[]');
            const customers = [];
            const emails = [...new Set(orders.map(o => o.owner))];
            emails.forEach(email => {
                const info = orders.find(o => o.owner === email);
                customers.push({ name: info.ownerName, email: email, count: orders.filter(o => o.owner === email).length });
            });
            const tbody = document.getElementById('customer-table-body');
            tbody.innerHTML = '';
            customers.forEach(c => {
                let rank = 'Thành viên mới';
                if(c.count >= 3) rank = 'Thân thiết';
                tbody.innerHTML += '<tr class="hover:bg-gray-50 border-b border-gray-50">' +
                    '<td class="p-4 pl-6 flex items-center gap-3"><div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">' + c.name[0] + '</div><div><div class="font-bold">' + c.name + '</div><div class="text-xs text-gray-400">' + c.email + '</div></div></td>' +
                    '<td class="p-4 text-xs italic text-gray-400">Chưa cập nhật SĐT</td>' +
                    '<td class="p-4"><span class="bg-gray-100 px-2 py-1 rounded text-[10px] font-bold uppercase">' + rank + '</span> <span class="text-[10px] text-gray-400">(' + c.count + ' đơn)</span></td>' +
                    '<td class="p-4 text-center text-gray-400 flex justify-center gap-3"><i class="fa-solid fa-envelope"></i><i class="fa-solid fa-ban"></i></td>' +
                '</tr>';
            });
        }

        function renderPlants() {
            const grid = document.getElementById('plant-grid');
            grid.innerHTML = '';
            initialPlants.forEach(p => {
                grid.innerHTML += \`
                    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition">
                        <img src="\${p.image}" class="w-full h-40 object-cover">
                        <div class="p-4">
                            <span class="bg-emerald-50 text-emerald-600 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide">\${p.tag}</span>
                            <h3 class="font-bold text-gray-800 mt-2">\${p.title}</h3>
                            <p class="text-xs text-gray-500 mt-1 line-clamp-2">\${p.desc}</p>
                            <div class="flex justify-between items-center mt-4 pt-4 border-t border-gray-50">
                                <span class="text-[10px] text-gray-400 font-bold"><i class="fa-solid fa-eye mr-1"></i> \${p.views}</span>
                                <button class="text-emerald-500 font-bold text-[10px] uppercase">Chi tiết</button>
                            </div>
                        </div>
                    </div>
                \`;
            });
        }

        function renderIoT() {
            const tbody = document.getElementById('iot-device-list');
            tbody.innerHTML = '';
            mockIoTDevices.forEach(d => {
                let statusBadge = d.status === 'Online' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-600';
                tbody.innerHTML += '<tr class="border-b border-gray-50">' +
                    '<td class="p-4 pl-6"><div><div class="font-bold">' + d.name + '</div><div class="text-[10px] text-gray-400">#' + d.id + '</div></div></td>' +
                    '<td class="p-4"><div class="font-bold text-xs">' + d.owner + '</div><div class="text-[10px] text-gray-400">' + d.type + '</div></td>' +
                    '<td class="p-4 text-xs font-bold">' + d.battery + '%</td>' +
                    '<td class="p-4"><span class="' + statusBadge + ' px-2 py-0.5 rounded text-[10px] font-bold uppercase">' + d.status + '</span></td>' +
                    '<td class="p-4 text-right text-[10px] text-gray-400">' + d.lastUpdate + '</td>' +
                '</tr>';
            });
        }

        function updateStatus(index, status) {
            let orders = JSON.parse(localStorage.getItem('gardencare_data') || '[]');
            orders[index].status = status;
            localStorage.setItem('gardencare_data', JSON.stringify(orders));
            loadOrders();
        }

        function deleteOrder(index) {
            if(confirm("Xóa đơn này?")) {
                let orders = JSON.parse(localStorage.getItem('gardencare_data') || '[]');
                orders.splice(index, 1);
                localStorage.setItem('gardencare_data', JSON.stringify(orders));
                loadOrders();
            }
        }
        loadOrders();
    </script>
</body>
</html>`
};

const DemoSlide: React.FC<SlideProps> = () => {
  const [currentPage, setCurrentPage] = useState('login.html');
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'mobile'>('desktop');
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type === 'NAV') {
        setCurrentPage(event.data.page);
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  const resetDemo = () => {
    if(confirm("Lưu ý: Hành động này sẽ xóa toàn bộ lịch sử thao tác thử nghiệm của bạn trong demo.")) {
        localStorage.removeItem('gardencare_data');
        localStorage.removeItem('gardencare_user');
        setCurrentPage('login.html');
    }
  };

  return (
    <div className="h-full flex flex-col items-center justify-start pt-8 pb-4">
      <div className="flex w-full justify-between items-end mb-6">
        <div>
           <motion.div 
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             className="flex items-center gap-3 mb-2"
           >
              <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <Users size={18} className="text-white fill-white" />
              </div>
              <h2 className="text-3xl font-black italic tracking-tighter uppercase text-white">
                Hệ thống <span className="text-emerald-500 underline decoration-emerald-500/20">Quản trị Thực tế</span>
              </h2>
           </motion.div>
           <p className="text-slate-500 text-xs font-medium pl-11">Thử nghiệm đa vai trò: Khách hàng (gửi yêu cầu) & Quản trị (xử lý đơn hàng).</p>
        </div>

        <div className="flex gap-4 bg-slate-900/80 p-2 rounded-2xl border border-slate-800 backdrop-blur-xl">
           <button 
             onClick={() => setDeviceMode('desktop')}
             className={`p-2.5 rounded-xl transition-all ${deviceMode === 'desktop' ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/20' : 'text-slate-500 hover:text-slate-300'}`}
           >
             <Monitor size={20} />
           </button>
           <button 
             onClick={() => setDeviceMode('mobile')}
             className={`p-2.5 rounded-xl transition-all ${deviceMode === 'mobile' ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/20' : 'text-slate-500 hover:text-slate-300'}`}
           >
             <Smartphone size={20} />
           </button>
           <div className="w-px bg-slate-800 mx-1" />
           <button 
             onClick={resetDemo}
             className="p-2.5 text-slate-500 hover:text-red-400 transition-colors"
             title="Dọn dẹp & Reset"
           >
             <RotateCcw size={20} />
           </button>
        </div>
      </div>

      <motion.div 
        layout
        transition={{ type: 'spring', stiffness: 180, damping: 22 }}
        className={`bg-[#f3f4f6] border border-slate-800 rounded-[32px] overflow-hidden shadow-2xl relative flex flex-col ${
          deviceMode === 'desktop' ? 'w-full h-[550px]' : 'w-[375px] h-[667px]'
        }`}
      >
        <div className="h-10 bg-slate-900 flex items-center px-4 gap-4 border-b border-white/5">
           <div className="flex gap-1.5 shrink-0">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
           </div>
           <div className="flex-grow bg-slate-800/80 rounded-lg h-6 flex items-center px-3 gap-2 border border-white/5">
              <ShieldCheck size={10} className="text-emerald-500" />
              <span className="text-[10px] text-slate-400 font-mono tracking-tight overflow-hidden whitespace-nowrap">https://demo.gardencare.app/{currentPage}</span>
           </div>
        </div>

        <div className="flex-grow relative overflow-hidden bg-white">
           <iframe 
             key={currentPage}
             ref={iframeRef}
             srcDoc={PAGES[currentPage as keyof typeof PAGES]}
             className="w-full h-full border-none"
             title="Garden Care Simulation"
             sandbox="allow-scripts allow-modals allow-forms allow-same-origin"
           />
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-6 flex items-center gap-6"
      >
        <p className="text-slate-600 text-[9px] font-black uppercase tracking-[0.4em] flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
          Dữ liệu được lưu trữ riêng biệt theo từng tài khoản.
        </p>
      </motion.div>
    </div>
  );
};

export default DemoSlide;
