app.factory('myInterceptor', function($q) {
    var interceptor = {
        'request': function(config) {
        // Successful request method
        console.log('Interceptor: Request');
        return config; // or $q.when(config);
        },
        'response': function(response) {
        // successful response
        console.log('Interceptor: Response');
        return response; // or $q.when(config);
        },
        'requestError': function(rejection) {
        // an error happened on the request
        // if we can recover from the error
        // we can return a new request
        // or promise
        console.log('Interceptor: Request Error');
        return response; // or new promise
        // Otherwise, we can reject the next
        // by returning a rejection
        // return $q.reject(rejection);
        },
        'responseError': function(rejection) {
        // an error happened on the request
        // if we can recover from the error
        // we can return a new response
        // or promise
        console.log('Interceptor: Response Error');
        return rejection; // or new promise
        // Otherwise, we can reject the next
        // by returning a rejection
        // return $q.reject(rejection);
        }
    };
    return interceptor;
});
app.config(function($httpProvider) {
    console.log("Interceptor Registered");
    $httpProvider.interceptors.push('myInterceptor');
});