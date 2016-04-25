(function() {
  angular.module('invApp')
    .service('invData', invData);

  invData.$inject = ['$http'];
  function invData ($http) {

    /**
     * Bodega
     */
    var getBodegas = function(callback){
      $http.get('/api/Bodega/').then(function(response){
        callback(response.data);
      },
      function(response){//error
        console.log(response);
      });
    };

    var addBodega = function(data, callback){
      $http.post('/api/Bodega/', data).then(function(response){
        callback(response.data);
      },
      function(response){//error
        console.log(response);
      });
    };

    var updateBodega = function(data, callback){
      $http.put('/api/Bodega/'+data.id, data).then(function(response){
        callback(response.data);
      },
      function(response){//error
        console.log(response);
      });
    };

    var deleteBodega = function(id, callback){
      $http.delete('/api/Bodega/' + id).then(function(response){
        callback(response.data);
      },
      function(response){//error
        console.log(response);
      });
    };

    /**
     * Producto
     */
    var getProductos = function(callback){
      $http.get('/api/Producto/').then(function(response){
        callback(response.data);
      },
      function(response){//error
        console.log(response);
      });
    };

    var addProducto = function(data, callback){
      $http.post('/api/Producto/', data).then(function(response){
        callback(response.data);
      },
      function(response){//error
        console.log(response);
      });
    };

    var updateProducto = function(data, callback){
      $http.put('/api/Producto/'+data.id, data).then(function(response){
        callback(response.data);
      },
      function(response){//error
        console.log(response);
      });
    };

    var deleteProducto = function(id, callback){
      $http.delete('/api/Producto/' + id).then(function(response){
        callback(response.data);
      },
      function(response){//error
        console.log(response);
      });
    };

    /**
     * SaldoBodega
     */
    var getSaldoBodegas = function(callback){
      $http.get('/api/SaldoBodega/').then(function(response){
        callback(response.data);
      },
      function(response){//error
        console.log(response);
      });
    };

    var addSaldoBodega = function(data, callback){
      $http.post('/api/SaldoBodega/', data).then(function(response){
        callback(response.data);
      },
      function(response){//error
        console.log(response);
      });
    };

    var updateSaldoBodega = function(data, callback){
      $http.put('/api/SaldoBodega/'+data.id, data).then(function(response){
        callback(response.data);
      },
      function(response){//error
        console.log(response);
      });
    };

    var deleteSaldoBodega = function(id, callback){
      $http.delete('/api/SaldoBodega/' + id).then(function(response){
        callback(response.data);
      },
      function(response){//error
        console.log(response);
      });
    };


    return {
      getBodegas: getBodegas,
      addBodega: addBodega,
      updateBodega: updateBodega,
      deleteBodega: deleteBodega,
      
      getProductos: getProductos,
      addProducto: addProducto,
      updateProducto: updateProducto,
      deleteProducto: deleteProducto,
      
      getSaldoBodegas: getSaldoBodegas,
      addSaldoBodega: addSaldoBodega,
      updateSaldoBodega: updateSaldoBodega,
      deleteSaldoBodega: deleteSaldoBodega,
      
    };
  }

})();
