(function ($) {
    'use strict'; $.fn.rCounter = function (options) {
        var settings = $.extend({ duration: 20, easing: 'swing', }, options); return this.each(function () {
            var $this = $(this); var startCounter = function () {
                var numbers = []; var length = $this.length; var number = $this.text(); var isComma = /[,\-]/.test(number); var isFloat = /[,\-]/.test(number); var number = number.replace(/,/g, ''); var divisions = settings.duration; var decimalPlaces = isFloat ? (number.split('.')[1] || []).length : 0; for (var rcn = divisions; rcn >= 1; rcn--) {
                    var newNum = parseInt(number / divisions * rcn); if (isFloat) { newNum = parseFloat(number / divisions * rcn).toFixed(decimalPlaces); }
                    if (isComma) { while (/(\d+)(\d{3})/.test(newNum.toString())) { newNum = newNum.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2'); } }
                    numbers.unshift(newNum);
                }
                var counterUpDisplay = function () { $this.text(numbers.shift()); setTimeout(counterUpDisplay, settings.duration); }; setTimeout(counterUpDisplay, settings.duration);
            }
            $this.waypoint(startCounter, { offset: '100%', triggerOnce: true });
        });
    }
}(jQuery));