"use strict";
var Shape;
(function (Shape) {
    var PI = Math.PI;
    function circle(r) {
        return PI * Math.pow(r, r);
    }
    Shape.circle = circle;
})(Shape || (Shape = {}));
