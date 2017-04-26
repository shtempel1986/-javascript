"use strict";

/**
 * Created by Павел on 19.03.2017.
 */

$(document).ready(function () {
    var length = Math.floor(Math.random() * 5000),
        array = [];
    var start = -1,
        end = -1;
    for (var i = 0; i < length; i++) {
        array[i] = Math.floor(Math.random() * 5000);
    }
    for (var _i = 0; _i < length; _i++) {
        if (start === -1 && array[_i + 1] - array[_i] === 1) {
            start = _i;
            end = _i + 1;
            continue;
        }
        if (start !== -1 && array[_i + 1] - array[_i] === 1) {
            end = _i + 1;
        }
        if (start !== -1 && array[_i + 1] - array[_i] !== 1) break;
    }
    $("<div>").html([array] + "<br/>" + array.slice(start, end + 1)).prependTo("body");
});