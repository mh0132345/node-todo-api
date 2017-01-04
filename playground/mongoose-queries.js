const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
// var id = "586d68cc4e78f859a8334179";
//
// if(!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// };
//
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todo.find',todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Find One',todo);
// });
//
// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

id = "586d09e99c91141d795f9a76";
User.findById(id).then((user) => {
  if (!user) {
    return console.log('ID not found');
  }
  console.log('Todo By ID', user);
}).catch((e) => console.log(e));
