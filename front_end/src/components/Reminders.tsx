
import { Plus, Search, Calendar, Clock, Filter } from 'lucide-react';

const Reminders = () => {
  const reminders = [
    {
      id: '1',
      title: 'Team Meeting Discussion',
      description: 'Quarterly review with the development team',
      date: '2024-03-20',
      time: '10:00 AM',
      source: 'WhatsApp',
      priority: 'high',
    },
    {
      id: '2',
      title: 'Project Deadline',
      description: 'Submit final documentation for the client project',
      date: '2024-03-22',
      time: '5:00 PM',
      source: 'Email',
      priority: 'medium',
    },
    {
      id: '3',
      title: 'Client Call',
      description: 'Follow-up call with the client about new requirements',
      date: '2024-03-25',
      time: '2:00 PM',
      source: 'Telegram',
      priority: 'low',
    },
  ];

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Reminders</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-indigo-700 transition-colors">
          <Plus className="w-5 h-5" />
          Add Manually
        </button>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
        <div className="flex gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search reminders..."
              className="w-full pl-10 pr-4 py-2 border border-slate-200 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 dark:border-slate-600 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 bg-white dark:bg-slate-800">
            <Calendar className="w-5 h-5" />
            <span>Date</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 dark:border-slate-600 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 bg-white dark:bg-slate-800">
            <Clock className="w-5 h-5" />
            <span>Time</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 dark:border-slate-600 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 bg-white dark:bg-slate-800">
            <Filter className="w-5 h-5" />
            <span>Filter</span>
          </button>
        </div>

        <div className="space-y-4">
          {reminders.map((reminder) => (
            <div key={reminder.id} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors group">
              <div className="flex items-center gap-4">
                <div className={`w-2 h-2 rounded-full transition-transform group-hover:scale-125 ${
                  reminder.priority === 'high' ? 'bg-red-500' :
                  reminder.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                }`} />
                <div>
                  <h3 className="font-medium text-slate-800 dark:text-white">{reminder.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{reminder.description}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm text-slate-500 dark:text-slate-400">{reminder.date}</span>
                    <span className="text-sm text-slate-500 dark:text-slate-400">•</span>
                    <span className="text-sm text-slate-500 dark:text-slate-400">{reminder.time}</span>
                  </div>
                </div>
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400">
                via {reminder.source}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reminders;