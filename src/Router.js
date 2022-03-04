import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 수빈's 컴포넌트
import LoginSubin from './pages/login/Login';
import DetailSubin from './pages/detail/Detail';
import ListSubin from './pages/list/List';
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login-subin" element={<LoginSubin />} />
        <Route path="/" element={<ListSubin />} />
        <Route path="/detail-subin" element={<DetailSubin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
