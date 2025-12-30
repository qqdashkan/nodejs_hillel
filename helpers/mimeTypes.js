import path from 'path';

const types = {
  '.ico': 'image/x-icon',
  '.html': 'text/html',
  '.css': 'text/css',
  '.mp4': 'video/mp4',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
};

export function getType(type) {
  const ext = path.extname(type);
  return types[ext];
}
