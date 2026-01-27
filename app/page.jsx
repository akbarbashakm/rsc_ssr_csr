// Server Component Example (App Router)
// This runs ONLY on the server - no JavaScript sent to client
// But we can use Client Components for interactivity!

import { fetchUsers } from '../lib/api';
import UserModal from './components/user-modal';

export default async function HomePage() {
  // Can directly use async/await in Server Components
  const users = await fetchUsers();
  
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Server Component Example (App Router)</h1>
      <p style={{ color: 'green', fontWeight: 'bold' }}>
        ✅ This component runs ONLY on the server!
      </p>
      <p>Data fetched on server, but interactivity handled by Client Component.</p>
      
      <div style={{ marginTop: '2rem' }}>
        <h2>Users Data (fetched on server):</h2>
        <UserModal users={users} />
      </div>

      <div style={{ marginTop: '2rem', padding: '1rem', background: '#e8f5e9', borderRadius: '8px' }}>
        <h3>Key Features:</h3>
        <ul>
          <li>✅ Data fetched on server (fast, SEO friendly)</li>
          <li>✅ Modal interactivity via Client Component</li>
          <li>✅ Can use async/await directly in Server Component</li>
          <li>✅ Best of both worlds!</li>
        </ul>
      </div>

      <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
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
          RSC Example →
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
          SSR Example →
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
          CSR Example →
        </a>
      </div>
    </div>
  );
}
