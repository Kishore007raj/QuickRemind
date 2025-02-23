import React, { useState } from 'react';
import axios from 'axios';

const FileUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!file) {
      setError('No file selected');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setError(null);
      alert('File uploaded successfully');
    } catch (err) {
      setError('refresh to view the uploaded file');
    }
  };

  return (
    <div>
      <h2>Upload files [.txt, .csv, compressed csv, compressed txt ]</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default FileUpload;