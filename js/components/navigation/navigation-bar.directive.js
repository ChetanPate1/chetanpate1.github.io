/**
 * @example <navigation-bar></navigation-bar>
 * @desc main navigation of the site
 */

angular
    .module('app')
    .directive('navigationBar', navigationBar);

function navigationBar() {
    return {
        restrict: 'E',
        templateUrl: 'js/components/navigation/navigation-bar.html',
        controller: 'NavigationBarController',
        controllerAs: 'NavbarCtrl'
    }
}