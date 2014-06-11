'use strict';

//Global service for global variables
angular.module('nyccouncil.system').factory('Global', [
    function() {
        var _this = this;
        _this._data = {
            council_members: window.councilmembers,
        };

        return _this._data;
    }
]);
