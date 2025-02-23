
import { Brain, Shield, Bell, MessageSquare, ArrowUp, ArrowDown } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { 
      icon: Brain, 
      label: 'AI Detections', 
      value: '247', 
      change: '+12%',
      trend: 'up',
      description: 'this week'
    },
    { 
      icon: Bell, 
      label: 'Active Reminders', 
      value: '18', 
      change: '+3',
      trend: 'up',
      description: 'from yesterday'
    },
    { 
      icon: MessageSquare, 
      label: 'Connected Sources', 
      value: '4', 
      change: '100%',
      trend: 'neutral',
      description: 'all synced'
    },
    { 
      icon: Shield, 
      label: 'Privacy Score', 
      value: '100%', 
      change: '+5%',
      trend: 'up',
      description: 'fully protected'
    },
  ];

  const recentReminders = [
    { title: 'Team Meeting', source: 'WhatsApp', time: 'Tomorrow at 10:00 AM', priority: 'high' },
    { title: 'Project Deadline', source: 'Email', time: 'Friday at 5:00 PM', priority: 'medium' },
    { title: 'Call with Client', source: 'Telegram', time: 'Next Monday at 2:00 PM', priority: 'low' },
  ];

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Welcome back!</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-1">Your AI assistant is actively monitoring your messages.</p>
        </div>
        <div className="flex items-center gap-2 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-500/10 dark:to-emerald-500/10 text-green-700 dark:text-green-400 px-4 py-2 rounded-lg border border-green-100 dark:border-green-500/20">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="font-medium">AI Active</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 hover:border-indigo-200 dark:hover:border-indigo-500/50 transition-colors group">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-500/10 dark:to-purple-500/10 rounded-lg group-hover:from-indigo-100 group-hover:to-purple-100 dark:group-hover:from-indigo-500/20 dark:group-hover:to-purple-500/20 transition-colors">
                  <Icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</p>
                  <p className="text-2xl font-semibold text-slate-800 dark:text-white">{stat.value}</p>
                  <div className="flex items-center gap-1 mt-1">
                    {stat.trend === 'up' && <ArrowUp className="w-4 h-4 text-green-500" />}
                    {stat.trend === 'down' && <ArrowDown className="w-4 h-4 text-red-500" />}
                    <span className={`text-sm ${
                      stat.trend === 'up' ? 'text-green-600 dark:text-green-400' :
                      stat.trend === 'down' ? 'text-red-600 dark:text-red-400' :
                      'text-slate-600 dark:text-slate-400'
                    }`}>
                      {stat.change}
                    </span>
                    <span className="text-sm text-slate-500 dark:text-slate-500">
                      {stat.description}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
          <h2 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">Upcoming Reminders</h2>
          <div className="space-y-4">
            {recentReminders.map((reminder, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-all cursor-pointer group">
                <div className="flex items-center gap-4">
                  <div className={`w-2 h-2 rounded-full transition-transform group-hover:scale-125 ${
                    reminder.priority === 'high' ? 'bg-red-500' :
                    reminder.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                  }`} />
                  <div>
                    <h3 className="font-medium text-slate-800 dark:text-white">{reminder.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{reminder.time}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-slate-500 dark:text-slate-400">via</span>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{reminder.source}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
          <h2 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">Connected Sources</h2>
          <div className="space-y-4">
            {['WhatsApp', 'Telegram', 'Gmail', 'Notes'].map((source, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-all cursor-pointer group">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 transition-transform group-hover:scale-125" />
                  <span className="font-medium text-slate-800 dark:text-white">{source}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm text-green-600 dark:text-green-400">Connected</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;