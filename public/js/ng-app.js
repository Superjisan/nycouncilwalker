'use strict';

angular.module('nyccouncil', [
                'ngCookies',
                'ngResource',
                'ui.router',
                'nyccouncil.system'
                ])
.config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('[[');
  $interpolateProvider.endSymbol(']]');
});

window.angular.module('nyccouncil.system', []);
