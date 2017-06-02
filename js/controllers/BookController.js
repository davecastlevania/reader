app.controller('BookController', ['$scope', 'books', '$routeParams', function($scope, books, $routeParams) {
    // Calls the books success function, then uses the $routeParams from ngRoute to get the :bookId, which is part of the route in the app.js config. It is able to pass the :bookId, which lets us select the correct piece of data, then we put that in $scope.books.
    books.success(function(data) {
        $scope.book = data[$routeParams.bookId];
    });

    // Using this property to create the URL in line 9 in views/book.html
    $scope.currentBookIndex = parseInt($routeParams.bookId);

}]);
