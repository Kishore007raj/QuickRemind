
import { Brain, Zap } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Logo = () => {
  const { isDark } = useTheme();

  return (
    <div className="relative flex items-center">
      <div className="relative">
        <Brain className={`w-8 h-8 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`} />
        <div className="absolute -right-1 -top-1">
          <Zap className="w-4 h-4 text-yellow-500 animate-pulse" />
        </div>
      </div>
      <div className="ml-3">
        <h1 className={`text-xl font-bold ${
          isDark 
            ? 'bg-gradient-to-r from-indigo-400 to-indigo-200 bg-clip-text text-transparent'
            : 'bg-gradient-to-r from-indigo-600 to-indigo-800 bg-clip-text text-transparent'
        }`}>
          QuickRemind
        </h1>
        <div className={`text-[10px] uppercase tracking-wider font-medium ${
          isDark ? 'text-indigo-400/70' : 'text-indigo-600/70'
        }`}>
          AI Assistant
        </div>
      </div>
    </div>
  );
};

export default Logo;