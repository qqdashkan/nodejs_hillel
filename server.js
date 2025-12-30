import http from 'http';
import path from 'path';
import dotenv from 'dotenv';

import { getData } from './helpers/helper.js';
import { getType } from './helpers/mimeTypes.js';

dotenv.config();

const PORT = process.env.PORT || 3400;

const server = http.createServer(serverFunction);

async function serverFunction(req, res) {
  try {
    if (req.url === '/') {
      const ext = getType(req.url);
      console.log(ext);

      return await getData(
        res,
        path.join('public', 'html', 'index.html'),
        '.html'
      );
    }

    if (req.url.startsWith('/favicon/')) {
      const ext = getType(req.url);
      return await getData(res, path.join('assets', req.url), ext);
    }

    if (req.url.startsWith('/css/')) {
      const ext = getType(req.url);
      return await getData(res, path.join('public', req.url), ext);
    }

    if (req.url.startsWith('/images/')) {
      const ext = getType(req.url);
      return await getData(res, path.join('assets', req.url), ext);
    }

    if (req.url.startsWith('/videos/')) {
      const ext = getType(req.url);
      return await getData(res, path.join('assets', req.url), ext);
    }
  } catch (error) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Something went wrong');
  }
}

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
