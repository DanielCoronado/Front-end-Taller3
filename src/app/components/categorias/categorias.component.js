(function () {
  'use strict';

  angular
  .module('app')
  .component('categorias', {
    templateUrl: 'app/components/categorias/categorias.html',
    controller: categoriasCtrl,
    controllerAs: 'vm'
  });

  categoriasCtrl.$inject = ['CategoriasService'];

  function categoriasCtrl(CategoriasService) {
    var vm = this;

    vm.categorias = [];

    CategoriasService.query().$promise.then(function (data) {
      vm.categorias = data;
    });
  }
})();
