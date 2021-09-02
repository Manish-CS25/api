//import TodoModel
const Todo = require("../models/schema");

//Define Controller functions

//list all Todos function--To list all todos
exports.listAllTodos = (req, res) => {
  Todo.find({}, (err, todo) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(todo);
  });
};

//createNewTodo function -- To craete new todo
exports.createNewTodo = (req, res) => {
  let newTodo = new Todo(req.body);
  newTodo.save((err, todo) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(201).json(todo);
  });
};

//updateTodo function -- To update  Todo status by id
exports.updateTodo = (req, res) => {
  Todo.findOneAndUpdate(
    { _id: req.params._id },
    req.body,
    { new: true },
    (err, todo) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(201).json(todo);
    }
  );
};

//deleteTodo function -- To delete  Todo status by id
exports.deleteTodo = async (req, res) => {
  await Todo.deleteOne({ _id: req.params._id }, (err) => {
    if (err) {
      res.status(404).send(err);
    }
    res.status(200).json({ message: "Todo successfully deleted" });
  });
};
