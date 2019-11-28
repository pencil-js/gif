import gif from ".";
// eslint-disable-next-line import/default
import MyWorker from "./worker";

(function windowScope () {
    if (this.Pencil) {
        this.Pencil.gif = gif.bind(this.Pencil);
        this.Pencil.Worker = MyWorker;
    }
    else {
        console.warn(`@pencil.js/gif need to run along side the Pencil.js library.
If you already have a Pencil.js script tag, be sure to put it before @pencil.js/gif.`);
    }
}).call(window);
