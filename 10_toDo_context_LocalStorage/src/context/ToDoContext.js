import {useContext, createContext} from 'react'

export const TodoContext = createContext({
      todos:[
          {
            id: 1,
            toDo: 'Msg',
            completed : false
          },
      ], 
            addTodo: (todo) => {},
            deleteTodo: (id) =>{},
            updateTodo: (id ,todo) => {},
            toggleChecked :(id) => {}

      
})

export const TodoContextProvider = TodoContext.Provider

export const useToDo = () => {
      return useContext(TodoContext)
}