
export const bodyHandler = async (request, response) => {

  const buffers = [];

  for await (const chunk of request) {
    buffers.push(chunk);
  }

  try {
    const data = Buffer.concat(buffers).toString();
    request.body = JSON.parse(data);
  } catch (error) {
    request.body = null;
  }

  return response.setHeader("content-type", "application/json");

}