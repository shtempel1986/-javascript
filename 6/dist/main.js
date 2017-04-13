"use strict";

/**
 * Created by Павел on 19.03.2017.
 */
function testFormat(number) {
    var newNumber = "",
        counter = 0;
    for (var i = number.length - 1; i >= 0; i--) {
        if (counter !== 0 && counter % 3 === 0) {
            newNumber = number[i] + " " + newNumber;
            console.log(counter);
            counter++;
            console.log(newNumber);
        } else {
            newNumber = "" + number[i] + newNumber;
            counter++;
        }
    }
    return newNumber;
}
$(document).ready(function () {
    var $input = $("input").width("100%"),
        $span = $("span");
    $input.keydown(function (e) {
        if (e.which === 13) {
            $span.html(testFormat($input.val()));
        }
    });
    $input.on("change keyup input click", function () {
        if (this.value.match(/[^0-9]/g)) {
            this.value = this.value.replace(/[^0-9]/g, "");
        }
    });
});