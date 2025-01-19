const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://w-kiran:blablabla%40123@cluster0.irxbhj5.mongodb.net/business-card")
const cardSchema = mongoose.Schema({
    name: String,
    description: String,
    interests: String,
    linkedin: String,
    twitter: String,
    others: String,
    completed: Boolean
})

const card = mongoose.model('cards', cardSchema);

module.exports = {
    card
}