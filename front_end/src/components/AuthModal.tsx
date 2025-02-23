import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useNavigate } from 'react-router-dom';
import Modal from './modal';

const supabaseUrl = 'https://your-supabase-url.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpraHhkdm1ndm9udHp1d3NwZWFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAyMjE3NTcsImV4cCI6MjA1NTc5Nzc1N30.JBbiAS3hKHruxw4Fe2xzeReLLIgYkeatqkIIthAFX8w';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const AuthModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleAuth = async (event: React.FormEvent) => {
    event.preventDefault();
    if (isLogin) {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        setError(error.message);
      } else {
        navigate('/dashboard');
        onClose();
      }
    } else {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) {
        setError(error.message);
      } else {
        setIsLogin(true);
      }
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-2xl font-bold mb-6">{isLogin ? 'Login' : 'Signup'}</h2>
      <form onSubmit={handleAuth}>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          {isLogin ? 'Login' : 'Signup'}
        </button>
        {error && <p className="mt-2 text-red-600">{error}</p>}
      </form>
      <div className="mt-4 text-center">
        <button
          type="button"
          onClick={() => setIsLogin(!isLogin)}
          className="text-blue-500 hover:underline"
        >
          {isLogin ? 'Don\'t have an account? Signup' : 'Already have an account? Login'}
        </button>
      </div>
    </Modal>
  );
};

export default AuthModal;