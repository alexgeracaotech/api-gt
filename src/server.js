
import http from 'node:http';
import { bodyHandler } from './middlewares/bodyHandler.js';
import { routeHandler } from './middlewares/routeHandler.js'

const port = 3000;

const server = http.createServer(async (request, response) => {
  await bodyHandler(request, response);
  routeHandler(request, response);
});

server.listen(port);
