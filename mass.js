import { Object } from './obj.js';
import * as utils from './utils.js';

export function createMass(delay, speed) {
    var mass = new Object(document.getElementById("mass"), "px", "%");
    mass.y = document.body.scrollHeight;
    mass.started = false;
    mass.delay = delay;
    mass.speed = speed;

    mass.nearSnd = new Audio("audio/mass_near.wav");
    mass.nearSnd.loop = true;
    utils.playSound(mass.nearSnd);

    mass.update = function() {
        if (mass.started) {
            // The magic number here is the width of the mass's texture times two.
            if (mass.y < -240) {
                mass.y += 120
            } else {
                mass.y -= mass.speed;
            }
            // The minus 50 is there so that there isn't white space when it goes to the right.
            mass.x = utils.sineBetween(performance.now() / 1_000, 3, -10, 10) - 50;
        } else {
            var rand = utils.randRange(1, 100, true);
            if (rand == 100 && performance.now() / 1_000 > mass.delay) {
                mass.started = true;
                var hello = new Audio("audio/mass_hello.wav");
                hello.volume = 0.5;
                utils.playSound(hello);
            }
        }
        var vol = (1 - utils.clamp(mass.y / (document.body.scrollHeight / 2), 0, 1)) / 2
        mass.nearSnd.volume = vol;
    }

    return mass;
}