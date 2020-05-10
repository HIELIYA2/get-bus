var dbConn = null;

function connectToMongo() {
  if (dbConn) return Promise.resolve(dbConn);
  const MongoClient = require('mongodb').MongoClient;

  const dbName = 'get_bus_db';

  const url = 'mongodb://localhost:27017/get_bus_db';

  const client = new MongoClient(url, { useNewUrlParser: true });

  return client.connect().then((client) => {
    console.log('Connected to MongoDB');
    client.on('close', () => {
      console.log('MongoDB Disconnected!');
      dbConn = null;
    });
    dbConn = client.db(dbName);
    return dbConn;
  });
}

module.exports = {
  connect: connectToMongo,
};
