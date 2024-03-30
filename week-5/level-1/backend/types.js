const zod = require("zod");

const createcard = zod.object({
    name: zod.string(),
    description: zod.string(),
    interests: zod.array(zod.string()) ,
    linkedin: zod.string(),
    twitter: zod.string()
})

const deletecard = zod.object({
    id: zod.string()
})

module.exports = {
    createcard,
    deletecard
}