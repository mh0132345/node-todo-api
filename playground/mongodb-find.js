//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if (err) {
    return console.log('Unable to connect to mongoDB server');
  }

  // console.log('Connect to MongoDB server');
  // db.collection('Todos').find({
  //   _id: new ObjectID('586b9e8ce151df3ad4f6178a')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch data',err);
  // });

  // console.log('Connect to MongoDB server');
  // db.collection('Users').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch data',err);
  // });
  db.collection('Users').find({name: 'Hoang'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  }), (err) => {
    console.log('Unable to find', err);
  };

  //db.close();
});
