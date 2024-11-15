const express = require("express");
const wrapAsync = require("../utils/wrapAsync");
const router = express.Router();
const User = require("../models/user.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

const userConstroller = require("../controllers/user.js");

router
  .route("/signup")
  .get(userConstroller.renderSignupForm)
  .post(wrapAsync(userConstroller.signup));

router
  .route("/login")
  .get(userConstroller.renderLoginForm)
  .post(
    saveRedirectUrl,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    userConstroller.login
  );

router.get("/logout", userConstroller.logout);

module.exports = router;
