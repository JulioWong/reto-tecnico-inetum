const yenv = require('yenv');
const env = yenv();
const http = require('http');
const express = require('express');
const app = express();

const routeProduct = require('../routes/product.route');
const errorHandler = require('../handlers/errors.handler');

const server = http.createServer(app);

app.use(routeProduct);
app.use(errorHandler.pathNotFound);
app.use(errorHandler.generalError);

const initialize = async () => {
  const promise = new Promise((resolve, reject) => {
    if (process.NODE_ENV !== 'test') {
      server
        .listen(env.PORT)
        .on('listening', () => {
          console.log(`Server is running on port ${env.PORT}`);
          resolve();
        })
        .on('error', (error) => {
          console.log('Error in server: ' + error);
          reject(error);
        });
    } else {
      server.listen();
      Promise.resolve();
    }
  });

  await promise;
};

module.exports = { initialize, app };
