import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StartingPage: React.FC = () => {
  const [files, setFiles] = useState<string[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await axios.get('/api/files');
        setFiles(response.data);
        setError(null);
      } catch (err) {
        console.error('', err);
        setError('');
      }
    };

    fetchFiles();
  }, []);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!file) {
      setError('No file selected');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    setLoading(true);
    try {
      await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setError(null);
      alert('File uploaded successfully');
      setFile(null);
      
      // Refresh the file list
      const filesResponse = await axios.get('/api/files');
      setFiles(filesResponse.data);
    } catch (err) {
      console.error('refresh the page :', err);
      setError('Refresh the page to view the uploaded file');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (fileName: string) => {
    try {
      await axios.post('/api/delete', { fileName });
      setFiles(files.filter(file => file !== fileName));
      setError(null);
    } catch (err) {
      console.error('Error deleting file:', err);
      setError('Error deleting file');
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-slate-800 dark:text-white mb-8">File Management</h1>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Upload files [.txt, .csv, compressed csv, compressed txt ]</h2>
        <form onSubmit={handleUpload} className="flex items-center gap-4">
          <input 
            type="file" 
            onChange={handleFileChange} 
            className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
          <button 
            type="submit" 
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            disabled={loading}
          >
            {loading ? 'Uploading...' : 'Upload'}
          </button>
        </form>
        {error && <p className="mt-2 text-green-600">{error}</p>}
      </div>

      <div>
        <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Uploaded Files</h2>
        <ul className="space-y-2">
          {files.map(file => (
            <li 
              key={file} 
              className="flex justify-between items-center p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700"
            >
              <span className="text-slate-800 dark:text-white">{file}</span>
              <button 
                onClick={() => handleDelete(file)} 
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StartingPage;