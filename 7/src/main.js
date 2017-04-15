/**
 * Created by Павел on 19.03.2017.
 */

$(document).ready(() => {
    $("td").click(function () {
        $(this).toggleClass("black");
    });
    $("tr").click(function () {
        let $child = $(this).children(),  counter = 0, hasClass = false, string = "",
            classChanged = false;
        $child.each(function () {
            counter++;
            if (this.cellIndex !== 9) ( $child.eq(this.cellIndex + 1).hasClass("black") === $(this).hasClass("black")) ? classChanged = false :
                classChanged = true;
            if (classChanged || this.cellIndex === 9) {
                string += `${counter } ${($(this).hasClass("black") && (classChanged || this.cellIndex === 9)) ? "черный" : "белый"} `;
                counter = 0;
            }
        });
        console.log(this.rowIndex+1);
        $(`.text${this.rowIndex+1}`).text(string);
    });
});