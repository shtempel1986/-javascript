/**
 * Created by Павел on 19.03.2017.
 */

$(document).ready(() => {
    let $textArea = $("<textarea>").prependTo("body"), data = localStorage.getItem("textAreaData");
    if(data){
        $textArea.val(data);
    }
    console.log(localStorage.key(2));
    $textArea.on("change",()=>{
        localStorage.setItem("textAreaData",$textArea.val())
    });
});