const zod = require("zod");

const createCard = zod.object({
    name: zod.string(),
    description: zod.string(),
    interest: zod.string(),
    linkedin: zod.string(),
    twitter: zod.string(),
    others: zod.string(),
})

const updateCard = zod.object({
    id: zod.string(),
})

module.exports = {
    createCard: createCard,
    updateCard: updateCard
}