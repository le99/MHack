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
    
		vm.data.selectedIdProductoOption = {};
    
		invData.getProductos(function(data){
			vm.data.idProductos = data;
		});
    
		vm.data.selectedIdBodegaOption = {};
    
		invData.getBodegas(function(data){
			vm.data.idBodegas = data;
		});

    vm.data.create = true;
    vm.data.detalle = {};
    
    
    vm.addSaldoBodega = function(){
		vm.data.create = true;
		vm.data.detalle = {};
    
		vm.data.selectedIdProductoOption = {};    
		vm.data.selectedIdBodegaOption = {};    
    };

    vm.editSaldoBodega = function(detalle){
      vm.data.create = false;
      vm.data.detalle = angular.copy(detalle);    
 
      vm.data.selectedIdProductoOption = _.find(vm.data.idProductos, function(data){
        return data.id === vm.data.detalle.idProducto;
      });
 
      vm.data.selectedIdBodegaOption = _.find(vm.data.idBodegas, function(data){
        return data.id === vm.data.detalle.idBodega;
      });
    };

		vm.crearSaldoBodega = function(){
			vm.data.create = false;
			var detalle = angular.copy(vm.data.detalle);
       
			detalle.idProducto = vm.data.selectedIdProductoOption.id;       
			detalle.idBodega = vm.data.selectedIdBodegaOption.id;      

			invData.addSaldoBodega(detalle, function(detalle){
          		vm.data.lista.push(detalle);
			});

			vm.data.detalle = {};
    
			vm.data.selectedIdProductoOption = {};    
			vm.data.selectedIdBodegaOption = {};
    };

		vm.updateSaldoBodega = function(){
			vm.data.create = false;
			var detalle = angular.copy(vm.data.detalle);
       
			detalle.idProducto = vm.data.selectedIdProductoOption.id;       
			detalle.idBodega = vm.data.selectedIdBodegaOption.id;       

			invData.updateSaldoBodega(detalle, function(detalle){
				for(var i = 0; i < vm.data.lista.length; i++){
					if(vm.data.lista[i].id === detalle.id){
						vm.data.lista[i] = detalle;
						break;
					}
				}
			});

			vm.data.detalle = {};
    
			vm.data.selectedIdProductoOption = {};    
			vm.data.selectedIdBodegaOption = {};    
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
