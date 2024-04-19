const { Router, request, response, next } = require("express");
const { check } = require("express-validator");

//Controllers
const UserController = require("../controllers/userController");

// Middlewares
const { validateFields } = require("../middlewares/validate-fields");

const router = Router();

// ** GETS ** //

router.get("/", async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;