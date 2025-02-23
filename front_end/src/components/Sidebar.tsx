import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Brain, Bell, Inbox, Settings, LogIn } from 'lucide-react';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';

const Sidebar: React.FC<{ onAuthClick: () => void }> = ({ onAuthClick }) => {
  const location = useLocation();
  
  const menuItems = [
    { icon: Brain, label: 'Dashboard', path: '/' },
    { icon: Bell, label: 'Reminders', path: '/reminders' },
    { icon: Inbox, label: 'Sources', path: '/sources' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <div className="w-64 bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 min-h-screen p-4 transition-colors">
      <div className="flex justify-between items-center mb-8 px-2">
        <Logo />
        <ThemeToggle />
      </div>
      <nav className="space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200 group ${
                isActive
                  ? 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700/50 hover:text-indigo-600 dark:hover:text-indigo-400'
              }`}
            >
              <div className={`p-2 rounded-lg transition-colors duration-200 ${
                isActive ? 'bg-indigo-100 dark:bg-indigo-500/20' : 'group-hover:bg-slate-100 dark:group-hover:bg-slate-700'
              }`}>
                <Icon className="w-5 h-5" />
              </div>
              <span className="font-medium">{item.label}</span>
              {isActive && (
                <div className="ml-auto w-1.5 h-6 bg-indigo-600 dark:bg-indigo-400 rounded-full" />
              )}
            </Link>
          );
        })}
        <button
          onClick={onAuthClick}
          className="flex items-center gap-3 p-3 rounded-lg transition-all duration-200 group text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700/50 hover:text-indigo-600 dark:hover:text-indigo-400 w-full text-left"
        >
          <div className="p-2 rounded-lg transition-colors duration-200 group-hover:bg-slate-100 dark:group-hover:bg-slate-700">
            <LogIn className="w-5 h-5" />
          </div>
          <span className="font-medium">Login / Signup</span>
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;