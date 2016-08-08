var myApp = angular.module('myApp',[]);

myApp.controller('dropdownCtrl', ['$scope','$rootScope', function($scope, $rootScope) {
  $scope.listVisible = false;
  $scope.isPlaceholder = true;                                 
                                  
  $scope.show = function() {
    event.stopPropagation();
    $scope.listVisible = !$scope.listVisible;
  };
  $scope.select = function(item) {
    $scope.selectedDate = item;
  };
  angular.element(document).on("click", function(e) {
    $rootScope.$broadcast("documentClicked", angular.element(e.target));
  });
                                  
  $rootScope.$on("documentClicked", function(inner, target) {
      if (!$(target[0]).is(".dropdown-display.activated") && !$(target[0]).parents(".dropdown-display.activated").length > 0)
          $scope.$apply(function() {
            $scope.listVisible = false;
          });
      });
                                         
   $scope.filter = {};

    $scope.monthShowArray = [{
      'name': '周一',
      'date':'2016-08-08'
    },{
      'name': '周二',
      'date':'2016-08-09'
    },{
      'name': '周三',
      'date':'2016-08-10'
    }]

    //选中的日期
    $scope.selectedDate = $scope.monthShowArray[0];                             
}]);