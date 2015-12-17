/**
 * Created by yoshu_000 on 12/17/2015.
 */
var express = require("express"),
    app = express();

app.use(express.static(__dirname + "/public"));

app.listen(8080);
