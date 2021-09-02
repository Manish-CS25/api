const router = require("express").Router();
const TodoController = require("../controller/TodoController");

router.get("/list", TodoController.listAllTodos);
router.get("/add", TodoController.createNewTodo);

router.put("/update", TodoController.updateTodo);
router.delete("/delete", TodoController.deleteTodo);

module.exports = router;
