
import { Bell, Shield, Brain, Clock } from 'lucide-react';

const Settings = () => {
  return (
    <div className="p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Settings</h1>
        <p className="text-slate-600 dark:text-slate-400 mt-1">Manage your preferences and application settings</p>
      </div>

      <div className="space-y-6">
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-500/10 dark:to-purple-500/10 rounded-lg">
              <Bell className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-slate-800 dark:text-white">Notifications</h2>
              <p className="text-slate-600 dark:text-slate-400">Configure how you want to receive alerts</p>
            </div>
          </div>

          <div className="space-y-4">
            {['Push Notifications', 'Email Alerts', 'Desktop Notifications'].map((setting, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                <span className="font-medium text-slate-800 dark:text-white">{setting}</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-slate-200 dark:bg-slate-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 dark:peer-focus:ring-indigo-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-500/10 dark:to-purple-500/10 rounded-lg">
              <Shield className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-slate-800 dark:text-white">Privacy</h2>
              <p className="text-slate-600 dark:text-slate-400">Manage your privacy and security settings</p>
            </div>
          </div>

          <div className="space-y-4">
            {['Offline Mode', 'Data Encryption', 'Auto-Delete History'].map((setting, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                <span className="font-medium text-slate-800 dark:text-white">{setting}</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-slate-200 dark:bg-slate-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 dark:peer-focus:ring-indigo-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-500/10 dark:to-purple-500/10 rounded-lg">
              <Brain className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-slate-800 dark:text-white">AI Settings</h2>
              <p className="text-slate-600 dark:text-slate-400">Configure AI behavior and detection preferences</p>
            </div>
          </div>

          <div className="space-y-4">
            {['Smart Detection', 'Auto-Categorization', 'Context Learning'].map((setting, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                <span className="font-medium text-slate-800 dark:text-white">{setting}</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-slate-200 dark:bg-slate-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 dark:peer-focus:ring-indigo-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-500/10 dark:to-purple-500/10 rounded-lg">
              <Clock className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-slate-800 dark:text-white">Reminder Defaults</h2>
              <p className="text-slate-600 dark:text-slate-400">Set your default reminder preferences</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Default Reminder Time</label>
              <select className="w-full p-2 border border-slate-200 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400">
                <option>5 minutes before</option>
                <option>15 minutes before</option>
                <option>30 minutes before</option>
                <option>1 hour before</option>
              </select>
            </div>
            <div className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Reminder Sound</label>
              <select className="w-full p-2 border border-slate-200 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400">
                <option>Default</option>
                <option>Gentle</option>
                <option>Urgent</option>
                <option>Silent</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;