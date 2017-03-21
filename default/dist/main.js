'use strict';

/**
 * Created by Павел on 19.03.2017.
 */
$(document).ready(function () {
    var dayForOnce = '22',
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

    for (var year = 0; year <= 3000; year++) {
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
                    $('<p>').addDate(date + ' (One "2" in year)  ');
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
        } else if (countOfTwo == 2) {
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = monthForTwice[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var _month = _step3.value;

                    if (year % 4 == 0) {
                        var _iteratorNormalCompletion4 = true;
                        var _didIteratorError4 = false;
                        var _iteratorError4 = undefined;

                        try {
                            for (var _iterator4 = dayForTwice[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                                var day = _step4.value;

                                date = _month + '.' + day + '.' + yearString;
                                dateArray = date.split('');
                                countOfTwo = 0;
                                var _iteratorNormalCompletion5 = true;
                                var _didIteratorError5 = false;
                                var _iteratorError5 = undefined;

                                try {
                                    for (var _iterator5 = dateArray[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                                        var _l = _step5.value;

                                        if (_l == '2') {
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

                                if (countOfTwo >= 4) {
                                    $('<p>').addDate(date + ' (Two "2" in year)  ');
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
    }
});