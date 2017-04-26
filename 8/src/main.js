/**
 * Created by Павел on 19.03.2017.
 */

$(document).ready(() => {
    const length = Math.floor(Math.random() * 5000), array = [];
    let start = -1, end = -1;
    for (let i = 0; i < length; i++) {
        array[i] = Math.floor(Math.random() * 5000);
    }
    for (let i = 0; i < length; i++) {
        if (start===-1 && array[i + 1] - array[i] === 1) {
            start = i;
            end = i + 1;
            continue;
        }
        if (start!==-1 && array[i + 1] - array[i] === 1) {
            end = i + 1;
        }
        if (start!==-1 && array[i + 1] - array[i] !== 1)
            break;
    }
    $("<div>").html(`${[array]}<br/>${array.slice(start, end+1)}`).prependTo("body");
});