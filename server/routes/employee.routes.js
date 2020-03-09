const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    nombre: "Mario",
    ocupacion: "Programador",
    edad: 20
  });
});

module.exports = router;
