import msg from "./content.js";
import "./message.css";

var div = document.createElement("div");
div.id = "message";
var txtNode = document.createTextNode(msg);
div.appendChild(txtNode);
document.body.appendChild(div);

document.write(msg);
console.log("eagle boilerplate APP");
