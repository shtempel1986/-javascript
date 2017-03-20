'use strict';

/**
 * Created by Павел on 19.03.2017.
 */
$(document).ready(function () {
    var $form = $('<form>').append('<input>');
    $('div').append($form);
    console.log($form);
    var $input = $('input');
    $input.on('keyup', function () {
        console.log('changed', $input.val());

        if ($input.val() == 'blur' || $input.val() == 'Blur' || $input.val() == 'BLUR') {
            $input.trigger('blur');
            console.log('triggered');
        }
    });
});