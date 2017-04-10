angular
   .module('app')
   .controller('NavigationBarController', NavigationBarController);

NavigationBarController.$inject = ['$location', '$state'];

function NavigationBarController($location, $state) {
   var vm = this;
   var stateParent = 'home';

   vm.navOpen = false;

   vm.isActive = isActive;
   vm.isStateParentActive = isStateParentActive;
   vm.toggleButton = toggleButton;
   vm.close = close;
   vm.goTo = goTo;

   /*active page*/
   function isActive(route) {
      return route == $location.path();
   }

   function isStateParentActive(name) {
      var stateName = $state.current.name;
      stateParent = stateName.split('.')[0];

      return name == stateParent;
   }

   /*toggle mobile nav button*/
   function toggleButton(){
      vm.navOpen = !vm.navOpen;
   }

   /*onclick of link close sidebar*/
   function close(){
      vm.navOpen = false;
   }

   function goTo(to){
      $state.go(to);
   }
}
