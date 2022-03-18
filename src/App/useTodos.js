import {  useState } from 'react'
import { useLocalStorage } from './useLocalStorage'

function useTodos() {
  const {
    item: todos,
    saveItem: saveTodos,
    sincronised: sincronizeTodos,
    loading,
    error
  } = useLocalStorage('TODOS_V1', [])

  const [openModal, setOpenModal] = useState(false)
  
  const [searchValue, setSearchValue] = useState('')

  const completeTodos = todos.filter(todo => !!todo.completed).length
  const totalTodos = todos.length

  let searchedTodos = []

  if (!searchValue.length >= 1) {
    searchedTodos = todos
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText)
    })
  }

  const toggleCompleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed
    saveTodos(newTodos)
  }

  const addTodo = (text, date) => {
    const newTodos = [...todos]
    newTodos.push({
      completed: false,
      text,
      date
    })
    saveTodos(newTodos)
  }

  const deleteCompleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }

  return {
      loading,
      error,
      totalTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      completeTodos,
      toggleCompleteTodo,
      addTodo,
      deleteCompleteTodo,
      openModal,
      setOpenModal,
      sincronizeTodos
    }
}

export { useTodos }