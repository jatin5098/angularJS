app.directive('expReqDirective', function(customService) {
    return {
        restrict: 'EA',
        scope: {},
        template: '<p>Directive having Require Attribute' + customService.title +'</p>',
        require: '^?expDirective',
        // compile: function(tElement, tAttrs, transclude) {
        //     console.log('Directive: Compiled');
        // },
        // controller: function() {
        //     console.log('Directive: Controller Called');
        // },
        // link: function() {
        //     console.log('expReqDirective: Linked');
        // }
    }
});