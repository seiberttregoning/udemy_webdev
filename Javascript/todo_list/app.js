const todoList = []
let userTask = ''

while (userTask !== 'quit') {
    let userTask = prompt("What would you like to do? 'New' for add a task, 'List' for list all tasks, 'Delete' to delete an item, 'Quit' to quit the app.").toLowerCase();
    if (userTask === 'new') {
        let newItem = prompt("What task should be added?");
        todoList.push(newItem);
        console.log(`${newItem} has been added to your todo list.`);
    } else if (userTask === 'list') {
        console.log("The items in your list are:");
        for (let i = 0; i < todoList.length; i++) {
            console.log(`${i}: ${todoList[i]}`);
        }
    } else if (userTask === 'delete') {
        let removeIndex = parseInt(prompt("What is the number of the item you want to delete?"));
        while (!removeIndex) {
            removeIndex = parseInt(prompt("Please enter the number of the item you want to delete."))
        }
        console.log(`Deleting item: ${todoList[removeIndex]}`)
        todoList.splice(removeIndex, 1)
    } else {
        misMatch = prompt("I don't understand the task. Please hit enter and try again")
    }
}
console.log("Quitting the app")