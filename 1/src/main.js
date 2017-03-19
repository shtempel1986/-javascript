/**
 * Created by Павел on 19.03.2017.
 */
$(document).ready(function () {
    let $form = $('<form>').append('<input>');
    $('div').append($form);
    console.log($form);
    let $input = $('input');
    $input.on('keyup', function () {
        console.log('changed', $input.val());

        if ($input.val() == 'blur') {
            $input.trigger('blur');
            console.log('triggered');
        }
    })
});