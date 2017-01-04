const expect = require('expect');
const request = require('supertest');

var {app} = require('./../server.js');
var {Todo} = require('./../models/todo.js');
var {User}= require('./../models/user.js');

beforeEach((done) => {
  Todo.remove({}).then(() => done());
});

describe('POST /Todo', () => {
  it('should add a new todo', (done) => {
    var text = 'Test to do';
    request(app)
      .post('/todos')
      .send({text})
      .expect(200)
      .expect((res) => {
        expect(res.body.text).toBe(text);
      })
      .end((err,res) => {
        if (err) {
          return done(err);
        }

        Todo.find().then((todos) => {
          expect(todos.length).toBe(1);
          expect(todos[0].text).toBe(text);
          done()
        }).catch((e) => done(e));
      });
    });
})

it('should make an error',(done) => {
  request(app)
  .post('/todos')
  .send({})
  .expect(400)
  .end((err) => {
    if (err) {
      return done(err);
    }
  })
  Todo.find().then((todos) => {
    expect(todos.length).toBe(0);
    done();
  }).catch((e) => done(e));

})