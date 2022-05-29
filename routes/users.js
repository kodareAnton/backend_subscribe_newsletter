var express = require('express');
const { json } = require('express/lib/response');
var router = express.Router();


// Får användare från datorbas
router.get('/', function(req, res, next) {

  req.app.locals.db.collection('users').find().toArray()
  .then(results =>{
    console.log(results);
    let printUsers = '<div><h2>Våra users</h2>'

    for (user in results){
      printUsers += '<div>' + results[user].username + '</div>'
    }
    printUsers += "</div>"
    res.send(printUsers);
  })
});


// hämtar users till frontend
router.post('/loggin', function(req, res, next) {

  req.app.locals.db.collection('users').find().toArray()
  .then(results =>{
    console.log(results);
  })
});

// Pushar en ny användare
router.post('/add', function(req,res){
  
  req.app.locals.db.collection('users').insertOne(req.body)
  .then(result => {
    console.log(result);
    res.send('/');
  })
});

// router.get('/loggin', function (req, res, next){
//   req.app.locals.db.collection('users').find().toArray()
//   .then(results =>{

//     let users = results
    
//     res.send(users);
//   })
// })

// router.post("/loggin", function (req, res, next) {

//   const obj = JSON.parse(JSON.stringify(req.body));

//   if (obj.username == "admin" && obj.password == "admin") {
//     console.log("OOK");
    
//   } else {
//     console.log("Inte OK");
//   }

//   return;
// });

module.exports = router;
