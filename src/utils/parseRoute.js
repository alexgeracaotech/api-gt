
export const parseRoute = (path) => {
  
  const routeRegex = /:([a-zA-Z]+)/g;
  // as barras indicam as extremidades do que será identificado
  // os dois pontos indicam onde a detecção iniciará
  // os parênteses indicam um grupo de caracteres
  // os colchetes indicam a especificidade dos caracteres
  // o sinal de adição indica para considerar tudo que vier após
  // a letra "g" indica que será analisado todas as ocorrências identificadas

  const params = path.replaceAll(routeRegex, '(?<id>[a-z0-9-_]+)');

  const pathRegex = new RegExp(params);
  
  return pathRegex;

}
