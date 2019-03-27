# Mongoose Jest setup
##### A test setup  using Mongoose, MongoDB Memory Server and Jest.

Follow these steps to getting start:

``` shell
$ git clone https://github.com/pedromdev/mongoose-jest-setup.git
$ cd mongoose-jest-setup
$ npm i
$ npm run test
```

To start the MongoDB memory server and connect to it with mongoose, you just need call MongooseConnection.open on beforeAll:

``` Javascript
beforeAll(() => {
  MongooseConnection.open()
});
```

And to stop the server and mongoose, call MongooseConnection.close on afterAll:

``` Javascript
afterAll(() => {
  MongooseConnection.close()
});
```
