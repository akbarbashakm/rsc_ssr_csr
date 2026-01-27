// Utility function for API calls
// In a real app, this would connect to a database or external API

export async function fetchUsers() {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Mock data - in real app, fetch from database or API
  return [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com'
    },
    {
      id: 3,
      name: 'Bob Johnson',
      email: 'bob@example.com'
    },
    {
      id: 4,
      name: 'Alice Williams',
      email: 'alice@example.com'
    }
  ];
}
