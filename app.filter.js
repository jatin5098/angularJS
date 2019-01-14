app.filter('upperCase', function() {
    return function(item) {
        return item.toUpperCase();
    }
});