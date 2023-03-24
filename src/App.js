import "./App.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LoginPage from "./pages/loginPage";
import ConfirmPage from "./pages/confirmPage";
import NewPassPage from "./pages/newPassPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />}/>
        <Route path="/confirm" element={<ConfirmPage/>}/>
        <Route path="/password" element={<NewPassPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
