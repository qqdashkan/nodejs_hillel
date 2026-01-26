import { writeFile } from 'fs/promises';
import { join } from 'path';
import { getDirname } from './getDirname.js';
import { getUsers } from './getUsers.js';

export async function addNewUser({ username, email, password }) {
  const users = await getUsers();

  const isExist = users.some((user) => user.email === email);
  if (isExist) {
    throw new Error('EMAIL_EXISTS');
  }

  const formattedUser = {
    username,
    email,
    password,
    role: 'user',
  };

  users.push(formattedUser);

  const filePath = join(getDirname(import.meta.url), '..', 'users.json');
  await writeFile(filePath, JSON.stringify(users));
  return formattedUser;
}
