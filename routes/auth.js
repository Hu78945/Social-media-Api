const router = require("express").Router();
const User = require("../modles/User");
const bcrypt = require("bcrypt");

//Register
router.post("/register", async (req, res) => {
  try {
    //genrate new passord
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = bcrypt.hash(req.body.password, salt);
    //create new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: await hashedPassword,
    });
    //save the user and return response
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Login
router.post("/login", async (req, res) => {
  try {
    //Find and check if the user exsist
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).json("user not found.");
    //Check if the password is valid
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    !validPassword && res.status(400).json("wrong password");
    //If both email and password are valid then
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
