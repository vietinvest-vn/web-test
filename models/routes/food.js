const router = require("express").Router();
const Food = require("../models/Food");

router.get("/", async (req, res) => {
  res.json(await Food.find());
});

router.post("/", async (req, res) => {
  res.json(await Food.create(req.body));
});

router.delete("/:id", async (req, res) => {
  await Food.findByIdAndDelete(req.params.id);
  res.send("OK");
});

module.exports = router;
