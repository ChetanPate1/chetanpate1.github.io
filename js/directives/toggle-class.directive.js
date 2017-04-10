/**
* @example <div toggle-hover-class="class-name"></div>
* @desc When hover an element toggle a class given class.
*/

angular
   .module('app')
   .directive('toggleHoverClass', toggleHoverClass);

function toggleHoverClass() {
   return {
      restrict: 'A',
      link: function(scope, element, attrs) {
         //var eleClass = attrs.class;
         element.on('mouseenter', function() {
            element.addClass(attrs.toggleHoverClass);
         });

         element.on('mouseleave', function() {
            element.removeClass(attrs.toggleHoverClass);
         });
      }
   };
}
