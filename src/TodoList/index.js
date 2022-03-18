import React from 'react'
import Skeleton from 'react-loading-skeleton';
import styled from 'styled-components'

const ui = {
  List: styled.ul`
    height: auto; 
    margin: 20px 0 0 0;
    list-style: none;
    padding: 0;
    font-family: 'Raleway', sans-serif;
    font-style: italic;
  `,
  ListTitle: styled.h2`
    text-align: center;
    font-style: normal;
    font-family: 'Raleway', sans-serif;
    text-transform: uppercase;
    margin: 0;
  `
}

function TodoList(props) {
  const renderFunc = props.children || props.render
  return (
    <>
      {
        !props.loading
          ? <ui.ListTitle>Lista de Tareas</ui.ListTitle>
          : <Skeleton width='100%' height={30} />
      }
      <ui.List>
        {props.error && props.onError()}
        {props.loading && props.onLoading()}
        {(!props.loading && !props.totalTodos) && props.onEmptyTodo()}

        {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResult(props.searchValue)}

        {(!props.loading && !props.error) && props.searchedTodos.map(renderFunc)}
      </ui.List>
    </>
  )
}

export { TodoList }