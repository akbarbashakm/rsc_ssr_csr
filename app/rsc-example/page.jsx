// React Server Component (RSC) Example
// Data fetched on server, modal interactivity via Client Component

import { fetchUsers } from '../../lib/api';
import RSCModal from './rsc-modal';

export default async function RSCExamplePage() {
  // Fetch static data on server (no JavaScript sent to client)
  const users = await fetchUsers();
  const staticContent = {
    title: 'React Server Component',
    description: 'This content is fetched on the server',
    data: users,
    timestamp: new Date().toISOString()
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>React Server Component (RSC) Example</h1>
      <p style={{ color: 'green', fontWeight: 'bold' }}>
        ✅ Data fetched on SERVER, no JavaScript bundle sent!
      </p>
      
      <div style={{ marginTop: '2rem', padding: '1rem', background: '#e8f5e9', borderRadius: '8px' }}>
        <h3>How RSC Works:</h3>
        <ol>
          <li>Server fetches data (async/await)</li>
          <li>Server renders HTML</li>
          <li>Only Client Component (modal) JavaScript sent to client</li>
          <li>Modal interactivity handled by Client Component</li>
        </ol>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h2>Static Content from Server:</h2>
        <p>Click button to see modal with server-fetched content:</p>
        {/* Client Component receives server data */}
        <RSCModal content={staticContent} />
      </div>

      <div style={{ marginTop: '2rem', padding: '1rem', background: '#fff3cd', borderRadius: '8px' }}>
        <h3>✅ Advantages:</h3>
        <ul>
          <li>Fastest initial load (no JS for data fetching)</li>
          <li>SEO friendly (content in HTML)</li>
          <li>Can access database, file system directly</li>
          <li>Minimal JavaScript bundle</li>
        </ul>
        <h3>❌ Limitations:</h3>
        <ul>
          <li>No client-side state management in Server Component</li>
          <li>Need Client Component for interactivity</li>
        </ul>
      </div>

      <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
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
        <a 
          href="/csr-example" 
          style={{ 
            padding: '0.75rem 1.5rem', 
            background: '#28a745', 
            color: 'white', 
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
