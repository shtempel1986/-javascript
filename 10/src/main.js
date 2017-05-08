/**
 * Created by Павел on 19.03.2017.
 */

$(document).ready(() => {
    let start = new Date;
    let $textArea = $("<textarea>").prependTo("body"), data = JSON.parse(localStorage.getItem("textAreaOffset"));
    if(data){
        $textArea.width(data.width);
        $textArea.height(data.height);
    }
    $textArea.mouseup(()=>{
        let offset = {};
        offset.width = $textArea.width();
        offset.height = $textArea.height();
        localStorage.setItem("textAreaOffset", JSON.stringify(offset));
    });
    console.log(new Date() - start);
});
console.log(window,Iterator);