/**
*    CoTag iOS-Toggle
*    Replace the browsers default check box element
*    
*   Copyright (c) 2014 CoTag Media.
*    
*    @author     Stephen von Takach <steve@cotag.me>
*    @copyright  2014 cotag.me
* 
*     
*     References:
*        * http://www.designcouch.com/home/why/2013/09/19/ios7-style-pure-css-toggle/
*        * http://codepen.io/joshnh/pen/hjbuH
*
**/


(function (angular) {
    'use strict';

    angular.module('coToggle', []).
        directive('toggle', function () {
            return {
                template: '<label class="ios-toggle" ng-click="update($event)" ng-class="{ios-active: state}">' +
                            '<input type="checkbox" ng-checked="state" />' +
                          '</label>',
                replace: true,
                restrict: 'E',
                scope: {
                    state: '=?bind'
                },
                link: function ($scope, $element) {
                    $scope.update = function ($event) {
                        $scope.state = !$scope.state;

                        // Prevent the checkbox element from firing events
                        // ng-checked will keep it up to date
                        $event.preventDefault();
                        $event.stopPropagation();
                    };
                }
            };
        });

}(this.angular));
