app.service('toDoListService', function(){
  var tasks = [];
  var tasksCounter = {
  	taskCount: 0
  }

  var addItem = function (newTask) {

  	tasks.push(newTask);
  	tasksCounter.taskCount += 1;
  console.log(tasksCounter.taskCount)
  }

  var removePost = function (index) {
  	tasks.splice([index], 1);
  	tasksCounter.taskCount -= 1;

  }
  return {tasksList: tasks, addItem: addItem, removePost: removePost, tasksCounter: tasksCounter}
});