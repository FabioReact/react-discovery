import { createContext } from 'react'

// Etape 1: création de mon context - la valeurs ici ne sont pas les valeurs par défaut, mais sont utile pour l'autocompletion sur VSCode
// Le contexte peut être un number/boolean/arrray/object...
const authContext = createContext({
	connected: false,
	login: () => {},
	logout: () => {},
})

export default authContext