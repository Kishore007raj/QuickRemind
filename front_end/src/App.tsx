import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Reminders from './components/Reminders';
import Sources from './components/Sources';
import Settings from './components/Settings';
import FileUpload from './components/FileUpload';
import FileList from './components/FileList';
import StartingPage from './components/StartingPage';
import AuthModal from './components/AuthModal';
import { useState } from 'react';

function App() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <ThemeProvider>
      <Router>
        <div className="flex min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors">
          <Sidebar onAuthClick={() => setIsAuthOpen(true)} />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<StartingPage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/reminders" element={<Reminders />} />
              <Route path="/sources" element={<Sources />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/upload" element={<FileUpload />} />
              <Route path="/files" element={<FileList />} />
            </Routes>
          </main>
        </div>
        <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
      </Router>
    </ThemeProvider>
  );
}

export default App;