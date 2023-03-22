import "./App.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LoginPage from "./pages/loginPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />}/>
        <Route path="/blank" element />
        <Route />
      </Routes>
    </Router>
  );
}

export default App;
