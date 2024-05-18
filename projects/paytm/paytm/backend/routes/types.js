const zod = require("zod");

const createUser = zod.object({
    username: zod.string().min(3).max(50),
    password: zod.string().min(6),
    firstName: zod.string().max(50),
    lastName: zod.string().max(50)
});

const loginUser = zod.object({
    username: zod.string().min(3).max(50),
    password: zod.string().min(6)
});

const updateUserinfo = zod.object({
    password: zod.string().min(6).optional(),
    firstName: zod.string().max(50).optional(),
    lastName: zod.string().max(50).optional()
});


module.exports = {
    createUser,
    loginUser,
    updateUserinfo
}