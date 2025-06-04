
export const routes = [
  {
    method: 'GET',
    path: '/produtos',
    controller: (request, response) => {
      return response.writeHead(200).end('Lista de produtos.');
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
