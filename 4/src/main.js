/**
 * Created by Павел on 19.03.2017.
 */
$(document).ready(function () {
    let str = $("p").html(),
        reg = /(<span>(.*?)<\/span>)+/g;
    $("<p>").html(str.replace(reg, "")).appendTo("body");
    $("<p>").html(str.match(reg)+" поменял 'просто текст' на другой текст").appendTo("body");
});