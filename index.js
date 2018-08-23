const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

require("./app/routing/apiroutes")(app);
require("./app/routing/htmlroutes")(app);

app.listen(port, ()=>{
    console.log("App running on port " + port);
});