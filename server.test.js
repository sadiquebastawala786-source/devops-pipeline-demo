const { test } = require('node:test');
const assert = require('node:assert');
const { createServer } = require('./server');

test('home page shows the DevOps Pipeline Demo message', async () => {
  const server = createServer();

  await new Promise((resolve) => server.listen(0, resolve));

  try {
    const address = server.address();
    const response = await fetch(`http://localhost:${address.port}`);
    const page = await response.text();

    assert.equal(response.status, 200);
    assert.match(page, /DevOps Pipeline Demo/);
    assert.match(page, /application is running successfully/);
  } finally {
    await new Promise((resolve, reject) => {
      server.close((error) => (error ? reject(error) : resolve()));
    });
  }
});