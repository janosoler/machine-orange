const express = require("express");
//const handlebars = require("express-handlebars");
const router = require("./routes/routes");

const port = process.env.PORT || 3000;

const app = express();

/*app.engine("handlebars", handlebars({
	defaultLayout: "principal"
}));*/

app.set("view engine", "handlebars");


app.use(express.urlencoded({
	extended: false
}));

/*app.use(override(function (req, res) {
	if (req.body && typeof req.body === 'object' && 'metodo' in req.body) {
		 var method = req.body.metodo
	  delete req.body.metodo
	  return method
	}
  }));
*/
app.use(express.json());

app.use(express.static(__dirname + "/public"));

app.use("/", router);

//app.use(controller.attends404);

//app.use(controller.attends500);

app.listen(port, ()=>console.log(`Listening at port ${port}...`));
