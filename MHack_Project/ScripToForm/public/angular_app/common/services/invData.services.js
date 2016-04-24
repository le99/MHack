(function() {
  angular.module('invApp')
    .service('invData', invData);

  invData.$inject = ['$http'];
  function invData ($http) {

    /**
     * Bodegas
     */
    var getBodegas = function(callback){
      $http.get('/api/bodega/').then(function(response){
        callback(response.data);
      },
      function(response){//error
        console.log(response);
      });
    };

    var addBodega = function(data, callback){
      $http.post('/api/bodega/', data).then(function(response){
        callback(response.data);
      },
      function(response){//error
        console.log(response);
      });
    };

    var updateBodega = function(data, callback){
      $http.put('/api/bodega/'+data.id, data).then(function(response){
        callback(response.data);
      },
      function(response){//error
        console.log(response);
      });
    };

    var deleteBodega = function(id, callback){
      $http.delete('/api/bodega/' + id).then(function(response){
        callback(response.data);
      },
      function(response){//error
        console.log(response);
      });
    };

    var getSaldosBodega = function(id, callback){
      $http.get('/api/bodega/'+ id +'/saldos/').then(function(response){
        callback(response.data);
      },
      function(response){//error
        console.log(response);
      });
    };

    var deleteSaldoBodega = function(idBodega, idSaldo, callback){
      $http.delete('/api/bodega/' + idBodega + '/saldos/' + idSaldo ).then(function(response){
        callback(response.data);
      },
      function(response){//error
        console.log(response);
      });
    };

    /**
     * Saldos
     */

    var getSaldos = function(callback){
      $http.get('/api/saldo/').then(function(response){
        callback(response.data);
      },
      function(response){//error
        console.log(response);
      });
    };

    var addSaldos = function(data, callback){
      $http.post('/api/saldo/', data).then(function(response){
        callback(response.data);
      },
      function(response){//error
        console.log(response);
      });
    };

    var updateSaldo = function(data, callback){
      $http.put('/api/saldo/' + data.id, data).then(function(response){
        callback(response.data);
      },
      function(response){//error
        console.log(response);
      });
    };

    var deleteSaldos = function(id, callback){
      $http.delete('/api/saldo/' + id).then(function(response){
        callback(response.data);
      },
      function(response){//error
        console.log(response);
      });
    };

    /**
     * Productos
     */

    var getProductos = function(callback){
      $http.get('/api/producto/').then(function(response){
        callback(response.data);
      },
      function(response){//error
        console.log(response);
      });
    };

    var addProducto = function(data, callback){
      $http.post('/api/producto/', data).then(function(response){
        callback(response.data);
      },
      function(response){//error
        console.log(response);
      });
    };

    var updateProducto = function(data, callback){
      $http.put('/api/producto/' + data.id, data).then(function(response){
        callback(response.data);
      },
      function(response){//error
        console.log(response);
      });
    };

    var deleteProducto = function(id, callback){
      $http.delete('/api/producto/' + id).then(function(response){
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
      getSaldosBodega: getSaldosBodega,
      deleteSaldoBodega: deleteSaldoBodega,

      getSaldos: getSaldos,
      addSaldos: addSaldos,
      updateSaldo: updateSaldo,
      deleteSaldos: deleteSaldos,

      getProductos: getProductos,
      addProducto: addProducto,
      updateProducto: updateProducto,
      deleteProducto: deleteProducto,

    };
  }

})();
