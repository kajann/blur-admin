/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme.components')
    .controller('SidebarCtrl', SidebarCtrl);

  /** @ngInject */
  function SidebarCtrl($scope, $timeout, $state, layoutSizes, sidebarService, $element) {

    $scope.menuItems = sidebarService.getMenuItems();
    $scope.menuHeight = $element[0].childNodes[0].clientHeight - 84;
    $scope.defaultSidebarState = $scope.menuItems[0].stateRef;

    $scope.menuExpand = function () {
      $scope.$isMenuCollapsed = false;
    };

    $scope.menuCollapse = function () {
      $scope.$isMenuCollapsed = true;
    };


    // watch window resize to change menu collapsed state if needed
    $(window).resize(function () {
      var isMenuShouldCollapsed = $(window).width() <= layoutSizes.resWidthCollapseSidebar;
      var scopeApplied = false;
      if ($scope.isMenuShouldCollapsed !== isMenuShouldCollapsed) {
        $scope.$apply(function () {
          $scope.menuHeight = $element[0].childNodes[0].clientHeight - 84;
          $scope.$isMenuCollapsed = isMenuShouldCollapsed;
          scopeApplied = true;
        });
      }
      if (!scopeApplied) {
        $scope.$apply(function () {
          $scope.menuHeight = $element[0].childNodes[0].clientHeight - 84;
        });
      }
      $scope.isMenuShouldCollapsed = isMenuShouldCollapsed;

    });

    window.onclick = function () {
      $timeout(function () {

        if ($scope.anySlideRight) {
          $scope.menuItems.map(function (val) {
            return val.slideRight = false;
          });
          $scope.anySlideRight = false;
        }

      }, 10);
    };

    $scope.hoverItem = function ($event) {
      $scope.showHoverElem = true;
      $scope.hoverElemHeight =  $event.currentTarget.clientHeight;
      var menuTopValue = 66;
      $scope.hoverElemTop = $event.currentTarget.getBoundingClientRect().top - menuTopValue;
    };
  }
})();