/**
 * Created by Павел on 19.03.2017.
 */
$(document).ready(function () {
    let dayForOnce = '22',
        monthForOnce = ['02', '12'],
        dayForTwiceNoLeap = ['02', '12', '20', '21', '22', '23', '24', '25', '26', '27', '28'],
        dayForTwice = ['02', '12', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29'],
        monthForTwice = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
        $windowHeight = $(window).height(),
        count = 0,
        date = '',
        dateArray = [];

    jQuery.fn.addDate = function (date) {
        count++;
        return this.css({
            border: 'solid red 3px',
            display: 'inline-block',
            width: 300
        }).text(count + '.) ' + date).appendTo('div');
    };

    $('div').css({
        // display: 'flex',
        // // 'flex-direction': 'column',
        // // 'flex-wrap': 'wrap',
        height: $windowHeight
    });

    for (let year = 0; year <= 3000; year++) {
        let yearString;
        if (year < 10) {
            yearString = '000' + year.toString();
        } else if (year < 100) {
            yearString = '00' + year.toString();
        } else if (year < 1000) {
            yearString = '0' + year.toString();
        } else {
            yearString = year.toString()
        }
        let yearArray = yearString.split(''),
            countOfTwo = 0;
        for (let l of yearArray) {
            if (l === '2') {
                countOfTwo++
            }
        }
        if (countOfTwo == 1) {
            for (let month of monthForOnce) {
                date = month + '.' + dayForOnce + '.' + yearString;
                $('<p>').addDate(date + ' (One "2" in year)  ');
            }
        }else if (countOfTwo == 2) {
            for (let month of monthForTwice) {
                if (year % 4 == 0) {
                    for (let day of dayForTwice) {
                        date = month + '.' + day + '.' + yearString;
                        dateArray = date.split('');
                        countOfTwo = 0;
                        for (let l of dateArray) {
                            if (l == '2') {
                                countOfTwo++;
                            }
                        }
                        if (countOfTwo >= 4) {
                            $('<p>').addDate(date + ' (Two "2" in year)  ');
                        }
                    }
                }
            }
        }
    }
});