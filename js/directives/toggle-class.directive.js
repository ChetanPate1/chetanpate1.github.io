/**
 * @example <div toggle-class="class-name"></div>
 * @desc When clicking an element toggle a class given class.
 */

angular
    .module('app')
    .directive('toggleClass', toggleClass);

function toggleClass() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.bind('click', function() {
                element.toggleClass(attrs.toggleClass);
            });
        }
    };
}