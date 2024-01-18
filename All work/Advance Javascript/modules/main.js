// import {octa,g,test as t ,jod} from "./library.js";
//default function
//------------///
// you ca n give name to the default using alias so import default as octa 
//and if write directly then it will assign the name to the default value ;
// import octa from "./library.js"
//-----------------///
import * as main from "./library.js";

console.log(main.octa);

document.body.innerHTML = main.g;
main.test("octa");


let d = new main.jod();
