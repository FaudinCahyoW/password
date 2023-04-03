import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/loginPage";
import ConfirmPage from "./pages/confirmPage";
import NewPassPage from "./pages/newPassPage";
import Dashboard from "./pages/dashboard";
import UserList from "./pages/userManagementPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/confirm" element={<ConfirmPage />} />
        <Route path="/password" element={<NewPassPage />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user" element={<UserList />} />
      </Routes>
    </Router>
  );
}

export default App;
