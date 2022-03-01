import React, { useContext } from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import styled from 'styled-components';
import { CreateTodoButton } from '../CreateTodoButton/index.';
import { Modal } from '../Modal';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoForm } from '../TodoForm';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { TodoSearch } from '../TodoSearch';

const ui = {
  Main: styled.main`
    width: 100%;
    min-height: 100vh;
    background: #151D3B;
    color: #fff;
    `,
  Container: styled.div`
    position: relative;
    min-height: calc(100vh - 40px);
    padding: 20px;
    margin: 0 auto;
  `
}

function AppUI() {
  const { 
    error, 
    loading,
    searchedTodos,
    toggleCompleteTodo,
    deleteCompleteTodo,
    openModal,
    setOpenModal
  } = useContext(TodoContext)
  return (
    <ui.Main>
      <ui.Container>
        <TodoCounter />
        <TodoSearch />
        <TodoList>
          {error && <p>Hubo un error!!!</p>}
          {(!loading && !searchedTodos.length) && <p>Crea tu primer Todo</p>}
          {
            !loading
             ? <>
                { searchedTodos.map(item => (
                    <TodoItem
                      key={item.text}
                      text={item.text}
                      completed={item.completed}
                      onComplete={() => toggleCompleteTodo(item.text)}
                      onDelete= {() => deleteCompleteTodo(item.text)}
                    /> 
                  ))
                }
                </>
              : (
                <div>
                  {new Array(2).fill().map((_el, index) => (
                    <Skeleton height='70px' width="100%" key={index} style={{marginBottom: '20px'}} />
                    ))
                  }
                </div>
              )
          }
        </TodoList>
        {
          !!openModal && (<Modal>
            <TodoForm />
          </Modal>)
        }
        
        <CreateTodoButton setOpenModal={setOpenModal} openModal={openModal} />
      </ui.Container>
    </ui.Main>
  )
}

export { AppUI }
