
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
  }
];
