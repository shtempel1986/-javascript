"use strict";

/**
 * Created by Павел on 19.03.2017.
 */
$(document).ready(function () {
    var array = [],
        $form = $("<form>"),
        $input1 = $("<input>"),
        $input2 = $("<input>"),
        $button1 = $("<button>"),
        $button2 = $("<button>"),
        $div = $("div"),
        arrayLit = [],
        digit = "",
        count = 0;
    $button1.text("Остановить ввод чисел");
    $button2.text("Выбрать цифру");
    $input1.on("change keyup input click", function () {
        if (this.value.match(/[^0-9]/g)) {
            this.value = this.value.replace(/[^0-9]/g, "");
        }
    });
    $input2.on("change keyup input click", function () {
        if (this.value.match(/[^0-9]/g)) {
            this.value = this.value.replace(/[^0-9]/g, "");
        }
    });
    $input2.on("keydown", function () {
        if (this.value != "") {
            this.value = "";
        }
    });
    $form.on("submit", function (event) {
        event.preventDefault();
        array.push(parseInt($input1.val()));
        console.log(array);
        $input1.val("");
    });
    $button1.on("click", function () {
        $div.html("").append($input2, $button2);
    });
    $button2.on("click", function () {
        digit = $input2.val();
        $div.html("В Массиве ");
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = array[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var i = _step.value;

                $div.append("[" + i + "] ");
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        arrayLit = array.join("").split("");
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
            for (var _iterator2 = arrayLit[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var l = _step2.value;

                if (l === digit) {
                    count++;
                }
            }
        } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                    _iterator2.return();
                }
            } finally {
                if (_didIteratorError2) {
                    throw _iteratorError2;
                }
            }
        }

        $div.append(count + " \u0446\u0438\u0444\u0440\u044B \"" + digit + "\"");
        console.log(arrayLit);
    });
    $div.append($form.append($input1), $button1);
});