import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FileList: React.FC = () => {
  const [files, setFiles] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await axios.get('/api/files');
        setFiles(response.data);
        setError(null);
      } catch (err) {
        setError('Error fetching files');
      }
    };

    fetchFiles();
  }, []);

  const handleDelete = async (fileName: string) => {
    try {
      await axios.post('/api/delete', { fileName });
      setFiles(files.filter(file => file !== fileName));
      setError(null);
    } catch (err) {
      setError('Error deleting file');
    }
  };

  return (
    <div>
      <h2>Uploaded Files</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {files.map(file => (
          <li key={file}>
            {file} <button onClick={() => handleDelete(file)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileList;