//this is an array of strings

let TaskArray = [];

//Created an addTask function

let addTask = (task) => {
    TaskArray.push(task);
    console.log("Task: "+task+" has been added to our list");
    return TaskArray.lenght;
}
let listAllTasks = ()=>{
    //for(let i=0;i<TaskArray.lenght;i++){
    //    console.log(TaskArray[i]);
    //}
}
//delete task function

let deleteTask = (task)=>{
    let index = taskArray.indexOf(task);
    if(index > -1){
        taskArray.splice(index, 1);
        console.log("Task: "+task+" has been added to our list")
    }
}

//list of all the tasks

addTask("Go Gym");
addTask("Study");
addTask("learn alphabet");


listAllTasks();

