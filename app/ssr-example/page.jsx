import { fetchUsers } from '../../lib/api';
import SSRClientComponent from './client-component';
import SSRModal from './modal-content';

// Server Component - fetches data on server (SSR)
export default async function SSRExamplePage() {
  // Fetch static data on server (SSR)
  const initialUsers = await fetchUsers();
  const staticContent = {
    title: 'Server-Side Rendering',
    description: 'This content is rendered on server first',
    data: initialUsers,
    timestamp: new Date().toISOString()
  };
  
  // Pass data to client component
  return <SSRClientComponent initialUsers={initialUsers} staticContent={staticContent} />;
}
