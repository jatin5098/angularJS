app.controller('myCtrl', function($scope, APP_NAME, globalSetting, CONFIG, $http) {
    $scope.welcomeMsg = "Welcome to AngularJS 1.x";
    $scope.message = "This msg is passed to directive through attribute";
    $scope.printDate = function() {
        console.log(new Date());
        console.log(globalSetting.appName);
        console.log(CONFIG.appName);
        console.log(APP_NAME);

        $scope.$broadcast('custom-event', {
            data: 'Custom event broadcasted'
        });
        
    $http
        .get('http://time.jsontest.com')
        .then(function(data) {
            console.log(data);
        });
    };
    
    $scope.$on('custom-event', function(evt, msg) {
        console.log(msg.data);
    });

    $scope.$watch('message', function(newValue, oldValue) {
        if (newValue !== oldValue) {
            console.log(newValue);
        }
    });

    
});