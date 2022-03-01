import React from 'react'
import { FaPlus } from 'react-icons/fa'
import styled from 'styled-components'

const ui = {
  Button: styled.button`
    border-radius: 50%;
    padding: 5px;
    margin: 0 auto;
    margin-top: 20px;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 36px;
    border: none;
    background-color: #69DADB;
    cursor: pointer;
    z-index: 10;
  `
}

function CreateTodoButton({ setOpenModal, openModal }) {
  const toggleModal = () => {
    setOpenModal(!openModal)
  }
  return (
    <>
      <ui.Button type="button" onClick={toggleModal}>
        <FaPlus color='#ffffff' />
      </ui.Button>
    </>
  )
}

export { CreateTodoButton }