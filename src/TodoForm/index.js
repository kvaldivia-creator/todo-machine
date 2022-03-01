import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { TodoContext } from '../TodoContext'

const ui = {
  Form: styled.form`
    max-width: 300px;
    background-color: #fff;
    padding: 33px 40px;
    display: flex;
    align-content: center;
    flex-direction: column;
    border-radius: 8px;
  `,
  Label: styled.label`
    text-align: center;
    font-weight: bold;
    color: #1E1E1F;
    margin-bottom: 26px;
    font-size: 20px;
  `,
  TextArea: styled.textarea`
    background-color: #F9FBFC;
    border: 2px, solid #202329;
    border-radius: 2px;
    box-shadow: 0px 5px 50px rgba(32, 35, 41, 0.25);
    color: #1E1E1F;
    font-size: 20px;
    padding: 12px;
    height: 96px;
    width: calc(100%-25px);
    font-family: 'Rubik', sans-serif;

    ::placeholder {
      color: #a5a5a5;
      font-family: 'Rubik', sans-serif;
      font-weight: 400;
    }

    :focus {
      outline-color: #61DAFA;
    }
  `,
  ButtonsAction: styled.div`
    margin-top: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    .add {
      background-color: #61DAFA;
      box-shadow: 0px 5px 25px rgba(97, 218, 250, 0.5);
    }

    .cancel {
      background: transparent;
    }
  `,
  Button: styled.button`
    cursor: pointer;
    display: inline-block;
    font-size: 20px;
    color: #202329;
    font-weight: 400;
    width: 120px;
    height: 48px;
    border-radius: 2px;
    border: none;
    font-family: 'Montserrat';
  `,
  Legend: styled.span`
    color: red;
  `
}

function TodoForm() {
  const [newTextValue, setNewTextValue] = useState('')
  const [hint, setHint] = useState('')
  const { addTodo, setOpenModal } = useContext(TodoContext)

  const onSubmit = (event) => {
    event.preventDefault()
    if (newTextValue !== '') {
      addTodo(newTextValue)
      setOpenModal(false)
    } else {
      setHint('Por favor escriba una tarea.')
      setOpenModal(true)
    }
  }

  const onChange = (event) => {
    setNewTextValue(event.target.value)
    setHint('')
  }
  
  const onCancel = () => {
    setOpenModal(false)
  }
  return (
    <>
      <ui.Form onSubmit={onSubmit}>
        <ui.Label>Escribe tu nuevo TODO</ui.Label>
        <ui.TextArea value={newTextValue} onChange={onChange} placeholder='Escribe una tarea' />
        <ui.Legend>{hint}</ui.Legend>
        <ui.ButtonsAction>
          <ui.Button className='cancel' type='button' onClick={onCancel}>Cancelar</ui.Button>
          <ui.Button className='add' type='submit'>Añadir</ui.Button>
        </ui.ButtonsAction>
      </ui.Form>
    </>
  )
}

export { TodoForm }