(function(){

  angular.module('invApp', ['ngRoute', 'ui.bootstrap']);

  function config ($routeProvider, $locationProvider){
    $routeProvider
      .when('/Bodega', {
        templateUrl: '/assets/angular_app/bodega/bodega.view.html',
        controller: 'bodegaCtrl',
        controllerAs: 'vm'
      })
      .when('/Producto', {
        templateUrl: '/assets/angular_app/producto/producto.view.html',
        controller: 'productoCtrl',
        controllerAs: 'vm'
      })
      .when('/SaldoBodega', {
        templateUrl: '/assets/angular_app/saldoBodega/saldoBodega.view.html',
        controller: 'saldoBodegaCtrl',
        controllerAs: 'vm'
      })
      .otherwise({redirectTo: '/Bodega'});

    /*
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
    */
  }

  angular.module('invApp')
    .config(['$routeProvider', '$locationProvider', config]);

}
)();
