'use strict';

/**
 * Created by Павел on 19.03.2017.
 */
$(document).ready(function () {
    var dayForOnce = '22',
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

    for (var year = 2; year <= 3000; year++) {
        var yearString = void 0;
        if (year < 10) {
            yearString = '000' + year.toString();
        } else if (year < 100) {
            yearString = '00' + year.toString();
        } else if (year < 1000) {
            yearString = '0' + year.toString();
        } else {
            yearString = year.toString();
        }
        var yearArray = yearString.split(''),
            countOfTwo = 0;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = yearArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var l = _step.value;

                if (l === '2') {
                    countOfTwo++;
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        if (countOfTwo == 1) {
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = monthForOnce[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var month = _step2.value;

                    date = month + '.' + dayForOnce + '.' + yearString;
                    $('<p>').addDate(date + ' (One "2" in year) (count of "2" = 4)');
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }
        } else if (countOfTwo === 2 || countOfTwo === 3) {
            var countOfTwoInYear = countOfTwo;
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = monthForTwice[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var _month = _step3.value;

                    if (_month == '12' && countOfTwoInYear === 3) {
                        console.log(countOfTwo, year);
                        for (var day = 1; day <= 31; day++) {
                            if (day <= 9) {
                                day = '0' + day;
                            }
                            date = _month + '.' + day + '.' + yearString;
                            dateArray = date.split('');
                            countOfTwo = 0;
                            var _iteratorNormalCompletion4 = true;
                            var _didIteratorError4 = false;
                            var _iteratorError4 = undefined;

                            try {
                                for (var _iterator4 = dateArray[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                                    var _l = _step4.value;

                                    if (_l == '2') {
                                        countOfTwo++;
                                    }
                                }
                            } catch (err) {
                                _didIteratorError4 = true;
                                _iteratorError4 = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
                                        _iterator4.return();
                                    }
                                } finally {
                                    if (_didIteratorError4) {
                                        throw _iteratorError4;
                                    }
                                }
                            }

                            $('<p>').addDate(date + ' (Three "2" in year)' + ' (count of "2" = ' + countOfTwo + ')');
                        }
                    } else if (_month == '02' && countOfTwoInYear == 3 && year % 4 == 0) {
                        for (var _day = 1; _day <= 29; _day++) {
                            if (_day <= 9) {
                                _day = '0' + _day;
                            }
                            date = _month + '.' + _day + '.' + yearString;
                            dateArray = date.split('');
                            countOfTwo = 0;
                            var _iteratorNormalCompletion5 = true;
                            var _didIteratorError5 = false;
                            var _iteratorError5 = undefined;

                            try {
                                for (var _iterator5 = dateArray[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                                    var _l2 = _step5.value;

                                    if (_l2 == '2') {
                                        countOfTwo++;
                                    }
                                }
                            } catch (err) {
                                _didIteratorError5 = true;
                                _iteratorError5 = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion5 && _iterator5.return) {
                                        _iterator5.return();
                                    }
                                } finally {
                                    if (_didIteratorError5) {
                                        throw _iteratorError5;
                                    }
                                }
                            }

                            $('<p>').addDate(date + ' (Three "2" in year)' + ' (count of "2" = ' + countOfTwo + ')');
                        }
                    } else if (_month == '02' && countOfTwoInYear == 3 && year % 4 > 0) {
                        for (var _day2 = 1; _day2 <= 28; _day2++) {
                            if (_day2 <= 9) {
                                _day2 = '0' + _day2;
                            }
                            date = _month + '.' + _day2 + '.' + yearString;
                            dateArray = date.split('');
                            countOfTwo = 0;
                            var _iteratorNormalCompletion6 = true;
                            var _didIteratorError6 = false;
                            var _iteratorError6 = undefined;

                            try {
                                for (var _iterator6 = dateArray[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                                    var _l3 = _step6.value;

                                    if (_l3 == '2') {
                                        countOfTwo++;
                                    }
                                }
                            } catch (err) {
                                _didIteratorError6 = true;
                                _iteratorError6 = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion6 && _iterator6.return) {
                                        _iterator6.return();
                                    }
                                } finally {
                                    if (_didIteratorError6) {
                                        throw _iteratorError6;
                                    }
                                }
                            }

                            $('<p>').addDate(date + ' (Three "2" in year)' + ' (count of "2" = ' + countOfTwo + ')');
                        }
                    } else {
                        var _iteratorNormalCompletion7 = true;
                        var _didIteratorError7 = false;
                        var _iteratorError7 = undefined;

                        try {
                            for (var _iterator7 = dayForTwice[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                                var _day3 = _step7.value;

                                date = _month + '.' + _day3 + '.' + yearString;
                                dateArray = date.split('');
                                countOfTwo = 0;
                                var _iteratorNormalCompletion8 = true;
                                var _didIteratorError8 = false;
                                var _iteratorError8 = undefined;

                                try {
                                    for (var _iterator8 = dateArray[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                                        var _l4 = _step8.value;

                                        if (_l4 == '2') {
                                            countOfTwo++;
                                        }
                                    }
                                } catch (err) {
                                    _didIteratorError8 = true;
                                    _iteratorError8 = err;
                                } finally {
                                    try {
                                        if (!_iteratorNormalCompletion8 && _iterator8.return) {
                                            _iterator8.return();
                                        }
                                    } finally {
                                        if (_didIteratorError8) {
                                            throw _iteratorError8;
                                        }
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
                        } catch (err) {
                            _didIteratorError7 = true;
                            _iteratorError7 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion7 && _iterator7.return) {
                                    _iterator7.return();
                                }
                            } finally {
                                if (_didIteratorError7) {
                                    throw _iteratorError7;
                                }
                            }
                        }
                    }
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }
        }
        if (year == 2222) {
            var _iteratorNormalCompletion9 = true;
            var _didIteratorError9 = false;
            var _iteratorError9 = undefined;

            try {
                for (var _iterator9 = monthForTwice[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                    var _month2 = _step9.value;

                    if (_month2 == '1' || _month2 == '3' || _month2 == '5' || _month2 == '7' || _month2 == '8' || _month2 == '10' || _month2 == '12') {
                        for (var _day4 = 1; _day4 <= 31; _day4++) {
                            date = _month2 + '.' + _day4 + '.' + yearString;
                            dateArray = date.split('');
                            countOfTwo = 0;
                            var _iteratorNormalCompletion10 = true;
                            var _didIteratorError10 = false;
                            var _iteratorError10 = undefined;

                            try {
                                for (var _iterator10 = dateArray[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
                                    var _l5 = _step10.value;

                                    if (_l5 == '2') {
                                        countOfTwo++;
                                    }
                                }
                            } catch (err) {
                                _didIteratorError10 = true;
                                _iteratorError10 = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion10 && _iterator10.return) {
                                        _iterator10.return();
                                    }
                                } finally {
                                    if (_didIteratorError10) {
                                        throw _iteratorError10;
                                    }
                                }
                            }

                            $('<p>').addDate(date + ' (Four "2" in year)' + ' (count of "2" = ' + countOfTwo + ')');
                        }
                    } else if (_month2 == '4' || _month2 == '6' || _month2 == '9' || _month2 == '11') {
                        for (var _day5 = 1; _day5 <= 30; _day5++) {
                            date = _month2 + '.' + _day5 + '.' + yearString;
                            dateArray = date.split('');
                            countOfTwo = 0;
                            var _iteratorNormalCompletion11 = true;
                            var _didIteratorError11 = false;
                            var _iteratorError11 = undefined;

                            try {
                                for (var _iterator11 = dateArray[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
                                    var _l6 = _step11.value;

                                    if (_l6 == '2') {
                                        countOfTwo++;
                                    }
                                }
                            } catch (err) {
                                _didIteratorError11 = true;
                                _iteratorError11 = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion11 && _iterator11.return) {
                                        _iterator11.return();
                                    }
                                } finally {
                                    if (_didIteratorError11) {
                                        throw _iteratorError11;
                                    }
                                }
                            }

                            $('<p>').addDate(date + ' (Four "2" in year)' + ' (count of "2" = ' + countOfTwo + ')');
                        }
                    } else {
                        for (var _day6 = 1; _day6 <= 28; _day6++) {
                            if (_day6 <= 9) {
                                _day6 = '0' + _day6;
                            }
                            date = _month2 + '.' + _day6 + '.' + yearString;
                            dateArray = date.split('');
                            countOfTwo = 0;
                            var _iteratorNormalCompletion12 = true;
                            var _didIteratorError12 = false;
                            var _iteratorError12 = undefined;

                            try {
                                for (var _iterator12 = dateArray[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
                                    var _l7 = _step12.value;

                                    if (_l7 == '2') {
                                        countOfTwo++;
                                    }
                                }
                            } catch (err) {
                                _didIteratorError12 = true;
                                _iteratorError12 = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion12 && _iterator12.return) {
                                        _iterator12.return();
                                    }
                                } finally {
                                    if (_didIteratorError12) {
                                        throw _iteratorError12;
                                    }
                                }
                            }

                            $('<p>').addDate(date + ' (Four "2" in year)' + ' (count of "2" = ' + countOfTwo + ')');
                        }
                    }
                }
            } catch (err) {
                _didIteratorError9 = true;
                _iteratorError9 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion9 && _iterator9.return) {
                        _iterator9.return();
                    }
                } finally {
                    if (_didIteratorError9) {
                        throw _iteratorError9;
                    }
                }
            }
        }
    }
});