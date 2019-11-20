import htmlMaker from "./htmlMaker.js"
import taskEventListeners from "./eventListeners.js";
import API from "./data.js";

const taskDomRenderers = {
    //Renders form to DOM
    taskFormRender() {
        let taskContainer = document.querySelector("#tasks")
        taskContainer.innerHTML = htmlMaker.taskHtmlFormMaker()
        taskEventListeners.taskSubmitButtonEventListener()
    },
    //Renders task lists to DOM
    taskRender(taskObj) {
        let taskString = ""
        let taskRenderContainer = document.querySelector("#tasks-rendered")
        taskString = htmlMaker.taskListRenderer(taskObj)
        // console.log(taskString)
        taskRenderContainer.innerHTML += taskString
    },
    //When user clicks Edit, GETs info and puts it in form fields.
    taskEditEntryToForm(taskObj) {
        scroll(0, 0)
        let hiddenId = document.querySelector("#formId")
        let dateInput = document.querySelector("#date")
        let taskInput = document.querySelector("#text")
        API.taskToEdit(taskObj)
            .then(returnedTask => {
                console.log("RETURNED TASK ", returnedTask)
                hiddenId.value = returnedTask.id
                dateInput.value = returnedTask.date
                taskInput.value = returnedTask.task
            })


    }
}

export default taskDomRenderers