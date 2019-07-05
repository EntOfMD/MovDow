const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("backend home!");
});
module.exports = router;
