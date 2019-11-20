

export default {
    //This method is the task form and gets rendered upon page load.
    taskHtmlFormMaker () {
        return `
<form id="messages-Form">
<h1>To Do List</h1>
<input type="hidden" id="formId" value = ""/>
<form id="taskForm">
<label for="text">New Task:</label>
<br>
<input type="text" name="text" id="text" placeholder="eg. play a round of golf">
<br>
<label for="date">To Be Completed By:</label>
<br>
<input type="date" name="date" id="date">
<br>
</form>
<input type="submit" name="submit" id="submit">
    `
    },
//This method puts each task in a proper form for the DOM and is rendered upon page load.
    taskListRenderer (taskObj) {
        return `
<article id="tasks--${taskObj.id}">
<input type="checkbox" class="checkbox" id="checkbox--${taskObj.id}" name="checkbox"><span>Done!</span> 
    <p>Task: ${taskObj.task}</p>
    <p>To be completed by: ${taskObj.date}</p>
    <button id="editTask--${taskObj.id}" name="edit">Edit</button>
    <button id="deleteTask--${taskObj.id}" name="delete">Delete</button>
</article>
    `
  }
}