app.controller('ChapterController', ['$scope', 'books', '$routeParams', function($scope, books, $routeParams) {

    // Calls the books service success function, then returns the data
    books.success(function(data) {

        // Finds the correct book, using $routeParams, which is able to pass in the :bookId (which is set in the app.js file's config)
        $scope.book = data[$routeParams.bookId];

        // This looks into the book we found above in line 6, then looks inside that book's chapters array, and we are able to use $routeParams to pass in which chapter we'd like to view. We set that up with :chapterId in app.js in its config section. This whole line is drilling into the data object, selects a particular book, then a particular chapter, then puts that in the $scope.chapter variable. As we change the URL, this variable updates accordingly.
        $scope.chapter = $scope.book.chapters[$routeParams.chapterId];


        // If there no more chapters left, go back to the bookshelf view. The minus one is needed since :chapterId starts at 0, and .length starts at 1.
        if ($routeParams.chapterId >= $scope.book.chapters.length - 1) {
            $scope.nextChapterIndex = "#";
        }
    });

    // Using these properties to create the URLs in line 1 and line 10 of view/chapter.html. parseInt() makes sure the result is a number and not a string.
    $scope.currentBookIndex = parseInt($routeParams.bookId);
    $scope.currentChapterIndex = parseInt($routeParams.chapterId);
    $scope.nextChapterIndex = $scope.currentChapterIndex + 1;
}]);
