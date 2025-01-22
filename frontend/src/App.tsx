import { useState, useEffect } from 'react';
import axios from 'axios';

interface ApiResponse {
  message: string;
}

function App() {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    // バックエンドAPIの疎通確認
    axios.get<ApiResponse>('http://localhost:8080/users')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        setMessage('Error connecting to backend!!');
        console.error('Error:', error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Frontend</h1>
        <p>{message}</p>
      </header>
    </div>
  );
}

export default App;