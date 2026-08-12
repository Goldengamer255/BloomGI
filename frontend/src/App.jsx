import { useEffect, useState } from 'react';

function App() {
  const [serverMessage, setServerMessage] = useState('Connecting to backend server...');

  useEffect(() => {
    // Fetch data from your local Express health endpoint
    fetch('http://localhost:5000/api/health')
        .then((response) => response.json())
        .then((data) => {
          setServerMessage(data.status); // Update UI with server's message
        })
        .catch((error) => {
          console.error('Error fetching backend data:', error);
          setServerMessage('Failed to connect to backend server.');
        });
  }, []);

  return (
      <div style={{ padding: '40px', fontFamily: 'system-ui, sans-serif' }}>
        <h1>My Full-Stack Portfolio Portfolio</h1>
        <p>MERN stack application under active development.</p>

        {/* Visual Status Indicator */}
        <div style={{
          marginTop: '20px',
          padding: '15px',
          borderRadius: '8px',
          background: '#f0f4f8',
          borderLeft: '8px solid #0066cc'
        }}>
          <strong>Backend Status:</strong> {serverMessage}
        </div>
      </div>
  );
}

export default App;
