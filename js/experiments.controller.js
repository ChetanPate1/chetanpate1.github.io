angular
    .module('app')
    .controller('ExperimentsController', ExperimentsController);

function ExperimentsController() {
    var vm = this;

    /*Animated buttons - interactive model*/
    vm.open = false;
    vm.toggleButton = toggleButton;

    /*toggle button*/
    function toggleButton(){
        vm.open = !vm.open;
    }



    /*Dropdown interactive model*/
    vm.dropDownModalButton = dropDownModalButton;
    vm.buttonName = '2D';
    vm.perspective = false;

    function dropDownModalButton(){
        if(vm.buttonName == '2D'){
            vm.buttonName = '3D';
            vm.perspective = true;
        }else {
            vm.buttonName = '2D';
            vm.perspective = false;
        }
    }


}
