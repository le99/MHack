(function(){

  angular.module('invApp')
    .controller('saldoBodegaCtrl', saldoBodegaCtrl);

  saldoBodegaCtrl.$inject = ['invData'];
  function saldoBodegaCtrl(invData){
    var vm = this;
    vm.data = {};
    vm.data.selectedBodegaOption = {};
    invData.getSaldos(function(data){
      vm.data.lista = data;
    });

    invData.getBodegas(function(data){
      vm.data.bodegas = data;
      //vm.data.selectedBodegaOption = {id:55};
    });

    invData.getProductos(function(data){
      vm.data.productos = data;
    });

    vm.data.create = true;
    vm.data.detalle = {};
    vm.addSaldo = function(){
      vm.data.create = true;
      vm.data.detalle = {};
      vm.data.selectedBodegaOption = {};
      vm.data.selectedProductoOption = {};
    };

    vm.editSaldo = function(detalle){
      vm.data.create = false;
      vm.data.detalle = angular.copy(detalle);
      vm.data.selectedBodegaOption = _.find(vm.data.bodegas, function(data){
        return data.id === vm.data.detalle.idBodega;
      });

      vm.data.selectedProductoOption = _.find(vm.data.productos, function(data){
        return data.id === vm.data.detalle.idProducto;
      });

    };

    vm.crearSaldo = function(){
      vm.data.create = false;
      var detalle = angular.copy(vm.data.detalle);
      detalle.idBodega = vm.data.selectedBodegaOption.id;
      detalle.idProducto = vm.data.selectedProductoOption.id;

      invData.addSaldos(detalle, function(detalle){
          vm.data.lista.push(detalle);
      });

      vm.data.detalle = {};
      vm.data.selectedBodegaOption = {};
      vm.data.selectedProductoOption = {};
    };

    vm.updateSaldo = function(){
      vm.data.create = false;
      var detalle = angular.copy(vm.data.detalle);
      detalle.idBodega = vm.data.selectedBodegaOption.id;
      detalle.idProducto = vm.data.selectedProductoOption.id;

      invData.updateSaldo(detalle, function(detalle){
        
        for(var i = 0; i < vm.data.lista.length; i++){
          if(vm.data.lista[i].id === detalle.id){
            vm.data.lista[i] = detalle;
            break;
          }
        }
      });

      vm.data.detalle = {};
      vm.data.selectedBodegaOption = {};
      vm.data.selectedProductoOption = {};
    };

    vm.deleteSaldo = function(id){
      invData.deleteSaldos(id, function(data){
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
