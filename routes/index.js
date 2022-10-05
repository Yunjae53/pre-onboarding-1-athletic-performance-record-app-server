const express = require("express");

const router = express.Router();

router.get("/ping", (req, res) => {
  res.json({ message: "/ pong" });
});

const userRouter = require('./userRouter')
router.use('/user',userRouter)

module.exports = router;
