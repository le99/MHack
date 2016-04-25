(function(){

  angular.module('invApp')
    .controller('productoCtrl', productoCtrl);

  productoCtrl.$inject = ['invData'];
  function productoCtrl(invData){
    var vm = this;
    vm.data = {};

    invData.getProductos(function(data){
      vm.data.lista = data;
    });

    vm.data.create = true;
    vm.data.detalle = {};
    vm.addProducto = function(){
      vm.data.create = true;
      vm.data.detalle = {};
    };

    vm.editProducto = function(detalle){
      vm.data.create = false;
      vm.data.detalle = {};
      vm.data.detalle.id = detalle.id;
      vm.data.detalle.nombre = detalle.nombre;
      vm.data.detalle.descripcion = detalle.descripcion;
    };

    vm.crearProducto = function(){
      vm.data.create = false;
      var detalle = angular.copy(vm.data.detalle);

      invData.addProducto(detalle, function(detalle){
          vm.data.lista.push(detalle);
      });

      vm.data.detalle = {};
    };

    vm.updateProducto = function(){
      vm.data.create = false;
      var detalle = angular.copy(vm.data.detalle);

      invData.updateProducto(detalle, function(detalle){
        for(var i = 0; i < vm.data.lista.length; i++){
          if(vm.data.lista[i].id === detalle.id){
            vm.data.lista[i] = detalle;
            break;
          }
        }
      });

      vm.data.detalle = {};
    };

    vm.deleteProducto = function(id){
      invData.deleteProducto(id, function(data){
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
