import * as utils from './utils.js';

class Object {
    constructor(element, posUnit, sizeUnit) {
        this.element = element;
        var pos = utils.getPos(element, false);
        this.x = pos.left;
        this.y = pos.top;
        this.w = pos.right - this.x;
        this.h = pos.bottom - this.y;
        this.unitXY = posUnit;
        this.unitWH = sizeUnit;
        this.nodes = [];
        this.id = Math.random().toString(36).substring(2, 15);
    }

    update() {}

    updatePos() {
        if (this.element) {
            var pos = "translate(" + this.x + this.unitXY + ", " + this.y + this.unitXY  + ")"
            this.element.style.transform = pos;
            this.element.width = this.w + this.unitWH;
            this.element.height = this.h + this.unitWH;
        }
    }

    delete() {
        let index = objs.indexOf(this);
        if (index != -1) {
            objs.remove(index);
        }
    }
}

export { Object }