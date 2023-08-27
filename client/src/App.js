import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import ProtectedRoute from "./Pages/ProtectedRoute";

import {
  AllHabits,
  Profile,
  SharedLayout,
  Stats,
  AddHabit,
} from "./Pages/Dashboard";
import "./index.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/dashboard/stats" element={<Stats />} />
          <Route path="/dashboard/habits" element={<AllHabits />} />
          <Route path="/dashboard/new-habit" element={<AddHabit />} />
          <Route index element={<Profile />} />
        </Route>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
