export default {
    //This is the factory function for posting the form info to JSON.
    tasksFactoryFunction(task, date) {
        return {
            user_id: 1,
            date: date,
            task: task,
            complete: false
        }
    },

    //This function changes "complete" to the Boolean true.
    booleanFactoryFunction(task) {
        return {
            user_id: 1,
            date: task.date,
            task: task.task,
            complete: true
        }
    }
}