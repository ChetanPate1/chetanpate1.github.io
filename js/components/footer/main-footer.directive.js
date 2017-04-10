/**
* @example <main-footer></main-footer>
* @desc main footer of the site
*/

angular
   .module('app')
   .directive('mainFooter', mainFooter);

function mainFooter() {
   return {
      restrict: 'E',
      templateUrl: 'js/components/footer/main-footer.html'
   }
}
