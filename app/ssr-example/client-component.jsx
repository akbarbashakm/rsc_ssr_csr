'use client';

// Client Component for SSR Example
// Receives initial data from server, then hydrates on client

import { useState, useEffect } from 'react';
import SSRModal from './modal-content';

export default function SSRClientComponent({ initialUsers, staticContent }) {
  const [users, setUsers] = useState(initialUsers);
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Client-side hydration
  useEffect(() => {
    setMounted(true);
    console.log('✅ Component hydrated on client');
  }, []);

  const handleRefresh = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/users');
      const newUsers = await response.json();
      setUsers(newUsers);
    } catch (error) {
      console.error('Error refreshing:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Server-Side Rendering (SSR) Example</h1>
      <p style={{ color: 'blue', fontWeight: 'bold' }}>
        ✅ This component renders on server first, then hydrates on client!
      </p>
      <p>JavaScript bundle IS sent to client for interactivity.</p>

      {mounted && (
        <p style={{ color: 'green' }}>✅ Client-side JavaScript loaded!</p>
      )}

      <div style={{ marginTop: '2rem' }}>
        <h2>Users Data:</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {users.map((user) => (
            <li 
              key={user.id} 
              style={{ 
                padding: '0.5rem', 
                margin: '0.5rem 0', 
                background: '#f0f0f0',
                borderRadius: '4px'
              }}
            >
              <strong>{user.name}</strong> - {user.email}
            </li>
          ))}
        </ul>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h2>Modal with Server Content:</h2>
        <SSRModal content={staticContent} />
      </div>

      <div style={{ marginTop: '2rem' }}>
        <button
          onClick={handleRefresh}
          disabled={loading}
          style={{
            padding: '0.75rem 1.5rem',
            background: loading ? '#ccc' : '#0070f3',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: loading ? 'not-allowed' : 'pointer',
            fontSize: '1rem'
          }}
        >
          {loading ? 'Loading...' : '🔄 Refresh Data'}
        </button>
      </div>

      <div style={{ marginTop: '2rem', padding: '1rem', background: '#e3f2fd', borderRadius: '8px' }}>
        <h3>How SSR Works:</h3>
        <ol>
          <li>Server fetches data and renders HTML</li>
          <li>HTML + JavaScript sent to client</li>
          <li>Client hydrates React components</li>
          <li>Full interactivity available</li>
        </ol>
        <h3>✅ Advantages:</h3>
        <ul>
          <li>SEO friendly (content in HTML)</li>
          <li>Full client-side interactivity</li>
          <li>Can use all React hooks</li>
        </ul>
        <h3>⚠️ Limitations:</h3>
        <ul>
          <li>Larger JavaScript bundle</li>
          <li>Slower initial load than RSC</li>
        </ul>
      </div>

      <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
        <a 
          href="/rsc-example" 
          style={{ 
            padding: '0.75rem 1.5rem', 
            background: '#28a745', 
            color: 'white', 
            textDecoration: 'none',
            borderRadius: '4px',
            display: 'inline-block'
          }}
        >
          ← Go to RSC Example
        </a>
        <a 
          href="/csr-example" 
          style={{ 
            padding: '0.75rem 1.5rem', 
            background: '#ffc107', 
            color: 'black', 
            textDecoration: 'none',
            borderRadius: '4px',
            display: 'inline-block'
          }}
        >
          Go to CSR Example →
        </a>
      </div>
    </div>
  );
}
