import { useReducer } from "react"
import { v4 as uuidv4 } from 'uuid';
import styles from "./addTaskForm.module.css"

const NAME_ADDED = "NAME_ADDED"
const DESC_ADDED = "DESC_ADDED"
const DEADLINE = "DEADLINE"
const ERRORS = "ERRORS"

const reducer = (state, action) => {
	switch (action.type) {
		case NAME_ADDED:
			return {
				...state,
				newTask: action.value,
				newTaskError: false,
			}
		case DESC_ADDED: 
			return {
				...state,
				description: action.value,
			}
		case "selectAdded": 
			return {
				...state,
				select: action.value,
				selectError: false,
			}
		case DEADLINE: 
			return {
				...state,
				deadline: action.value,
				deadlineError: false,
			}
		case ERRORS: {
			return {
				...state,
				...action.payload
			}
		}
		default:
			throw new Error("Action type unknown")
	}
}

const AddTaskForm = ({ darkMode, callback }) => {
	const initialState = {
		newTask: '',
		newTaskError: false,
		description: '',
		select: '',
		selectError: false,
		deadline: '',
		deadlineError: false,
	}

	const [state, dispatch] = useReducer(reducer, initialState)

	const onSubmitHandler = (e) => {
		e.preventDefault()
		if (!state.newTask || !state.select || !state.deadline) {
			dispatch({type: ERRORS, payload: {
				newTaskError: !state.newTask,
				selectError: !state.select,
				deadlineError: !state.deadline,
			}})
			return
		}
		callback({
			id: uuidv4(),
			name: state.newTask,
			status: state.select,
			description: state.description,
			deadline: state.deadline,
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
							value={state.newTask}
							onChange={e => dispatch({type: NAME_ADDED, value: e.target.value})}
							placeholder=" "
							className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
						/>
						<label htmlFor="task" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Nouvelle tâche</label>
						{state.newTaskError && <span className="text-sm text-red-600">Un nom de tâche est requis</span>}
					</div>
		
					<div className="relative z-0 w-full mb-5">
						<input
							type="text"
							name="description"
							id="description"
							value={state.description}
							onChange={e => dispatch({type: DESC_ADDED, value: e.target.value})}
							placeholder=" "
							className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
						/>
						<label htmlFor="description" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Description</label>
						{/* <span className="text-sm text-red-600">Description requise</span> */}
					</div>

					<div className="relative z-0 w-full mb-5">
						<select
							name="select"
							value={state.select}
							onChange={e => dispatch({type: 'selectAdded', value: e.target.value})}
							className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
						>
							<option value="" disabled hidden></option>
							<option value="TODO">A faire</option>
							<option value="IN_PROGRESS">En cours</option>
							<option value="DONE">Terminé</option>
						</select>
						<label htmlFor="select" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Statut de la tâche</label>
						{state.selectError && <span className="text-sm text-red-600">Un statut doit être sélectionné</span>}
					</div>
		
					<div className="flex flex-row space-x-4">
						<div className="relative z-0 w-full mb-5">
							<input
								type="text"
								name="date"
								id="deadline"
								placeholder=" "
								value={state.deadline}
								onClick={(e) => {
									e.target.type = "date"
								}}
								onChange={e => dispatch({type: DEADLINE, value: e.target.value})}
								className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
							/>
							<label htmlFor="deadline" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Deadline</label>
							{state.deadlineError && <span className="text-sm text-red-600">Date requise</span>}
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

	)
}

export default AddTaskForm
