var express = require("express");
const { redirect, send } = require("express/lib/response");
var router = express.Router();

const admin = [
  {
    username: "admin",
    password: "admin",
  },
];

/* GET Admin */
router.get("/", function (req, res, next) {
  let form = `<form action="admin" method="post">

              <h2>Logga in</h2>
              <div><input type="text" name="admin"> admin</div>
              <div><input type="text" name="password"> password</div>
              <div><button type="submit">Spara</div>
              </form>`;

  res.send(form);
});


router.post("/", function (req, res, next) {

  const obj = JSON.parse(JSON.stringify(req.body));

  if (obj.admin == "admin" && obj.password == "admin") {
    console.log("OOK");
    res.redirect("/users");
  } else {
    console.log("Inte OK");
   res.redirect("/admin");
  }

  return;
});

router.get("/users", function (req, res, next) {
  res.send("Hej från admin/users");
});

module.exports = router;
