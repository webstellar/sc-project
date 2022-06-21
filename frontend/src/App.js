import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/route/ProtectedRoute";
import "./App.css";

import HeaderNav from "./components/layout/HeaderNav";
import FooterNav from "./components/layout/FooterNav";

import Home from "./components/pages/Home";
import Discover from "./components/pages/Discover";
import FAQs from "./components/pages/FAQs";
import HelpCenter from "./components/pages/HelpCenter";
import Donate from "./components/pages/Donate";
import ContactUs from "./components/pages/ContactUs";

import HeroDetails from "./components/heroes/hero/HeroDetails";
import AppreciationDetails from "./components/appreciations/AppreciationDetails";

import Register from "./components/user/Register";
import Login from "./components/user/Login";
import Profile from "./components/user/Profile";
import UpdateProfile from "./components/user/UpdateProfile";
import UpdatePassword from "./components/user/UpdatePassword";
import ForgotPassword from "./components/user/ForgotPassword";
import NewPassword from "./components/user/NewPassword";

import Dashboard from "./components/admin/Dashboard";
import HeroesList from "./components/admin/HeroesList";
import AppreciationsList from "./components/admin/AppreciationsList";
import NewAdminHero from "./components/admin/NewAdminHero";

import { loadUser } from "./actions/userAction";
import store from "./store";

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <BrowserRouter>
      <HeaderNav />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/search/:keyword" element={<Home />} />
        <Route path="/hero/:id" element={<HeroDetails />} exact />
        <Route
          path="/appreciation/:id"
          element={<AppreciationDetails />}
          exact
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/me"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/me/update"
          element={
            <ProtectedRoute>
              <UpdateProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/password/update"
          element={
            <ProtectedRoute>
              <UpdatePassword />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isAdmin="admin">
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/appreciations"
          element={
            <ProtectedRoute isAdmin="admin">
              <AppreciationsList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/heroes"
          element={
            <ProtectedRoute isAdmin="admin">
              <HeroesList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/hero"
          element={
            <ProtectedRoute isAdmin="admin">
              <NewAdminHero />
            </ProtectedRoute>
          }
        />
        <Route path="/password/forgot" element={<ForgotPassword />} />
        <Route path="/password/reset/:token" element={<NewPassword />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/helpcenter" element={<HelpCenter />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <FooterNav />
    </BrowserRouter>
  );
}

export default App;
