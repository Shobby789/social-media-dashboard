import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Settings from "./pages/settings/Settings";
import User from "./pages/user/User";
import Notifications from "./pages/notifications/Notifications";
import Saved from "./pages/saved/Saved";

export default function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<User />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/saved" element={<Saved />} />
      </Routes>
    </div>
  );
}
