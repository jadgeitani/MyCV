const express = require("express")
const app = express()
const fs = require('fs');
const pdf = require('pdf-parse');
app.use(express.static("public"))
 
let dataBuffer = fs.readFileSync('./CV.pdf');
 
pdf(dataBuffer).then(function(data) {
 
    
    console.log(data.numpages);
    console.log(data.numrender);
   
    console.log(data.info);
 
    console.log(data.metadata); 
    
    console.log(data.version);
   
    console.log(data.text); 
	
	app.get("/", function (req, res) {
  	res.send(data.text)
})
        
});







app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));
