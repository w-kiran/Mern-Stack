const express = require("express");
const { createCard, updateCard } = require("./types");
const { card } = require("./db");
const cors = require("cors");
const { parse } = require("path");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/cards", async function(req, res) {
    const createCardload = req.body;
    const parsedCardload= createCard.safeParse(createCardload);

    if (!parsedCardload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }
    // put it in mongodb
    await card.create({
        name: createCardload.name,
        description: createCardload.description,
        interest: createCardload.interest,
        linkedin: createCardload.linkedin,
        twitter: createCardload.twitter,
        others: createCardload.others,
        completed: false
    })

    res.json({
        msg: "Card created"
    })
})

app.get("/cards", async function(req, res) {
    // const cards = await card.find({});

    res.json({
        todos: []
    })

})

app.put("/completed", async function(req, res) {
    const updateCardload = req.body;
    const parsedCardload= updateCard.safeParse(updateCardload);
    if (!parsedCardload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }

    await card.update({
        _id: req.body.id
    }, {
      completed: true  
    })

    res.json({
        msg: "Card marked as completed"
    })
})

app.listen(3000);