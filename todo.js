var todos = ["walk chorizo", "clean house"];

var input = prompt("What would you like to do?")

function listTodos(){
	console.log("*********");
	todos.forEach(function(todo, i){
		console.log(i + " : " + todo);
	})
	console.log("*********");
}

function addTodos(){
	var newTodo = prompt("Enter new todo");
	todos.push(newTodo);
	console.log(todos)
}

function deleteTodos(){
	var index = prompt("Enter index of todo to delete:");
	todos.splice(index,1);
	console.log("Deleted Todo.")
}

while (input != "quit") {
	if (input === "list") {
		listTodos();
	} else if (input === "new") {
		addTodos();
	} else if (input === "delete") {
		deleteTodos();
	}
	var input = prompt("What would you like to do?")
}

console.log("Ok, you've quit the app.")