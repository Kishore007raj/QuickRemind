
import { MessageSquare, Mail, FileText, Plus, Check, AlertCircle } from 'lucide-react';

const Sources = () => {
  const sources = [
    {
      name: 'WhatsApp',
      icon: MessageSquare,
      status: 'connected',
      lastSync: '2 minutes ago',
   
    },
    {
      name: 'Gmail',
      icon: Mail,
      status: 'connected',
      lastSync: '5 minutes ago',
     
    },
    {
      name: 'Telegram',
      icon: MessageSquare,
      status: 'connected',
      lastSync: '1 minute ago',
    
    },
    {
      name: 'Notes',
      icon: FileText,
      status: 'connected',
      lastSync: 'Just now',
     
    },
  ];

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Connected Sources</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-1">Manage your connected messaging platforms and apps</p>
        </div>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-indigo-700 transition-colors">
          <Plus className="w-5 h-5" />
          Add New Source
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sources.map((source, index) => {
          const Icon = source.icon;
          return (
            <div key={index} className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 group hover:border-indigo-200 dark:hover:border-indigo-500/50 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-500/10 dark:to-purple-500/10 rounded-lg group-hover:from-indigo-100 group-hover:to-purple-100 dark:group-hover:from-indigo-500/20 dark:group-hover:to-purple-500/20 transition-colors">
                    <Icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 dark:text-white">{source.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Check className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-green-600 dark:text-green-400">Connected</span>
                    </div>
                  </div>
                </div>
                <button className="text-slate-500 dark:text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                  <AlertCircle className="w-5 h-5" />
                </button>
              </div>
              
              <div className="mt-6 space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-600 dark:text-slate-400">Last Sync</span>
                  <span className="text-slate-800 dark:text-slate-200">{source.lastSync}</span>
                </div>
               
              </div>

              <div className="mt-6 flex gap-3">
                <button className="flex-1 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
                  Configure
                </button>
                <button className="flex-1 px-4 py-2 text-sm font-medium text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-500/10 rounded-lg hover:bg-red-100 dark:hover:bg-red-500/20 transition-colors">
                  Disconnect
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sources;