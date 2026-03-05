const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/:id", (req, res) => {

  const filePath = path.join(__dirname, "../uploads", req.params.id);

  res.download(filePath);

});

module.exports = router;