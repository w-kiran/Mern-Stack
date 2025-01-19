const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://w-kiran:blablabla%40123@cluster0.irxbhj5.mongodb.net/todos")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}