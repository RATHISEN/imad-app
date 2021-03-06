var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;

var config = {
        user :'rathisen',
        database : 'rathisen',
        host : 'db.imad.hasura-app.io',
        port : '5432',
        password : DB_PASSWORD
        
};

var app = express();
app.use(morgan('combined'));
var project={
    

  'project1': {
    title :'project1|rathi',
    heading : 'project1',
    date : '18 feb 2018',
    content : 'project1 project1 project1 project1 project1 project1project1 project1 project1project1 project1 project1project1 project1 project1project1 project1 project1project1 project1 project1project1 project1 project1project1 project1 project1project1 project1 project1project1 project1 project1project1 project1 project1project1 project1 project1project1 project1 project1project1 project1 project1project1 project1 project1project1 project1 project1project1 project1 project1project1 project1 project1project1 project1 project1project1 project1 project1project1 project1 project1'
},
  'project2' : {
    title :'project2|rathi',
    heading : 'project2',
    date : '19 feb 2018',
    content : 'project2 code reduced project2 project2'
},
   'project3' : {
    title :'project3|rathi',
    heading : 'project3',
    date : '20 feb 2018',
    content : 'project3 code reduced project3 project3'
}
}
function createTemplate(data)
{
    var title = data.title;
    var heading =data.heading;
    var date = data.date;
    var content = data.content;
    
    var htmltemplate = `
    <html>
  <title>
            ${title}
        </title>
        <meta name = "viewport" content= "width=device-width, initial-scale=1"/>
        <link href="/ui/style.css" rel="stylesheet" />
        
    </head>
    <body>
        <div class="container">
        <div>
            <a href="/">home</a>
        </div>
        <hr/>
        <h3>
            ${heading}
        </h3>
        <div>
            ${date}
        </div>
        <div>
            ${content}
        </div>
    </div>
</html>`;
return htmltemplate;



}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/tests-db',function(req,res){
    
});
var counter = 0;
app.get('/counter', function ( req, res) {
        counter = counter + 1;
        res.send(counter.toString());
});


app.get('/:projectname',function (req,res){
    var projectname= req.params.projectname;
res.send(createTemplate(project[projectname]));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
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
