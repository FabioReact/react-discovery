import { useState } from "react"
import styles from "./addTaskForm.module.css"

const AddTaskForm = ({ callback }) => {
	const [newTask, setNewTask] = useState('')
	const [description, setDescription] = useState('')
	const [select, setSelect] = useState('')

	const onSubmitHandler = (e) => {
		e.preventDefault()
		callback({
			newTask,
			description,
			select,
		})
	}

	return (
		<div className={`${styles['add-task-form']} min-h-screen p-0 sm:p-12`}>
			<div className="mx-auto max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
				<h1 className="text-2xl font-bold mb-8">Ajouter une tâche</h1>
				<form noValidate onSubmit={onSubmitHandler}>
					<div className="relative z-0 w-full mb-5">
						<input
							type="text"
							name="task"
							id="task"
							value={newTask}
							onChange={e => setNewTask(e.target.value)}
							placeholder=" "
							required
							className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
						/>
						<label htmlFor="task" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Nouvelle tâche</label>
						{/* <span className="text-sm text-red-600 hidden" id="error">Un nom de tâche est requis</span> */}
					</div>
		
					<div className="relative z-0 w-full mb-5">
						<input
							type="text"
							name="description"
							id="description"
							value={description}
							onChange={e => setDescription(e.target.value)}
							placeholder=" "
							className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
						/>
						<label htmlFor="description" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Description</label>
						{/* <span className="text-sm text-red-600 hidden" id="error">Description requise</span> */}
					</div>

					<div className="relative z-0 w-full mb-5">
						<select
							name="select"
							value={select}
							onChange={function (e) {setSelect(e.target.value)}}
							className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
						>
							<option value="" disabled hidden></option>
							<option value="TODO">A faire</option>
							<option value="IN_PROGRESS">En cours</option>
							<option value="DONE">Terminé</option>
						</select>
						<label htmlFor="select" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Select an option</label>
						{/* <span className="text-sm text-red-600 hidden" id="error">Option has to be selected</span> */}
					</div>
		
					<div className="flex flex-row space-x-4">
						<div className="relative z-0 w-full mb-5">
							<input
								type="text"
								name="date"
								placeholder=" "
								onClick={(e) => {
									console.log(e)
									e.target.type = "date"
								}}
								// onclick="this.setAttribute('type', 'date');"
								className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
							/>
							<label htmlFor="date" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Date</label>
							{/* <span className="text-sm text-red-600 hidden" id="error">Date is required</span> */}
						</div>
						<div className="relative z-0 w-full">
							<input
								type="text"
								name="time"
								placeholder=" "
								// onclick="this.setAttribute('type', 'time');"
								className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
							/>
							<label htmlFor="time" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Time</label>
							{/* <span className="text-sm text-red-600 hidden" id="error">Time is required</span> */}
						</div>
					</div>
		
					<button
						id="button"
						type="submit"
						className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-pink-500 hover:bg-pink-600 hover:shadow-lg focus:outline-none"
					>
						Ajouter
					</button>
				</form>
			</div>
		</div>
		
		// <script>
		// 	'use strict'
		
		// 	document.getElementById('button').addEventListener('click', toggleError)
		// 	const errMessages = document.querySelectorAll('#error')
		
		// 	function toggleError() {
		// 		// Show error message
		// 		errMessages.forEach((el) => {
		// 			el.classList.toggle('hidden')
		// 		})
		
		// 		// Highlight input and label with red
		// 		const allBorders = document.querySelectorAll('.border-gray-200')
		// 		const allTexts = document.querySelectorAll('.text-gray-500')
		// 		allBorders.forEach((el) => {
		// 			el.classList.toggle('border-red-600')
		// 		})
		// 		allTexts.forEach((el) => {
		// 			el.classList.toggle('text-red-600')
		// 		})
		// 	}
		// </script>
	)
}

export default AddTaskForm
