angular
    .module('app')
    .controller('NavigationBarController', NavigationBarController);

function NavigationBarController($location, $window, $state, $timeout, $document) {
    var vm = this;

    vm.navOpen = false;

    vm.isActive = isActive;
    vm.toggleButton = toggleButton;
    vm.close = close;
    vm.goTo = goTo;

    /*active page*/
    function isActive(route) {
        return route == $location.path();
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
