import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/loginPage";
import ConfirmPage from "./pages/confirmPage";
import NewPassPage from "./pages/newPassPage";
import PageLayout from "./layouts/pageLayout";
import Dashboard from "./pages/dashboard";
import UserList from "./pages/userManagementPage";
import OpportunityPage from "./pages/opportunityPage";
import AddOpportunityPage from "./pages/addOpportunityPage";
import EditOpportunityPage from "./pages/editOpportunityPage";
import DetailOpportunityPage from "./pages/detailOpportunityPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/confirm" element={<ConfirmPage />} />
        <Route path="/password" element={<NewPassPage />} />
      </Routes>

      <Routes element={<PageLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user" element={<UserList />} />
        <Route path="/opportunity" element={<OpportunityPage /> } />
        <Route path="/opportunity/create" element={<AddOpportunityPage /> } />
        <Route path="/opportunity/edit" element={<EditOpportunityPage /> } />
        <Route path="/opportunity/detail" element={<DetailOpportunityPage /> } />
      </Routes>
    </Router>
  );
}

export default App;
