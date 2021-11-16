const TODO = "To Do";
const IN_PROGRESS = "In Progress";
const DONE = "Done";

const PROIRITY_LOW = "low";
const PRIORITY_HIGH = "high";

const list = [
  {
    id: 1,
    name: "Einkaufen",
    status: TODO,
    priority: PROIRITY_LOW,
  },
  {
    id: 2,
    name: "Sport machen",
    status: IN_PROGRESS,
    priority: PROIRITY_LOW,
  },
  {
    id: 3,
    name: "Kochen",
    status: DONE,
    priority: PRIORITY_HIGH,
  }
]

function changeStatus(taskName, status) {
  let task = list.find(item => item.name = taskName);
  task.status = status;
}

function addTask(newTaskName, priority) {
  const newTask = {
    id: list.length + 1,
    name: newTaskName,
    status: TODO,
    priority: priority,
  }
  list.push(newTask);
}

function deleteTask(deleteTaskName) {
  let indexDelete = list.findIndex(item => item.name === deleteTaskName);
  list.splice(indexDelete, 1);
}

function showList() {
  let todo = `${TODO}:\n`;
  let inProg = `${IN_PROGRESS}:\n`;
  let done = `${DONE}:\n`;
  let result = "";

  for (let i = 0; i < list.length; i++) {
    if (list[i].status == TODO) {
      todo += `${list[i].name} - priority: ${list[i].priority}\n`;
    }
  }
  for (let i = 0; i < list.length; i++) {
    if (list[i].status == IN_PROGRESS) {
      inProg += `${list[i].name} - priority: ${list[i].priority}\n`;
    }
  }
  for (let i = 0; i < list.length; i++) {
    if (list[i].status == DONE) {
      done += `${list[i].name} - priority: ${list[i].priority}\n`;
    }
  }

  console.log(todo + "\n" + inProg  + "\n" + done);
}

changeStatus("Kochen", TODO);
addTask("Auto reparieren", PRIORITY_HIGH);

showList();