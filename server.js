const http = require('node:http');

function createServer() {
  return http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    response.end(`
      <h1>DevOps Pipeline Demo</h1>
      <p>The application is running successfully.</p>
    `);
  });
}

if (require.main === module) {
  const port = process.env.PORT || 3000;
  const server = createServer();

  server.listen(port, () => {
    console.log(`App running at http://localhost:${port}`);
  });
}

module.exports = { createServer };