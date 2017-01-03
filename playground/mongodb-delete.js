//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if (err) {
    return console.log('Unable to connect to mongoDB server')
  }
  // console.log('Connect to MongoDB server');
  // db.collection('Users').findOneAndDelete({
  //   _id: new ObjectID('586c2a9ca229c1a14c6a6a31')
  // }).then((result) => {
  //   console.log(result);
  // });
  //delete many
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  //delete one
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed:false}).then((result) => {
  //   console.log(result);
  // })
  // // db.close();
});
