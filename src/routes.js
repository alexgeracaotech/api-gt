
import { parseRoute } from './utils/parseRoute.js';

export const routes = [
  {
    method: 'GET',
    path: '/produtos',
    controller: (request, response) => {
      return response.writeHead(200).end('Produtos listados.');
    }
  },
  {
    method: 'POST',
    path: '/produtos',
    controller: (request, response) => {
      return response.writeHead(201).end(JSON.stringify(request.body));
    }
  },
  {
    method: 'DELETE',
    path: '/produtos/:id',
    controller: (request, response) => {
      return response.writeHead(200).end(`Produto de id ${request.params.id} foi removido com sucesso.`);
    }
  }
].map(route => ({
  ...route,
  path: parseRoute(route.path)
}));