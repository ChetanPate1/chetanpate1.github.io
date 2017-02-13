angular
    .module('app')
    .config(config);

function config($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('home',{
            url: '/home',
            templateUrl: 'templates/home.html',
            controller: 'HomeController',
            controllerAs: 'HomeCtrl'
        })
        .state('experiments',{
            url: '/experiments',
            templateUrl: 'templates/experiments/index.html',
            controller: 'ExperimentsController',
            controllerAs: 'ExperimentsCtrl'
        })
        .state('experiments.loading-GIFs',{
            url: '/loading-GIFs',
            templateUrl: 'templates/experiments/loading-gif.html'
        })
        .state('experiments.animated-buttons',{
            url: '/animated-buttons',
            templateUrl: 'templates/experiments/animated-buttons.html'
        })
        .state('experiments.expanding-images',{
            url: '/expanding-images',
            templateUrl: 'templates/experiments/expanding-image.html'
        })
        .state('experiments.CSS3-dropdown',{
            url: '/CSS3-dropdown',
            templateUrl: 'templates/experiments/dropdowns.html'
        })
        .state('experiments.mobile-navigation',{
            url: '/mobile-navigation',
            templateUrl: 'templates/experiments/mobile-navigation.html'
        })
        .state('experiments.parallax-cards',{
            url: '/3D-cards',
            templateUrl: 'templates/experiments/parallax-cards.html'
        })

        .state('work',{
            url: '/recent-work',
            templateUrl: 'templates/work/index.html',
            controller: 'ExperimentsController',
            controllerAs: 'ExperimentsCtrl'
        })
        .state('work.lemonade',{
            url: '/lemonade-money',
            templateUrl: 'templates/work/lemonade.html'
        })
        .state('work.healthwatch',{
            url: '/healthwatch-surrey',
            templateUrl: 'templates/work/healthwatch.html'
        });

    $urlRouterProvider.otherwise('/home');
}