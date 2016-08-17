var myApp = angular.module('myApp', []);

myApp.controller('dropdownCtrl', ['$scope', function($scope) {
  $scope.monthShowArray = [{
    'name': '周一',
    'date': '2016-08-08'
  }, {
    'name': '周二',
    'date': '2016-08-09'
  }, {
    'name': '周三',
    'date': '2016-08-10'
  }, {
    'name': '周四',
    'date': '2016-08-11'
  }, {
    'name': '周五',
    'date': '2016-08-12'
  }, {
    'name': '周六',
    'date': '2016-08-13'
  }, {
    'name': '周日',
    'date': '2016-08-14'
  }]

  //选中的日期
  $scope.selectedDate = $scope.monthShowArray[0];
}])

myApp.directive('dropDown', function($rootScope) {
  return {
    restrict: 'E',
    templateUrl: 'tpl.html',
    scope: {
      list: '=',
      selected: '=',
      property: '@'
    },
    link: function(scope, element, attrs) {
      scope.listVisible = false;

      scope.show = function() {
        event.stopPropagation();
        scope.listVisible = !scope.listVisible;
      };

      scope.select = function(item) {
        scope.selected = item;
      };

      scope.isSelected = function(item) {
        return scope.selected[scope.property] === item[scope.property]
      }

      angular.element(document).on("click", function(e) {
        $rootScope.$broadcast("documentClicked", angular.element(e.target));
      });

      $rootScope.$on("documentClicked", function(inner, target) {
        if (!$(target[0]).is(".dropdown-display.activated") && !$(target[0]).parents(".dropdown-display.activated").length > 0)
          scope.$apply(function() {
            scope.listVisible = false;
          });
      });
    }
  }
});
