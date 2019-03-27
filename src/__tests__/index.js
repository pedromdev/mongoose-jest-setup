const MongooseConnection = require('../connections/mongoose');

beforeAll(async () => {
  await MongooseConnection.open();
});

afterAll(async () => {
  await MongooseConnection.close();
});

test('nothing', () => {});