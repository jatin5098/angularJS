app.config(function ($provide) {
    $provide.constant('APP_NAME', 'AngularJS App - $provide.constant');

    $provide.provider('globalSetting', function() {
        this.$get = function() {
            return {
                appName: 'AngularJS App - $provide.provider, As constructor'
            }
        }
    });

    $provide.provider('CONFIG', {
        $get: function () {
            var appname = "Angular App -- $provide.provider, As factory_method";
            return {
                appName: appname
            };
        }
    })
});
