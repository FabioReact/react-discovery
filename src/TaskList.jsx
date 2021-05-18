import { useState } from 'react'
import AddTaskForm from "./AddTaskForm"
import TaskTable from "./TaskTable"

const TaskList = () => {
	const [tasks, setTasks] = useState([])

	const newTaskAdded = (task) => {
		console.log("Depuis TaskList.jsx:", task)
		// ...spread operator
		setTasks(previousTask => [...previousTask, task])
	}

	return (
		<section>
			Liste des taches
			<AddTaskForm callback={newTaskAdded} />
			<TaskTable taskList={tasks} />
		</section>
	)
}

export default TaskList
