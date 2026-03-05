const express = require("express");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");

const router = express.Router();

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    const id = uuidv4();
    cb(null, id + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router.post("/", upload.single("file"), (req, res) => {

  const fileId = req.file.filename;

  const downloadLink = `http://localhost:5000/api/download/${fileId}`;

  res.json({
    message: "File uploaded",
    downloadLink
  });

});

module.exports = router;