
import { routes } from "../routes.js";

export const routeHandler = (request, response) => {

  const route = routes.find(route => {
    return route.method === request.method && route.path.test(request.url);
  });

  if (route) {

    const routeParams = request.url.match(route.path);

    const { ...params } = routeParams.groups;

    console.log(params);

    return route.controller(request, response);
  }

  return response.writeHead(400).end('Erro! O servidor não conseguiu identificar a requisição.');
}
