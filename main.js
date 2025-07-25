import { Object } from './obj.js';
import * as utils from './utils.js';
import { createMass } from './mass.js';

var fun = utils.randRange(0, 10, true); // Fun ;)
var objs = [];

window.onload = main;

function main() {
    if (fun == 6) {
        var mass = document.createElement("div");
        mass.id = "mass";
        document.body.appendChild(mass);
        objs.push(createMass(utils.randRange(20, 30), 1));
    }
    
    var interval = setInterval(update, 20); // Update the page every 20 ms
}

function update() {
    for (let obj of objs) {
        obj.updatePos();
        obj.update();
    }

    
}
