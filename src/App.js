import { ConfigProvider } from 'antd';
import AdminSite from 'component/admin/AdminSite';
import SubAdminSite from 'component/subadmin/SubAdminSite';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StoreManagement from 'view/admin/store-management/StoreManagement';
import UserManagement from 'view/admin/user-management/UserManagement';
import AuthenticationPage from 'view/common/authentication/AuthenticationPage';
import './App.css';
import RoleManagement from 'view/admin/role-management/RoleManagement';


function App() {
  return (
    <ConfigProvider>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<SubAdminSite />}>
            <Route path='/menu' element={<div>menu</div>} />
            <Route path='/order' element={<div>order</div>} />
            <Route path='/user-list' element={<div>user-list</div>} />
            <Route path='/user-detail' element={<div>user-detail</div>} />
          </Route>
          <Route path={"/admin"} element={<AdminSite />}>
            <Route path='/admin/home' element={<div>admin home</div>} />
            <Route path='/admin/store-management' element={<StoreManagement />} />
            <Route path='/admin/role-management' element={<RoleManagement />} />
            <Route path='/admin/menu' element={<div>admin menu</div>} />
            <Route path='/admin/order' element={<div>admin order</div>} />
            <Route path='/admin/user-management' element={<UserManagement />} />
          </Route>
          <Route path="/login" element={<AuthenticationPage tab={"loginPage"} />} />
          <Route path="/signup" element={<AuthenticationPage tab={"signupPage"} />} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
