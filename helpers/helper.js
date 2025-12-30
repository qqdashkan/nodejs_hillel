import { readFile } from 'fs/promises';

export async function getData(res, pathName, contentType) {
  try {
    const data = await readFile(pathName);
    res.setHeader('Content-Type', contentType);
    return res.end(data);
  } catch (error) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
}
