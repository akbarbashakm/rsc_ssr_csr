// API Route for fetching users
import { fetchUsers } from '../../../lib/api';

export async function GET() {
  try {
    const users = await fetchUsers();
    return Response.json(users);
  } catch (error) {
    return Response.json(
      { error: 'Failed to fetch users' },
      { status: 500 }
    );
  }
}
