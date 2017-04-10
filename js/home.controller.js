angular
    .module('app')
    .controller('HomeController', HomeController);

function HomeController() {
    var vm = this;

    vm.open = {
        frontEnd: false,
        backEnd: false,
        other: false
    };

    vm.toggleButton = toggleButton;

    /*toggle button*/
    function toggleButton(open){
        vm.open[open] = !vm.open[open];
    }

}
