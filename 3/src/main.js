/**
 * Created by Павел on 19.03.2017.
 */
$(document).ready(function () {
    let array    = [],
        $form    = $("<form>"),
        $input1  = $("<input>"),
        $input2  = $("<input>"),
        $button1 = $("<button>"),
        $button2 = $("<button>"),
        $div     = $("div"),
        arrayLit = [],
        digit    = "",
        count    = 0;
    $button1.text("Остановить ввод чисел");
    $button2.text("Выбрать цифру");
    $input1.on("change keyup input click", function () {
        if (this.value.match(/[^0-9]/g)) {
            this.value = this.value.replace(/[^0-9]/g, "")
        }
    });
    $input2.on("change keyup input click", function () {
        if (this.value.match(/[^0-9]/g)) {
            this.value = this.value.replace(/[^0-9]/g, "")
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
        for (let i of array) {
            $div.append(`[${i}] `);
        }
        arrayLit = array.join("").split("");
        for (let l of arrayLit) {
            if (l === digit) {
                count++;
            }
        }
        $div.append(`${count} цифры "${digit}"`);
        console.log(arrayLit);
    });
    $div.append($form.append($input1), $button1);
});