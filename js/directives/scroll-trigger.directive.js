/**
 * @example <div scroll-trigger></div>
 * @desc When element is on screen it changes trigger scope var to true else false.
 */

angular
    .module('app')
    .directive('scrollTrigger', scrollTrigger);


function scrollTrigger($window) {
    return {
        scope: true,
        link: function(scope, element) {
            var elementOffset = element.length ? element.offset().top : element.offset().top;
            var yCenter = Math.round((element.height()/ 2.5));
            var triggerPos = elementOffset - yCenter;

            angular.element($window).on('scroll', function() {
                var vm = this;
                var window_scrollPos = vm.pageYOffset;


                if(window_scrollPos > triggerPos) {
                    scope.trigger = true;
                }else{
                    scope.trigger = false;
                }

                scope.$apply();
            });
        }
    };
};