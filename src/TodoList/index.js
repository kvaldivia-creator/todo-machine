import React from 'react'
import styled from 'styled-components'

const ui = {
  List: styled.ul`
    height: 400px;
    margin: 20px 0 0 0;
    list-style: none;
    padding: 0;
    overflow: auto;

    ::-webkit-scrollbar {
      display: none;
    }

    @media (max-width: 376px) {
      height: 500px;
    }
  `
}

function TodoList(props) {
  return (
    <>
      <ui.List>
        {props.children}
      </ui.List>
    </>
  )
}

export { TodoList }