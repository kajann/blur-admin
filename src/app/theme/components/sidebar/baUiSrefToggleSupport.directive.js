/**
 * @author v.lugovsky
 * created on 29.04.2016
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme.components')
      .directive('baUiSrefToggleSupport', baUiSrefToggleSupport);

  /** @ngInject */
  function baUiSrefToggleSupport() {
    return {
      restrict: 'A',
      link: function(scope, el) {
        el.on('click', function() {
          el.next().slideToggle().toggleClass('expanded');
        });
      }
    };
  }

})();
