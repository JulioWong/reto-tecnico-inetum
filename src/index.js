const serviceDatabase = require('./services/database.service');
const serviceServer = require('./services/server.service');

/*
 Debe crear una ruta /product/:country_iso
 Donde country_iso es un string que solo puede contener o 'PE' o 'PA'

 Utilice los archivos dentro de la carpeta validators si los considera necesarios
*/

const start = async () => {
  try {
    await serviceDatabase.initialize();
    await serviceServer.initialize();
  } catch (error) {
    console.log('An error has happened: ' + error);
  }
};

start();
