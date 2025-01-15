import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { DashboardLayout } from './pages/dashboard/DashboardLayout';
import { Home } from './pages/Home';
import { Platform } from './pages/Platform';
import { Solutions } from './pages/Solutions';
import { Pricing } from './pages/Pricing';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { About } from './pages/about/About';
import { GettingStarted } from './pages/docs/GettingStarted';
import { API } from './pages/docs/API';
import { Setup } from './pages/dashboard/Setup';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="platform" element={<Platform />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="about" element={<About />} />
          <Route path="docs">
            <Route index element={<GettingStarted />} />
            <Route path="api" element={<API />} />
          </Route>
        </Route>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Navigate to="setup" />} />
          <Route path="setup" element={<Setup />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);