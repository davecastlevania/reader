app.factory('books', ['$http', function($http) {
    // Uses $http.get to get the data from the provided URL. Then returns the data from it after it retrieves it.
    return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/books-api/books.json')
        .success(function(data) {
            return data;
        })
        .error(function(data) {
            return data;
        });
}]);
