import React, { useContext } from 'react'
import Skeleton from 'react-loading-skeleton'
import styled from 'styled-components'
import { TodoContext } from '../TodoContext'

const ui = {
  Input: styled.input`
    box-sizing: border-box;
    width: 100%;
    padding: 12px 15px;
    border-radius: 10px;
    outline: none;
    font-size: 16px;
    border: none;
  `
}


const TodoSearch = () => {
  const { searchValue, setSearchValue, loading } = useContext(TodoContext)
  const handlerSearchChange = (event) => {
    setSearchValue(event.target.value)
  }
  return (
    <>
      {
        !loading
          ? <ui.Input type="text" placeholder='Cebolla' value={searchValue} onChange={handlerSearchChange} />
          : <Skeleton width='100%' height={40} />
      }
    </>
  )
}

export { TodoSearch }