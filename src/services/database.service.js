const MongoClient = require('mongodb').MongoClient;
const yenv = require('yenv');
const env = yenv();
let connection;
let clientdb;

const connectionString = `mongodb+srv://${env.MONGO.USER}:${env.MONGO.PASS}@${env.MONGO.HOST}/test?retryWrites=true&w=majority`;

console.log(connectionString);

const initialize = async () => {
  const options = {
    replicaSet: 'rs0',
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  const promiseConnection = new Promise((resolve, reject) => {
    MongoClient.connect(connectionString, options, function (err, client) {
      if (err) {
        console.log('Error connecting to MongoDB');
        reject(err);
      } else {
        clientdb = client;
        connection = client.db(env.MONGO.DB);
        console.log('Connected to MongoDB');
        resolve();
      }
    });
  });

  await promiseConnection;
};

const getConnection = () => connection;

const closeConnection = () => {
  clientdb.close();
};

module.exports = { initialize, clientdb, getConnection, closeConnection };
