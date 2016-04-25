(function(){

  angular.module('invApp')
    .controller('bodegaCtrl', bodegaCtrl);

  bodegaCtrl.$inject = ['invData'];
  function bodegaCtrl(invData){
    var vm = this;
    vm.data = {};

    invData.getBodegas(function(data){
      vm.data.lista = data;
    });

    vm.data.create = true;
    vm.data.detalle = {};
    vm.addBodega = function(){
      vm.data.create = true;
      vm.data.detalle = {};
    };

    vm.editBodega = function(detalle){
      vm.data.create = false;
      vm.data.detalle = {};
      vm.data.detalle.id = detalle.id;
      vm.data.detalle.nombre = detalle.nombre;

    };

    vm.crearBodega = function(){
      vm.data.create = false;
      var detalle = angular.copy(vm.data.detalle);

      invData.addBodega(detalle, function(detalle){
          vm.data.lista.push(detalle);
      });

      vm.data.detalle = {};
    };

    vm.updateBodega = function(){
      vm.data.create = false;
      var detalle = angular.copy(vm.data.detalle);

      invData.updateBodega(detalle, function(detalle){
        for(var i = 0; i < vm.data.lista.length; i++){
          if(vm.data.lista[i].id === detalle.id){
            vm.data.lista[i] = detalle;
            break;
          }
        }
      });

      vm.data.detalle = {};
    };


    vm.deleteBodega = function(id){
      invData.deleteBodega(id, function(data){
        for(var i = 0; i < vm.data.lista.length; i++){
          if(vm.data.lista[i].id === id){
            vm.data.lista.splice(i, 1);
            break;
          }
        }
      });
    };
  }

})();
