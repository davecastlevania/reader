app.controller('BookshelfController', ['$scope', 'books', function($scope, books) {

    // Calls the books service success function, then returns the data into $scope.myBooks, which is then usable in the bookshelf.html view
    books.success(function(data) {
        $scope.myBooks = data;
    });
}]);
