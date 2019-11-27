/* globals Pencil */
import gif from ".";

if (Pencil) {
    Pencil.gif = gif;
}
else {
    console.warn(`@pencil.js/gif need to run along side the Pencil.js library.
If you already have a Pencil.js script tag, be sure to put it before @pencil.js/gif.`);
}
