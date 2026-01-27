'use client';

// Client-Side Rendering (CSR) Example
// Everything runs on client, data fetched via API

import { useState, useEffect } from 'react';
import CSRModal from './csr-modal';

export default function CSRExamplePage() {
  const [users, setUsers] = useState([]);
  const [staticContent, setStaticContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  // Fetch data on client side
  useEffect(() => {
    setMounted(true);
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data);
      setStaticContent({
        title: 'Client-Side Rendering',
        description: 'This content is fetched on the client',
        data: data,
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!mounted || loading) {
    return (
      <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
        <h1>Client-Side Rendering (CSR) Example</h1>
        <p>Loading data on client...</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Client-Side Rendering (CSR) Example</h1>
      <p style={{ color: '#ffc107', fontWeight: 'bold' }}>
        ⚠️ Data fetched on CLIENT, full JavaScript bundle!
      </p>

      <div style={{ marginTop: '2rem', padding: '1rem', background: '#fff3cd', borderRadius: '8px' }}>
        <h3>How CSR Works:</h3>
        <ol>
          <li>Initial HTML sent to client (empty/minimal)</li>
          <li>JavaScript bundle loads</li>
          <li>React renders on client</li>
          <li>API call fetches data</li>
          <li>Component updates with data</li>
        </ol>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h2>Users Data (fetched on client):</h2>
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
        <h2>Modal with Client-Fetched Content:</h2>
        {staticContent && <CSRModal content={staticContent} />}
      </div>

      <div style={{ marginTop: '2rem' }}>
        <button
          onClick={fetchData}
          disabled={loading}
          style={{
            padding: '0.75rem 1.5rem',
            background: loading ? '#ccc' : '#ffc107',
            color: loading ? '#666' : 'black',
            border: 'none',
            borderRadius: '4px',
            cursor: loading ? 'not-allowed' : 'pointer',
            fontSize: '1rem',
            fontWeight: 'bold'
          }}
        >
          {loading ? 'Loading...' : '🔄 Refresh Data'}
        </button>
      </div>

      <div style={{ marginTop: '2rem', padding: '1rem', background: '#fff3cd', borderRadius: '8px' }}>
        <h3>✅ Advantages:</h3>
        <ul>
          <li>Fast navigation (SPA)</li>
          <li>Full client-side control</li>
          <li>Can cache data client-side</li>
        </ul>
        <h3>❌ Limitations:</h3>
        <ul>
          <li>Not SEO friendly (content not in HTML)</li>
          <li>Slower initial load</li>
          <li>Large JavaScript bundle</li>
          <li>Blank screen until JS loads</li>
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
          href="/ssr-example" 
          style={{ 
            padding: '0.75rem 1.5rem', 
            background: '#0070f3', 
            color: 'white', 
            textDecoration: 'none',
            borderRadius: '4px',
            display: 'inline-block'
          }}
        >
          Go to SSR Example →
        </a>
      </div>
    </div>
  );
}
