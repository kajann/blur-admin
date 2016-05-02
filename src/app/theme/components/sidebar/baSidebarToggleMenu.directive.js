/**
 * @author v.lugovsky
 * created on 02.05.2016
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme.components')
      .directive('baSidebarToggleMenu', baSidebarToggleMenu);

  /** @ngInject */
  function baSidebarToggleMenu(sidebarService) {
    return {
      restrict: 'A',
      link: function(scope, elem) {
        elem.on('click', function() {
          scope.$apply(function() {
            sidebarService.toggleMenuCollapsed();
          });
        });
      }
    };
  }

})();
