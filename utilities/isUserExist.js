import { getUsers } from './getUsers.js';

export async function isUserExist(username, email) {
  const data = await getUsers();

  if (!data) {
    throw new Error('Data Not Found');
  }

  return data.find(
    (user) => user.username === username && user.email === email,
  );
}
