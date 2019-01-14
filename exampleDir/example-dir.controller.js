app.controller('expController', function($scope, $element, $attrs, $transclude, customService) {
    this.message = "In example controller: this, map as `controllerAs`";
    $scope.message = "In example controller: $scope";
    $scope.title = customService.title;

    $scope.changeTitle = function() {
        customService.title = $scope.title;
        console.log(customService.title);
    }
    console.log('Exp Controller called');
});