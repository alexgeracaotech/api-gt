
import { parseRoute } from './utils/parseRoute.js';

export const routes = [
  {
    method: 'GET',
    path: '/produtos',
    controller: ({ request, response, database }) => {
      const produtos = database.select('produtos');

      return response.writeHead(200).end(JSON.stringify(produtos));
    }
  },
  {
    method: 'POST',
    path: '/produtos',
    controller: ({ request, response, database }) => {
      const { id, nome, preco } = request.body;

      database.insert('produtos', {id, nome, preco});

      return response.writeHead(201).end('Produto cadastrado com sucesso.');
    }
  },
  {
    method: 'DELETE',
    path: '/produtos/:id',
    controller: ({ request, response }) => {
      return response.writeHead(200).end(`Produto de id ${request.params.id} foi removido com sucesso.`);
    }
  }
].map(route => ({
  ...route,
  path: parseRoute(route.path)
}));