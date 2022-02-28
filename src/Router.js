import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Nav from "./components/Nav/Nav";
// import Footer from "./components/Footer/Footer";
import Login from "./pages/Login/Login";
import Detail from "./pages/Detail/Detail";
import List from "./pages/List/List";

function Router() {
  return (
    <BrowserRouter>
      {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/list" element={<List />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default Router;