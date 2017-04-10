/**
* @example <created on="dd-mm-yy"></created>
* @desc minuses current date from created date, displays days, month, years ago
*/

angular
   .module('app')
   .directive('created', created);

function created() {
   var directive = {
      restrict: 'E',
      link: link,
      templateUrl: 'js/components/created/created.html'
   };

   return directive;

   function link(scope, element, attrs) {
      scope.number = 00;
      scope.format = 'DAY';

      var inMs = {
         today: new Date().getTime(),
         hour: 3600000,
         day: 86400000,
         month: 2765000000,
         year: 31540000000
      };

      var on = attrs.on;
      var toAmerican = on.split('/');
      var madeOn = toAmerican[1] +'/'+ toAmerican[0] +'/'+ toAmerican[2];
      madeOn = new Date(madeOn);
      var timeDiffMs = Math.abs( madeOn.getTime() - inMs.today );
      var plural = '';

      function minTwoDigitsAndPlural(number){
         plural = ( number > 1 ) ? 'S' : '';
         return ( number < 10 ) ? '0' + number : number;
      }

      if(timeDiffMs < inMs.day || timeDiffMs > inMs.day){
         scope.number = minTwoDigitsAndPlural( Math.ceil(timeDiffMs / inMs.day ) - 1);
         scope.format = 'DAY' + plural;
      }

      if(timeDiffMs > inMs.month ){
         scope.number = minTwoDigitsAndPlural( Math.ceil(timeDiffMs / inMs.month) - 1);
         scope.format = 'MONTH' + plural;
      }

      if(timeDiffMs > inMs.year ){
         scope.number = minTwoDigitsAndPlural( Math.ceil(timeDiffMs / inMs.year) - 1);
         scope.format = 'YEAR' + plural;
      }
   }
}
