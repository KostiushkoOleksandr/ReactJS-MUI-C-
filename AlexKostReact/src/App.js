// import { BottomNavigation, BottomNavigationAction, Typography } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Authenticate from './components/Authenticate';
import Layout from './components/Layout';
import Login from './components/Login';
import Quiz from './components/Quiz';
import Result from './components/Result';
import About from './components/About';
import Resume from "./components/Resume";
import Schedule from './components/Schedule';
import MuiTable from './components/MuiTable';
import CodeWords from './components/CodeWords';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Authenticate />}>
        <Route path="/" element={<Layout />}>
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
        <Route path="/MuiTable" element={<MuiTable />} />
        <Route path="/About" element={<About />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Schedule" element={<Schedule />} />
        <Route path="/CodeWords" element={<CodeWords />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter >
  );
}

export default App;
