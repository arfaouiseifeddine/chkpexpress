var d = new Date()
var j = d.getDay()
var h = d.getHours()
console.log(j)
console.log(h)


const express = require('express');

const app = express();
console.log(app);

const port = 5000;


app.listen (port , () => {
    console.log(`the server is running on port ${port}`)
});

function logger (req,rep,next){
    console.table({method:req.method, path:req.url})
    if(h>=9 && h<=17 && j>=2 && j<=5){
        next()
      } 
      else{
        rep.send("OpenMonday to Friday,  from 9 to 17")
      }
}

app.use(logger);

/*app.use(express.static(__dirname + "/Public"));*/

app.get ('/', (req , rep) => {
    
    rep.sendFile(__dirname + "/Public/Home.html");
});

app.get ('/OurServices', (req , rep) => {
    
    rep.sendFile(__dirname + "/Public/OurServices.html");
});

app.get ('/Contactus', (req , rep) => {
    
    rep.sendFile(__dirname + "/Public/Contactus.html");
});

app.get ('/css/style.css', (req , rep) => {
    
    rep.sendFile(__dirname + "/Public/css/style.css");
});