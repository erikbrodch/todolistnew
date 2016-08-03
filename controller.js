app.controller('toDoCntrl', function($scope, toDoListService) {

  	$scope.tasksList = toDoListService.tasksList
  	$scope.tasksCounter = toDoListService.tasksCounter
  	$scope.addItem = function() {

  		var newTask = $scope.userInput

	  	toDoListService.addItem(newTask)
	  	console.log($scope.tasksCounter)

  }
	$scope.removePost = function(index) {

		toDoListService.removePost(index)
	}
});

