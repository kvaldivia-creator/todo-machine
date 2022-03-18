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
  Center: styled.div`
    width: 60%;
    p {
      margin: 0;
      font-size: 14px;
      font-weight: bold;
      color: #630606;
    }
  `,
  Span: styled.span`
    text-decoration: ${({ completed }) => completed ? 'line-through' : 'none' };
    display: block;
    text-transform: capitalize;
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

function TodoItem({ onDelete, onComplete, completed, text, date}) {
  return (
    <>
      <ui.Item completed={completed}>
        <ui.Button onClick={onComplete}> 
          <FaCheck color={completed ? '#6EBF8B' : '#121212'} /> 
        </ui.Button>
        <ui.Center>
          <ui.Span completed={completed} >{text} </ui.Span>
          <p>{date}</p>
        </ui.Center>
        <ui.Button onClick={onDelete}>
          <FaTrash />
        </ui.Button>
      </ui.Item>
    </>
  )
}

export { TodoItem }