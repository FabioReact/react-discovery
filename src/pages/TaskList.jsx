import { useState } from 'react'
import AddTaskForm from "../components/AddTaskForm"
import TaskTable from "../components/TaskTable"

const TaskList = ({ darkMode }) => {
	const [tasks, setTasks] = useState([])

	const newTaskAdded = (task) => {
		console.log("Depuis TaskList.jsx:", task)
		// ...spread operator
		setTasks(previousTask => [...previousTask, task])
	}

	return (
		<section className={darkMode && "bg-gray-800"}>
			Liste des taches
			<AddTaskForm darkMode={darkMode} callback={newTaskAdded} />
			<TaskTable taskList={tasks} />
		</section>
	)
}

export default TaskList
