export function Header(props) {
    const { todos } = props
    const todosLength = todos.filter(todo => !todo.complete).length
    
    const isTasksPlural = todos.length != 1
    const TaskOrTasks = isTasksPlural ? 'tasks' : 'task'

    return (
        <header>
            <h1 className="text-gradient">You have {todosLength} open {TaskOrTasks}.</h1>
        </header>
    )
}