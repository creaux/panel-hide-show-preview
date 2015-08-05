'use strict';

window.app = {};

(function () {

    function _$$(els) {
        this.elements = [];
        for (var i = 0, len = els.length; i < len; i++) {
            var element = els[i];
            if (typeof element === 'string') {
                element = document.getElementById(element);
            }
            this.elements.push(element);
        }
    }

    window.$4 = function () {
        return new _$$(arguments);
    };

    _$$.prototype = {
        each: function (fn) {
            for (var i = 0, len = this.elements.length; i < len; ++i) {
                fn.call(this, this.elements[i]);
            }
            return this;
        },
        setStyle: function (prop, val) {
            this.each(function (el) {
                el.style[prop] = val;
            });
            return this
        },
        show: function () {
            var that = this;
            this.each(function () {
                that.setStyle('display', 'block');
            });
            return this;
        },
        hide: function() {
            var that = this;
            this.each(function() {
                that.setStyle('display', 'none');
            });
        }
    };

    window.$$ = function() {
        return new _$$(arguments);
    }

})();


(function($$, app) {

    var Handler = function(element) {

        var lessButton = 'btn-less',
            showButton = 'btn-more';


        function hideLessButton() {
            $$(lessButton).hide();
        }

        function showLessButton() {
            $$(lessButton).show();
        }

        function showMoreButton() {
            $$(showButton).show();
        }

        function hideMoreButton() {
            $$(showButton).hide();
        }

        this.showMore = function() {
            $$(element).show();
            hideMoreButton();
            showLessButton();
        };

        this.hideMore = function() {
            $$(element).hide();
            showMoreButton();
            hideLessButton();
        };

    };

    app.handler = new Handler('more');

})(window.$$, window.app);


