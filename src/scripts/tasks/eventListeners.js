import API from "./data"
import factoryFunctionMaker from "./factoryFunctionMaker"
import taskDomRenderers from "./domRenderer.js"

export default {
    //This method puts an event listener on the submit button and either POSTs or PUTs, depending on the sitation.
    taskSubmitButtonEventListener() {
        let taskSubmitButton = document.querySelector("#submit")
        taskSubmitButton.addEventListener("click", () => {
            const hiddenFieldId = document.getElementById("formId").value
            // console.log("HIDDENFIELDID", hiddenFieldId)
            if (hiddenFieldId !== "") {
                let dateInput = document.querySelector("#date").value
                let taskInput = document.querySelector("#text").value
                // console.log("TASK INPUT", taskInput)
                // console.log("DATE INPUT", dateInput)
                let editedFactoryFunction = factoryFunctionMaker.tasksFactoryFunction(taskInput, dateInput)
                // console.log("EDITED FACTORY FUNCTION", editedFactoryFunction)
                API.taskToPut(hiddenFieldId, editedFactoryFunction)
                location.reload()
            } else {
                const entryField = document.querySelector("#text").value
                const dateField = document.querySelector("#date").value
                let taskObject = factoryFunctionMaker.tasksFactoryFunction(entryField, dateField)
                // console.log("TASK OBJECT", taskObject)
                API.postTaskData(taskObject)
                location.reload()
            }
        })
    },
    //This function changes the value of "completed" to true in JSON.
    taskCheckboxEventListener() {
        //TODO: target checkbox using some value--name, value, etc.
        //TODO: add class name if checked so I can target with CSS
        //TODO: PUT to DOM to change completed to true
        const checkboxSection = document.querySelector("#tasks-rendered")
        checkboxSection.addEventListener("click", () => {
            console.log("IS THIS HITTING THE FUNCTION")
            // const hiddenFieldId = document.getElementById("formId").value
            if (event.target.id.startsWith("checkbox--")) {
                let taskToCheck = event.target.id.split("--")[1]
                console.log(taskToCheck)
                // let dateInput = document.querySelector("#date").value
                // let taskInput = document.querySelector("#text").value
                API.taskToEdit(taskToCheck)
                    .then(task => {

                        let booleanFactoryFunction = factoryFunctionMaker.booleanFactoryFunction(task)
                        // const booleanFactoryFunction = {
                        //         user_id: 1,
                        //         date: task.date,
                        //         task: task.task,
                        //         complete: true
                        //     }
                        console.log(booleanFactoryFunction)

                        API.taskToPut(taskToCheck, booleanFactoryFunction)
                        location.reload()
                    })
                // console.log(dateInput)
                // let booleanFactoryFunction = factoryFunctionMaker.booleanFactoryFunction(taskInput, dateInput)

                // let checkbox = document.querySelector("#")
                // if (checkbox.checked === true) {
            }
        })
    },
    //Listens for user to click the "Delete" button and deletes that particular task.
    taskDeleteEditButtonEventListener() {
        const taskDeleteSection = document.querySelector("#tasks-rendered")
        // console.log("TASK DELETE", taskDeleteSection)
        taskDeleteSection.addEventListener("click", event => {
            if (event.target.id.startsWith("deleteTask--")) {
                const taskToDelete = event.target.id.split("--")[1]
                console.log("TASK TO DELETE", taskToDelete)
                API.deleteTaskData(taskToDelete)
                location.reload()
            } else if (event.target.id.startsWith("editTask--")) {
                const taskToEdit =
                    event.target.id.split("--")[1]
                console.log("TASK TO EDIT ", taskToEdit)
                taskDomRenderers.taskEditEntryToForm(taskToEdit)
            }
        })
    }
}
//Didn't get to session storage.
//    let sessionId = document.getElementbyId("submit")
//    console.log(sessionId)
//    sessionId = sessionStorage.getItem("activeUser")