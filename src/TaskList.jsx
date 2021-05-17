import { useState } from 'react'
import AddTaskForm from "./AddTaskForm";
import { Task } from './Task'

const TaskList = () => {
	const [tasks, setTasks] = useState([])

	const newTaskAdded = (task) => {
		console.log("Depuis TaskList.jsx:", task)
	}

	return (
		<section>
			Liste des taches
			<AddTaskForm callback={newTaskAdded} />
			<ul>
				{tasks.map(task => (
					<Task
						key={task.id}
						nom={task.name}
						statut={task.status}
						description={task.description}
					/>
				))}
			</ul>
		</section>
	)
}

export default TaskList
