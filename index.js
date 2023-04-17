const express = require('express')
const { engine  } = require('express-handlebars')
const port = 3000
const app = express()
const path = require('path')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//template engine
app.engine('.hbs', engine ({extname: '.hbs'}));
app.set('view engine','.hbs')
app.set('views', path.join(__dirname,'/source/views'));

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456a"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.post("/post", function(req,res){
  console.log(req.body);
  const data = {
    title: 'My Title',
    message: 'Hello, World!'
  };
  return res.render("form",{title:'Title'});
})
app.use("/", function(req,res){
  return res.render('form');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})