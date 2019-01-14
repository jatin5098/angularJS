app.directive('expDirective', function() {
    return {
        restrict: 'EA',
        replace: false,
        transclude: true,
        scope: {
            textBinding: '@',
            msg: '=',
            printDate: '&'
        }, 
        //false: default, true, isolated
        /**
         *  
            1. "@"   (  Text binding / one-way binding )
            2. "="   ( Direct model binding / two-way binding )
            3. "&"   ( Behaviour binding / Method binding  )
         */
        templateUrl: './exampleDir/example-dir.directive.html',
        controllerAs: 'expCtrl',
        controller: 'expController',
        compile: function(tElement, tAttrs, transclude) {
            console.log('Directive: Compiled');
            return function postLink() {
                console.log('expController: Linked');
            }
        },
        link: function(scope, iElement, iAttrs) {
            console.log('expController: Linked');
        }
    }
});