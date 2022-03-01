import React from 'react'
import styled from 'styled-components'

const ui = {
  List: styled.ul`
    height: auto; 
    margin: 20px 0 0 0;
    list-style: none;
    padding: 0;
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