app.directive('myDirective', function() {
    return {
        restrict: 'EA', //Element, Attr, Style, Comment
        replace: true,
        template: '<p>This is a angular directive template</p>'
    }
});