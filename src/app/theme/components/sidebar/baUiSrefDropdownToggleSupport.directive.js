/**
 * @author v.lugovsky
 * created on 02.05.2016
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme.components')
      .directive('baUiSrefDropdownToggleSupport', baUiSrefDropdownToggleSupport);

  /** @ngInject */
  function baUiSrefDropdownToggleSupport($state) {
    return {
      restrict: 'A',
      link: function(scope, el, attrs) {
        var stateToWatch = scope.$eval(attrs.baUiSrefDropdownToggleSupport);

        if (_isState($state.current)) {
          el.addClass('expanded');
        }

        scope.$on('$stateChangeStart', function (event, toState) {
          if (!_isState(toState) && el.hasClass('expanded')) {
            el.slideToggle().removeClass('expanded');
          }
        });

        scope.$on('$stateChangeSuccess', function (event, toState) {
          if (_isState(toState) && !el.hasClass('expanded')) {
            el.slideToggle().addClass('expanded');
          }
        });

        function _isState(state) {
          return state && state.name.indexOf(stateToWatch) == 0;
        }
      }
    };
  }

})();
