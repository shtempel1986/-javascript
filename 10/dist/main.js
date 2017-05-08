"use strict";

/**
 * Created by Павел on 19.03.2017.
 */

$(document).ready(function () {
    var start = new Date();
    var $textArea = $("<textarea>").prependTo("body"),
        data = JSON.parse(localStorage.getItem("textAreaOffset"));
    if (data) {
        $textArea.width(data.width);
        $textArea.height(data.height);
    }
    $textArea.mouseup(function () {
        var offset = {};
        offset.width = $textArea.width();
        offset.height = $textArea.height();
        localStorage.setItem("textAreaOffset", JSON.stringify(offset));
    });
    console.log(new Date() - start);
});
console.log(window, Iterator);