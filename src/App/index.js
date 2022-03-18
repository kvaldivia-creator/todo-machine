import React from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import styled from 'styled-components';
import { CreateTodoButton } from '../CreateTodoButton/index.';
import { Modal } from '../Modal';
import { useTodos } from './useTodos';
import { TodoCounter } from '../TodoCounter';
import { TodoForm } from '../TodoForm';
import { TodoHeader } from '../TodoHeader';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { TodoSearch } from '../TodoSearch';
import { ChangeAlertWithStorageListener } from '../ChangeAlert';

const ui = {
  Main: styled.main`
    width: 100%;
    min-height: 100vh;
    background: #151D3B;
    color: #fff;
    position: relative;
    `,
  Container: styled.div`
    min-height: calc(100vh - 40px);
    padding: 20px;
    margin: 0 auto;
    
    @media (min-width: 1280px) {
      width: 360px;
    }
  `
}

function App() {
  const { 
    error, 
    loading,
    searchedTodos,
    toggleCompleteTodo,
    deleteCompleteTodo,
    openModal,
    setOpenModal,
    totalTodos, 
    completeTodos,
    searchValue,
    setSearchValue,
    addTodo,
    sincronizeTodos
  } = useTodos()
  return (
    <ui.Main>
      <ui.Container>
        <TodoHeader loading={loading}>
          <TodoCounter
            totalTodos={totalTodos} 
            completeTodos={completeTodos}
          />
          <TodoSearch 
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </TodoHeader>
        
        <TodoList 
          error={error}
          loading={loading}
          totalTodos={totalTodos}
          searchedTodos={searchedTodos}
          searchValue={searchValue}
          onError={() => <p>Hubo un error!!!</p>}
          onLoading={() => <Skeleton height='70px' width="100%" style={{marginBottom: '20px'}} />}
          onEmptyTodo={() => <p>Crea tu primer Todo</p>}
          onEmptySearchResult={(searchText) => <p>No hay resultados para {searchText}</p>}
          render={todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              date={todo.date}
              completed={todo.completed}
              onComplete={() => toggleCompleteTodo(todo.text)}
              onDelete= {() => deleteCompleteTodo(todo.text)}
            /> 
          )}
        >
          
        </TodoList>
        {!!openModal && (
          <Modal>
            <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
          </Modal>
        )}
        <CreateTodoButton setOpenModal={setOpenModal} openModal={openModal} />

        <ChangeAlertWithStorageListener sincronize={sincronizeTodos} />
      </ui.Container>
    </ui.Main>
  )
}

export { App }
