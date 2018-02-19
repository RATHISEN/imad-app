var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var project1 = {
    title :'project1|rathi',
    heading : 'project1',
    date : '18 feb 2018',
    content : '
            <p>
                This is content of project1.This is content of project1.This is content of project1.  This is content of project1.This is content of project1.This is content of project1.This is content of project1.This is content of project1.This is content of project1.
           </p>
            <p>
                This is content of project1.This is content of project1.This is content of project1.  This is content of project1.This is content of project1.This is content of project1.This is content of project1.This is content of project1.This is content of project1.
            </p>
            <p>
                This is content of project1.This is content of project1.This is content of project1.  This is content of project1.This is content of project1.This is content of project1.This is content of project1.This is content of project1.This is content of project1.
            </p>'
            
            
            
    

};
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/project1',function(req,res){
res.sendFile(path.join(__dirname, 'ui', 'project1.html'));
});
app.get('/project2',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'project2.html'));
});
app.get('/project3',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'project3.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servershttp://rathisen.imad.hasura-app.io/
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
