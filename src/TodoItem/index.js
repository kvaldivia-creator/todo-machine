import React from 'react'
import styled from 'styled-components'
import { FaCheck } from 'react-icons/fa'
import { FaTrash } from 'react-icons/fa'

const ui = {
  Item: styled.li`
    height: 50px;
    font-size: 20px;
    padding: 12px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${({ completed }) => completed ? '#D1D1D1' : '#F8DF8B'};
    border: none;
    border-radius: 10px;
    margin-bottom: 20px;
    color: #000;

    :last-child {
      margin-bottom: 0;
    }
  `,
  Span: styled.span`
    width: 60%;
    text-decoration: ${({ completed }) => completed ? 'line-through' : 'none' };
  `,
  Button: styled.button`
    background-color: transparent;
    outline: none;
    border: none;
    font-size: 20px;
    padding: 0;
    cursor: pointer;
    display: flex;

    :hover {
      color: #D82148;
    }
  `
}

function TodoItem({ onDelete, onComplete, completed, text, loading }) {
  return (
    <>
      <ui.Item completed={completed}>
        <ui.Button onClick={onComplete}> 
          <FaCheck color={completed ? '#6EBF8B' : '#000000'} /> 
        </ui.Button>
        <ui.Span completed={completed} >{text}</ui.Span>
        <ui.Button onClick={onDelete}>
          <FaTrash />
        </ui.Button>
      </ui.Item>
    </>
  )
}

export { TodoItem }