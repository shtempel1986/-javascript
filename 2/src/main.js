/**
 * Created by Павел on 19.03.2017.
 */
$(document).ready(function () {
    let dayForOnce = '22',
        monthForOnce = ['02', '12'],
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
            width: 440,
            margin: 0
        }).text(count + '.) ' + date).appendTo('div');
    };

    $('div').css({
        display: 'flex',
        'flex-direction': 'column',
        'flex-wrap': 'wrap',
        height: $windowHeight
    });
    $('body').css('margin', 0);

    for (let year = 2; year <= 3000; year++) {
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
                $('<p>').addDate(date + ' (One "2" in year) (count of "2" = 4)');
            }
        } else if (countOfTwo === 2 || countOfTwo === 3) {
            let countOfTwoInYear = countOfTwo;
            for (let month of monthForTwice) {
                if (month == '12' && countOfTwoInYear === 3) {
                    console.log(countOfTwo, year);
                    for (let day = 1; day <= 31; day++) {
                        if(day <= 9){
                            day = '0' + day;
                        }
                        date = month + '.' + day + '.' + yearString;
                        dateArray = date.split('');
                        countOfTwo = 0;
                        for (let l of dateArray) {
                            if (l == '2') {
                                countOfTwo++;
                            }
                        }
                        $('<p>').addDate(date + ' (Three "2" in year)' + ' (count of "2" = ' + countOfTwo + ')');
                    }
                } else if (month == '02' && countOfTwoInYear == 3 && year % 4 == 0) {
                    for (let day = 1; day <= 29; day++) {
                        if(day <= 9){
                            day = '0' + day;
                        }
                        date = month + '.' + day + '.' + yearString;
                        dateArray = date.split('');
                        countOfTwo = 0;
                        for (let l of dateArray) {
                            if (l == '2') {
                                countOfTwo++;
                            }
                        }
                        $('<p>').addDate(date + ' (Three "2" in year)' + ' (count of "2" = ' + countOfTwo + ')');
                    }
                } else if (month == '02' && countOfTwoInYear == 3 && year % 4 > 0) {
                    for (let day = 1; day <= 28; day++) {
                        if(day <= 9){
                            day = '0' + day;
                        }
                        date = month + '.' + day + '.' + yearString;
                        dateArray = date.split('');
                        countOfTwo = 0;
                        for (let l of dateArray) {
                            if (l == '2') {
                                countOfTwo++;
                            }
                        }
                        $('<p>').addDate(date + ' (Three "2" in year)' + ' (count of "2" = ' + countOfTwo + ')');
                    }
                } else {
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
                            if (year % 4 > 0 && date.indexOf('02.29.') == -1) {
                                $('<p>').addDate(date + ' (Two or Three "2" in year)' + ' (count of "2" = ' + countOfTwo + ')');
                            } else {
                                $('<p>').addDate(date + ' (Two or Three "2" in year)' + ' (count of "2" = ' + countOfTwo + ')');
                            }
                        }
                    }
                }
            }
        }
        if (year == 2222) {
            for (let month of monthForTwice) {
                if (month == '1' || month == '3' || month == '5' || month == '7' || month == '8' || month == '10' || month == '12') {
                    for (let day = 1; day <= 31; day++) {
                        date = month + '.' + day + '.' + yearString;
                        dateArray = date.split('');
                        countOfTwo = 0;
                        for (let l of dateArray) {
                            if (l == '2') {
                                countOfTwo++;
                            }
                        }
                        $('<p>').addDate(date + ' (Four "2" in year)' + ' (count of "2" = ' + countOfTwo + ')');
                    }
                } else if (month == '4' || month == '6' || month == '9' || month == '11') {
                    for (let day = 1; day <= 30; day++) {
                        date = month + '.' + day + '.' + yearString;
                        dateArray = date.split('');
                        countOfTwo = 0;
                        for (let l of dateArray) {
                            if (l == '2') {
                                countOfTwo++;
                            }
                        }
                        $('<p>').addDate(date + ' (Four "2" in year)' + ' (count of "2" = ' + countOfTwo + ')');
                    }
                } else {
                    for (let day = 1; day <= 28; day++) {
                        if (day <= 9) {
                            day = '0' + day;
                        }
                        date = month + '.' + day + '.' + yearString;
                        dateArray = date.split('');
                        countOfTwo = 0;
                        for (let l of dateArray) {
                            if (l == '2') {
                                countOfTwo++;
                            }
                        }
                        $('<p>').addDate(date + ' (Four "2" in year)' + ' (count of "2" = ' + countOfTwo + ')');
                    }
                }
            }
        }
    }
});