/**
 * Created by Павел on 19.03.2017.
 */
$(document).ready(function () {
    $("input").each(function (i) {
        $(this).data("number", i);
    }).keyup(function(){
        let nextName ="name";
        if($(this).val().length==2){
            if($(this).data("number")==3) nextName+=0;
            else nextName += ($(this).data("number")+1);
            $(this).val("");
            $(`[name="${nextName}"]`).focus();
        }
    });
});