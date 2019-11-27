import test from "ava";
import Pencil from "pencil.js";
import gif from ".";

test("main", (t) => {
    const scene = new Pencil.OffScreenCanvas(10, 20);

    const image = gif(scene, 2);

    t.true(image instanceof window.Image);
});
