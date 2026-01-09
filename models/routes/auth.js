const router = require("express").Router();
const bcrypt = require("bcryptjs");
const User = require("../models/User");

router.post("/register", async (req, res) => {
  const hash = await bcrypt.hash(req.body.password, 10);
  await User.create({
    username: req.body.username,
    password: hash,
    role: "user",
  });
  res.json({ ok: true });
});

router.post("/login", async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  if (!user) return res.json({ ok: false });

  const ok = await bcrypt.compare(req.body.password, user.password);
  if (!ok) return res.json({ ok: false });

  res.json({ ok: true, role: user.role });
});

module.exports = router;
