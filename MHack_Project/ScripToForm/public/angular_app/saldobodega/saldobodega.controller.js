(function(){

  angular.module('invApp')
    .controller('saldoBodegaCtrl', saldoBodegaCtrl);

  saldoBodegaCtrl.$inject = ['invData'];
  function saldoBodegaCtrl(invData){
    var vm = this;
    vm.data = {};

    //table
    invData.getSaldoBodegas(function(data){
      vm.data.lista = data;
    });

    //refs
    vm.data.selectedIdBodegaOption = {};

    invData.getBodegas(function(data){
      vm.data.idBodegas = data;
    });

    vm.data.selectedIdProductoOption = {};

    invData.getProductos(function(data){
      vm.data.idProductos = data;
    });

    vm.data.create = true;
    vm.data.detalle = {};
    vm.addSaldoBodega = function(){
      vm.data.create = true;
      vm.data.detalle = {};
      vm.data.selectedIdBodegaOption = {};
      vm.data.selectedIdProductoOption = {};
    };

    vm.editSaldoBodega = function(detalle){
      vm.data.create = false;
      vm.data.detalle = angular.copy(detalle);
      vm.data.selectedIdBodegaOption = _.find(vm.data.idBodegas, function(data){
        return data.id === vm.data.detalle.idBodega;
      });

      vm.data.selectedIdProductoOption = _.find(vm.data.idProductos, function(data){
        return data.id === vm.data.detalle.idProducto;
      });

    };

    vm.crearSaldoBodega = function(){
      vm.data.create = false;
      var detalle = angular.copy(vm.data.detalle);
      detalle.idBodega = vm.data.selectedIdBodegaOption.id;
      detalle.idProducto = vm.data.selectedIdProductoOption.id;

      invData.addSaldoBodega(detalle, function(detalle){
          vm.data.lista.push(detalle);
      });

      vm.data.detalle = {};
      vm.data.selectedIdBodegaOption = {};
      vm.data.selectedIdProductoOption = {};
    };

    vm.updateSaldoBodega = function(){
      vm.data.create = false;
      var detalle = angular.copy(vm.data.detalle);
      detalle.idBodega = vm.data.selectedIdBodegaOption.id;
      detalle.idProducto = vm.data.selectedIdProductoOption.id;

      invData.updateSaldoBodega(detalle, function(detalle){

        for(var i = 0; i < vm.data.lista.length; i++){
          if(vm.data.lista[i].id === detalle.id){
            vm.data.lista[i] = detalle;
            break;
          }
        }
      });

      vm.data.detalle = {};
      vm.data.selectedIdBodegaOption = {};
      vm.data.selectedIdProductoOption = {};
    };

    vm.deleteSaldoBodega = function(id){
      invData.deleteSaldoBodega(id, function(data){
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
